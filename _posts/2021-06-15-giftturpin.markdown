---
layout: post
title: Learning Tool Affordances without Labels
date: 2021-06-15 11:12:00-0400
description: "GIFT: Generalizable Interaction-aware Functional Tool representations (at RSS 2021)"
source: /_bibliography/
bibliography: giftturpin.bib
bibliography_template: bib
---


## **Generalizable Interaction-aware Functional Tool Affordances without Labels**  
[Dylan Turpin](http://www.cs.toronto.edu/~dylanturpin/), [Liquan Wang](https://www.linkedin.com/in/liquan-wang-a37634196/?originalSubdomain=ca), [Stavros Tsogkas](https://tsogkas.github.io/), [Sven Dickinson](https://www.cs.toronto.edu/~sven/), [Animesh Garg](https://animesh.garg.tech/)  
*[Robotics Systems & Science](http://www.roboticsproceedings.org/rss17/p060.html), 2021.*   
[paper](https://arxiv.org/abs/2106.14973), [video](https://youtu.be/7N1XiIzu9v4)


![Teaser image for GIFT. Discover tool affordances by interacting with procedurally-generated tools across three manipulation tasks: hooking, reaching and hammering. Train an affordance model to detect sparse keypoints representing tool geometry and predict distributions over pairs of keypoints to grasp and interact with for each task by learning from the contact data of sampled trajectories. Affordance predictions from RGBD observations of unknown objects match expected task semantics across hooking, reaching and hammering and are similar to those of a human labeller, e.g. for hammering.]({{ 'gift-teaser.svg' | prepend: '/assets/img/blog/gift-jul21/' | prepend: site.baseurl | prepend: site.url }}){: width="120%"}

*Figure  1:  Rather  than  relying  on  human  labels,  the GIFT framework  discovers  affordances  from  goal-directed  interaction  with  a  set  of procedurally-generated tools.*



### Motivation
**1. We should represent tools by what we can do with them.**

When it comes to tools, ''What can I do with this?'' is the key question and there usually isn't just one answer.
There are many basic ways of using a hammer (to strike, to pry, to reach)
each of which contains many finer-grained possibilities (strike with
a high grip for precision, or a low grip for power).

We learn a representation that captures these possibilities.
Specifically, we represent an action possibility (i.e., an affordance) as a tuple
(task ID, grasp keypoint, interaction keypoint).

We build on a line of work that investigates behaviour-grounded object representations, especially KETO ([*Fang et al. 2019*](https://arxiv.org/abs/1910.11977)) and kPAM ([*Manuelli et al. 2019*](https://arxiv.org/abs/1903.06684)).
In contrast to these, our learned representations do not rely on human labels (as in kPAM) or a predefined manipulation strategy (as in KETO).

**2. Behaviour-grounded predictions are testable predictions.**

Because our predicted tool representations are *behaviour-grounded* (i.e., they correspond to possible actions)
we can test them against reality by executing the corresponding actions and checking
the result.
This ''predict, act, check'' routine gives us a *self-supervised* training loop that
does not rely on human labels.

To close the loop, we need a way of translating predicted representations
into executable motions, which is a challenge, because the space of possible actions is large.
Prior works rely on workarounds like additional human supervision
or constraining the action space,
but these simplifications come with serious drawbacks.

*Human supervision* (e.g., with keypoint labels) is expensive and introduces human bias.
We want our representations
to be discovered only from the constraints of the manipulation tasks.

*Constraining the action space* (e.g., to pre-defined motion primitives)
means some action possibilities will never
be explored.


**3. Constraining behaviour limits affordance discovery.**

If we constrain behaviour by limiting the action space
or using a pre-defined manipulation strategy,
we will never discover affordances corresponding to excluded behaviours.

We generate our trajectories with a simple sampling-based motion planner
that is conditioned on the predicted keypoints through a reward function
with one term encoding task success and another encouraging use of the selected keypoints.

Actions are sampled from the full action space,
so motion generation is free to use tools in unexpected ways,
discovering new possibilities that could not have been explored if we
were tied to a limited set of motion primitivies
or a pre-defined manipulation strategy.


### Method overview

![The training pipeline.]({{ 'gift-pipeline.svg' | prepend: '/assets/img/blog/gift-jul21/' | prepend: site.baseurl | prepend: site.url }}){: width="120%"}

*Figure 2: The training pipeline. Our framework learns affordance models for hooking, reaching and hammering by interacting with a set of tools.
All
three models share a task-independent keypoint detector, which takes an RGBD image of a tool and predicts a set of keypoints representing a
tool’s geometry and providing possible choices of grasp and interaction regions. The task-conditional portion of each model, which is trained
on the outcome of trajectories collected from motion planning, selects two keypoints which become our functional tool representation.*

**Collect experience in the full action space.**

We begin by generating a set of tools as concatenations of pairs of
convex meshes into T, X and L shapes.
We sample a tool from our training set, place it on a
table and capture an RGBD observation of the tool from above.

From this observation, our SparseKP network infers a set of keypoints
representing the tool's geometry and providing possible choices of regions
to grasp and interact with.
This module is pre-trained using unsupervised keypoint losses and is shared across tasks.

A grasp keypoint and provisional interaction keypoint are uniformly
sampled from the sparse ones.
We take a crop of the RGBD observation around the grasp keypoint
and pass it to a grasping network to infer a nearby stable grasp.
This grasp is executed and we use MPPI to generate the rest of the trajectory.
MPPI iteratively samples action sequences from the full action space and takes their average weighted by reward.

Part of this reward encodes task success and part encourages
use of the provisional interaction keypoint.
In this way we are able to sample from the full action space
while still conditioning on the sparse selection of keypoints
on the tool's surface.

**Extract training examples from trajectory contact data.**

Once we have a trajectory, we extract a training example.
This consists of a reward, grasp KP, interaction KP and the full set of sparse keypoints.
We replace the provisional choice of interaction KP with the keypoint closest
to the actual first contact between the tool and the target object.

The provisional interaction KP is sampled, and conditioned on,
in order to encourage exploration of different manipulation strategies.
But in the end, we want to use whichever interaction keypoint
works best for the task.

**Train keypoint selection to maximize task reward.**

We sample a training example and build a graph out of its sparse keypoints.
This graph is fed to a task-specific GNN, which predicts a distribution over pairs of keypoint indices (i.e., the joint distribution over grasp and interaction keypoints).
Finally, we update the GNN weights using REINFORCE.

At test time, we sample a tool from the holdout test set.
The grasp and interaction keypoints are selected
based on the predicted distribution, rather than uniformly, and we
enforce that the selected interaction point be used, rather than treating it as provisional.

### Results

So, how well does it work in practice?

Quantitatively GIFT beats baseline methods on all three tasks and qualitatively
the choices of grasp and interaction points usually match task semantics and agree with
the choices of a human oracle.

![Quantitative results.]({{ 'gift-table.svg' | prepend: '/assets/img/blog/gift-jul21/' | prepend: site.baseurl | prepend: site.url }}){: width="70%"}

*Table 1: GIFT outperforms baselines on all tasks and matches a human oracle on two of three tasks using novel tools. Reward is normalized with respect to the human oracle.*

<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.250%;"><iframe src="https://streamable.com/e/6l3jwp" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>

*Video 1: Hammering a peg with tools from the holdout set.
Low grasp points increase leverage (providing greater
strike point velocity and peg impulse for a given joint velocity).
Strike points on the hard metallic head allow accumulated
kinetic energy to be rapidly transferred to the peg for
maximum impulse.*

<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.250%;"><iframe src="https://streamable.com/e/sehup0" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>

*Video 2: Hooking a thermos with tools from the holdout set.
Our original intention was to constrain the task such that only the
right angle between head and handle could be used to hook.
In fact, the motion planner finds other solutions.*

<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.250%;"><iframe src="https://streamable.com/e/ciwknw" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>

*Video 3: Constrained reaching with tools from the holdout set.
To manipulate an object on the other side of a wall,
the tool must fit through the hole and reach the
target object.*

### Future directions

By grounding our affordance representation in contact data
and sampling trajectories from the full action space,
we are able to discover unbiased affordances for each task
without human labels.
There are however important limitations to our method that we think future work could address.

Our sparse keypoints are stored as raw locations, without any additional property encodings.
A natural extension to our method would encode additional local information
at each keypoint.
This could capture local geometric or material properties and allow
for more robust reasoning about the relationship between materials,
fine-grained geometry
and task requirements.

Our motion sampling routine depends on access to simulatable dynamics.
This makes it non-trivial to transfer our results to real robots.
We plan to experiment with recovering 3D models from visual observations, so we can leverage our learned representation to plan in simulator and execute on a real robot.

For details on the background, implementation and results read the full paper [here](https://arxiv.org/abs/2106.14973) and watch the [presentation](https://streamable.com/eylzdj).  
