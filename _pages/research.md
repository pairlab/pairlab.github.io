---
layout: page
title: research
permalink: /research/
description: PAIR research thrusts
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: true
---

We aim to build algorithms for perceptual representations learned by and for interaction, causal understanding of mechanisms, and physically-grounded reasoning in practical settings. An emblematic north star is to enable an autonomous robot to watch an instructional video, or a set of these videos, and then learn a policy to execute the task in a new setting. We build both algorithms and systems that have a broad range of applications in different domains in robot autonomy.
PAIR group blends ideas in _Causality_, _Perception_, and _Reinforcement Learning_ towards this vision.

As a group we pride ourselves on building and applying learning algorithms on different real robot platforms.

<div class="row mt-3 align-items-center justify-content-around">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-planning-robot1-small.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-cavin.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-multimodal-test.gif" class="rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
</div>
<div class="caption">
    Personal & Service Robotics
</div>

<div class="row mt-3 align-items-center justify-content-around">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-cutting.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-suturing.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-acubot.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
</div>
<div class="caption">
    Surgical & Healthcare Robotics
</div>

<div class="row mt-3 align-items-center justify-content-around">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-laikago-skateboard.gif" class="img-fluid rounded z-depth-1 " zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-laikago-dr.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-laikago-kick.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Locomanipulation
</div>

### 1. Generalizable Representations in RL for Robotics

A key focus of our work is to understand the role of representations in RL towards efficiency and generalization in skill acquisition. RL is mainly composed of State Space (Input), Action space (Output), a Learning Rule, and Policy (or value) model.

Structured biases upend contemporary methods in all four dimensions, pointing to a need for deeper analysis of representations in RL.

- States: [Unsupervised Keypoints](http://arxiv.org/abs/2001.09518), [Making Sense of Touch and Vision](https://sites.google.com/view/visionandtouch)
- Objects Representations: [Task Oriented Grasping](https://sites.google.com/view/task-oriented-grasp), [Affordance for Tool-Use](https://sites.google.com/view/task-oriented-grasp)
- Actions: [VICES](https://arxiv.org/abs/1906.08880), [LASER](https://www.pair.toronto.edu/laser), [GliDE](https://sites.google.com/view/centroidal-rl)
- Algorithms: [C-Learning](https://arxiv.org/abs/2011.12363), [LEAF](http://arxiv.org/abs/2005.10934), [OCEAN](http://arxiv.org/abs/2008.07087)
- Architectures: [Deep-Dense nets in RL](https://sites.google.com/view/d2rl/home)

<div class="row mt-3 justify-content-around align-items-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-tog.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-laser-intro.jpg" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-clearning.gif" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true %}
    </div>
</div>
- 3D Vision: Object and Scene representations for manipulation.
- Perceptual Concept Learning
- Geomteric Deep Learning for discovery of symmetries

### 2. Causal Discovery and Inference in Robotics

Causal understanding is one of key pillars of my current and future agenda. A simulator is a generative world model, and similarly follows a system of structural mechanisms. However, model learning focuses solely on statistical dependence, while Causal Models go beyond it to build representations that support intervention, planning, and modular reasoning. These methods provide a concrete step towards bridging vision and robotics through sub-goal inference and counterfactual imagination.

<div class="row mt-3 justify-content-around align-items-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-vcdn.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-mac.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

- Disentangled Generative Models: [Semi-Supervised StyleGAN](https://sites.google.com/nvidia.com/semi-stylegan), [Unsupervised Keypoints](https://github.com/NVIDIA/UnsupervisedLandmarkLearning)
- Causal Factor Graphs: [Visual Causal Discovery](https://yunzhuli.github.io/V-CDN/)
- Instruction Guided Counterfactual Generation: [Action Concepts](https://iccv-mac.github.io/MAC/)

### 3. Crowd-Scale Robot Learning with Imitation/Offline/Batch RL

Data-driven methods help RL in exploration and reward specification. Robot learning, however, is limited by modest-sized real data.
Access to data brings new algorithmic opportunities to robotics, as it did in vision and language. However, it also poses challenges due to static nature of data and covariate shifts.

<div class="row mt-3 align-items-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-rt-alps.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-roboturk.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-coda.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

- Scalable Teleoperation with Roboturk: [Roboturk-v1](http://roboturk.stanford.edu/), [Roboturk-v2](https://roboturk.stanford.edu/realrobotdataset#tasks)
- Imitation Learning: [AC-Teach](http://arxiv.org/abs/1909.04121), [LbW](http://arxiv.org/abs/2101.07241), [Goal-based Imitation](http://arxiv.org/abs/1911.05864)
- Offline/Batch Policy Learning and Causal Data Augmengation: [IRIS](https://sites.google.com/stanford.edu/iris/), [CoDA](https://arxiv.org/abs/2007.02863), [S4RL](http://arxiv.org/abs/2103.06326)
- Safe Transfer to Real Systems: [Adversarial Policy Learning](https://stanfordvl.github.io/ARPL/), [Adaptive Polict Transfer](https://arxiv.org/abs/1707.04674), [Conservative Safety Critics](https://sites.google.com/view/conservative-safety-critics/home)

### 4. Structured Biases for Hierarchical Planning

Procedural reasoning, such as in robotics, needs both skills and their structured composition for interaction planning towards a higher-order objective.
However, manual composition of skills via a finite state-machine design is both tedious and unscalable. Thus the need for inductive bias is intensified for cognitive reasoning. I have developed imitation guided policy learning in abstract spaces for hierarchically structure tasks.

<div class="row mt-3 align-items-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/res-ntp-small.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

- Neural Planning Modules for One-Shot Imitation: [NTP](https://stanfordvl.github.io/ntp/), [NTG](https://arxiv.org/abs/1807.03480), [Continuous Symbolic Planner](https://arxiv.org/abs/1908.06769)
- Task Structure Representations: [Transition State Clustering](https://www.youtube.com/watch?time_continue=2&v=L561cJh7DLE), [TSC-DL](http://berkeleyautomation.github.io/tsc-dl/), [SWIRL](https://animesh.garg.tech/assets/pdf/garg_swirl_ijrr18.pdf)
- Learning from Videos: [Finding-it](https://finding-it.github.io/)
- Dynamics with Latent Hierarchical Structure: [CAVIN](http://pair.stanford.edu/cavin/), [Skill Hierarchies](http://arxiv.org/abs/2011.13897)

### 5. Applications to Real Robot Systems

The algorithmic ideas have been motivated by problems in mobility and manipulation in robotics, and have been evaluated on various physical robot platforms.

<div class="row mt-3 align-items-center justify-content-around">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/real-robots-garg.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
- Personal & Service Robotics: [Tool Use](https://sites.google.com/view/task-oriented-grasp), [Task Planning](https://www.youtube.com/watch?v=OdqJuvAHvGE), [Assembly](https://www.youtube.com/watch?v=NwMukXa8kys&feature=youtu.be), [Pick & place](https://ai.stanford.edu/mech-search/multistep), [Laundry Layout](https://roboturk.stanford.edu/realrobotdataset#tasks), [Assistive Teleoperation](http://arxiv.org/abs/1909.09674), [Mechanical Search](http://arxiv.org/abs/1903.01588)
- Surgical & Healthcare: [Debridement](https://youtu.be/beVWB6NtAaA), [Suturing](https://youtu.be/z1ehShXFToc), [Cutting](https://youtu.be/l6gQg2VbGcc), [Extraction](https://www.youtube.com/watch?v=YiPq9t0tR3U), [Radiotherapy](https://www.youtube.com/watch?v=Kk_wHiu8nGg&feature=youtu.be)
- Legged Robotics: [Contact Planning](https://news.developer.nvidia.com/contact-adaptive-controller-locomotion), [Domain Randomization](https://www.pair.toronto.edu/understanding-dr)
