// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-research-agenda",
          title: "Research Agenda",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/research/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the research group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/people/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/contact/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/blog/";
          },
        },{id: "dropdown-courses",
              title: "Courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/teaching/";
              },
            },{id: "dropdown-news-archive",
              title: "News Archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/news/";
              },
            },{id: "dropdown-code-amp-talks",
              title: "code &amp; talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/resources/";
              },
            },{id: "dropdown-pi-profile",
              title: "PI Profile",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/cv/";
              },
            },{id: "post-value-gradient-weighted-model-based-reinforcement-learning",
        
          title: "Value Gradient weighted Model-Based Reinforcement Learning",
        
        description: "Value Gradient weighted Model-Based Reinforcement Learning presented at ICLR 2022",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio/blog/2022/vagram-voelcker/";
          
        },
      },{id: "post-remote-sim2real-for-dexterous-in-hand-manipulation",
        
          title: "Remote Sim2Real for Dexterous In-Hand Manipulation",
        
        description: "Transferring Dexterous Manipulation from GPU Simulation to a Remote Real-World TriFinger",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio/blog/2021/remote-sim2real-trifinger/";
          
        },
      },{id: "post-learning-tool-affordances-without-labels",
        
          title: "Learning Tool Affordances without Labels",
        
        description: "GIFT: Generalizable Interaction-aware Functional Tool representations (at RSS 2021)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio/blog/2021/giftturpin/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/al-folio/books/the_godfather/";
            },},{id: "news-awarded-with-cifar-ai-chair-2019",
          title: 'Awarded with CIFAR AI Chair 2019',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/2019-12-10-cifar-ai-chair/";
            },},{id: "news-organizing-iclr-workshop-on-neural-odes-in-physical-sciences",
          title: 'Organizing ICLR workshop on Neural ODEs in Physical Sciences',
          description: "",
          section: "News",},{id: "news-four-new-papers-accepted-at-icra-and-ra-l-sparkles",
          title: 'Four new papers accepted at ICRA and RA-L! :sparkles:',
          description: "",
          section: "News",},{id: "news-organizing-rss-workshop-on-visual-learning-and-reasoning-for-robotics",
          title: 'Organizing RSS workshop on Visual Learning and Reasoning for Robotics',
          description: "",
          section: "News",},{id: "news-organizing-rss-workshop-on-action-representation-learning",
          title: 'Organizing RSS workshop on Action Representation Learning',
          description: "",
          section: "News",},{id: "news-new-paper-on-online-meta-learning-accepted-at-uai-2020-sparkles",
          title: 'New paper on Online Meta-Learning accepted at UAI 2020! :sparkles:',
          description: "",
          section: "News",},{id: "news-invited-symposium-speaker-at-crv-2020",
          title: 'Invited Symposium Speaker at CRV 2020',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/2020-05-16-crv-speaker/";
            },},{id: "news-two-new-papers-accepted-at-icml-2020-sparkles",
          title: 'Two new papers accepted at ICML 2020! :sparkles:',
          description: "",
          section: "News",},{id: "news-invited-workshop-talks-at-cvpr-2020",
          title: 'Invited Workshop talks at CVPR 2020',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/2020-06-15-cvpr-speaker/";
            },},{id: "news-new-paper-on-mechanical-search-accepted-at-iros-2020-sparkles",
          title: 'New paper on Mechanical Search accepted at IROS 2020! :sparkles:',
          description: "",
          section: "News",},{id: "news-3-new-papers-on-causality-and-deep-learning-accepted-at-neurips-2020-sparkles",
          title: '3 new papers on Causality and Deep Learning accepted at NeurIPS 2020! :sparkles:...',
          description: "",
          section: "News",},{id: "news-publicity-chair-for-corl-20-and-area-chair-for-neurips-20-amp-amp-corl-20",
          title: 'Publicity Chair for CoRL’20 and Area Chair for NeurIPS’20 &amp;amp;amp; CoRL’20.',
          description: "",
          section: "News",},{id: "news-1-new-paper-on-learning-based-hybrid-control-accepted-at-corl-2020-sparkles",
          title: '1 new paper on Learning based Hybrid control accepted at CoRL 2020! :sparkles:...',
          description: "",
          section: "News",},{id: "news-co-organizing-cospar-2021-workshop-on-autonomy-in-space-science",
          title: 'Co-organizing COSPAR 2021 workshop on Autonomy in Space Science',
          description: "",
          section: "News",},{id: "news-area-chair-for-iclr-21-icra-21-rss-21-cvpr-21-and-iccv-21",
          title: 'Area Chair for ICLR’21, ICRA’21, RSS’21, CVPR’21, and ICCV’21.',
          description: "",
          section: "News",},{id: "news-the-paper-on-dibs-accepted-at-aaai-2021",
          title: 'The paper on DIBS accepted at AAAI 2021.',
          description: "",
          section: "News",},{id: "news-three-papers-csc-c-learning-skill-transfer-accepted-at-iclr",
          title: 'Three papers: CSC, C-Learning, Skill Transfer accepted at ICLR.',
          description: "",
          section: "News",},{id: "news-unsupervised-keypoint-representation-accepted-in-t-pami-sparkles",
          title: 'Unsupervised Keypoint Representation accepted in T-PAMI. :sparkles:',
          description: "",
          section: "News",},{id: "news-aaai-21-new-faculty-highlights-speaker-sparkles",
          title: 'AAAI-21 New Faculty Highlights speaker. :sparkles:',
          description: "",
          section: "News",},{id: "news-four-papers-laser-leaf-legged-robots-hand-design-accepted-at-icra",
          title: 'Four papers: LASER, LEAF, Legged Robots, Hand Design accepted at ICRA.',
          description: "",
          section: "News",},{id: "news-four-papers-cfvi-ob2i-copa-tesseract-accepted-at-icml",
          title: 'Four papers: cFVI, OB2I, COPA, Tesseract accepted at ICML.',
          description: "",
          section: "News",},{id: "news-three-papers-gift-rfvi-and-disect-accepted-at-rss",
          title: 'Three papers: GIFT, RFVI, and DiSeCT accepted at RSS.',
          description: "",
          section: "News",},{id: "news-disect-won-the-best-student-paper-award-at-rss-sparkles",
          title: 'DiSeCT won the Best Student Paper Award at RSS. :sparkles:',
          description: "",
          section: "News",},{id: "news-three-papers-seeing-glass-hlsm-and-s4rl-accepted-at-corl",
          title: 'Three papers: Seeing Glass, HLSM, and S4RL accepted at CoRL.',
          description: "",
          section: "News",},{id: "news-3-papers-drop-dtw-neural-automata-exploration-in-rl-accepted-at-neurips",
          title: '3 papers: Drop-DTW, Neural Automata, Exploration in RL accepted at Neurips.',
          description: "",
          section: "News",},{id: "news-organizing-iros-workshop-on-safe-real-world-autonomy",
          title: 'Organizing IROS workshop on Safe Real World Autonomy',
          description: "",
          section: "News",},{id: "news-organizing-neurips-workshop-on-deployable-decision-making-ddm",
          title: 'Organizing Neurips workshop on Deployable Decision Making (DDM)',
          description: "",
          section: "News",},{id: "news-organizing-neurips-workshop-on-deep-learning-amp-amp-differential-equations",
          title: 'Organizing Neurips workshop on Deep Learning &amp;amp;amp; Differential Equations',
          description: "",
          section: "News",},{id: "news-convergence-in-policy-gradients-accepted-at-aaai-22",
          title: 'Convergence in Policy Gradients accepted at AAAI 22.',
          description: "",
          section: "News",},{id: "news-vagram-shac-and-pbrl-accepted-at-iclr-22",
          title: 'VaGram, SHAC and PBRL accepted at ICLR 22.',
          description: "",
          section: "News",},{id: "news-new-papers-on-planning-plate-at-icra-22-and-rl-lfiw-at-l4dc-22",
          title: 'New papers on planning(PlaTe) at ICRA 22 and RL (LFIW) at L4DC 22....',
          description: "",
          section: "News",},{id: "news-mac-nsm-and-x-pool-accepted-at-cvpr-22",
          title: 'MAC, NSM and X-Pool accepted at CVPR 22.',
          description: "",
          section: "News",},{id: "news-3-new-rl-papers-koopman-rl-icml-lfiw-l4dc-amp-amp-glide-wafr",
          title: '3 New RL papers: Koopman-RL @ICML, LFIW @L4DC, &amp;amp;amp; GLIDE @WAFR',
          description: "",
          section: "News",},{id: "news-2-papers-at-iros-scalable-sim2real-amp-amp-mobile-manip-with-articulated-objects",
          title: '2 papers at IROS: Scalable Sim2Real &amp;amp;amp; Mobile-Manip with Articulated Objects.',
          description: "",
          section: "News",},{id: "news-workshop-talks-at-icra-and-rss-2022",
          title: 'Workshop Talks at ICRA and RSS 2022',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/2022-06-30-wksp-talks/";
            },},{id: "news-new-eccv-paper-on-differentiable-simulation-for-grasping",
          title: 'New ECCV Paper on Differentiable Simulation for Grasping.',
          description: "",
          section: "News",},{id: "news-3-papers-at-neurips-mocoda-breaking-bad-amp-amp-smpl",
          title: '3 papers at Neurips: MoCoda, Breaking Bad &amp;amp;amp; SMPL.',
          description: "",
          section: "News",},{id: "news-2-papers-at-corl-robotube-amp-amp-bayesian-obj-models",
          title: '2 papers at CoRL: RoboTube &amp;amp;amp; Bayesian Obj Models.',
          description: "",
          section: "News",},{id: "news-5-new-papers-at-icra-2023",
          title: '5 New Papers at ICRA 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/2023-01-15-icra-new-papers/";
            },},{id: "news-2-papers-at-iclr-slotformer-amp-amp-sea-for-structured-exploration",
          title: '2 papers at ICLR: Slotformer &amp;amp;amp; SEA for Structured Exploration.',
          description: "",
          section: "News",},{id: "news-isaac-orbit-is-now-accepted-at-ra-l-and-will-be-presented-at-iros-2023",
          title: 'Isaac ORBIT is now accepted at RA-L and will be presented at IROS...',
          description: "",
          section: "News",},{id: "news-quest-presented-at-neurips-2024",
          title: 'Quest presented at Neurips 2024',
          description: "",
          section: "News",},{id: "news-our-work-pwm-and-egosim-on-will-be-at-iclr-2025",
          title: 'Our work PWM and EgoSim on will be at ICLR 2025.',
          description: "",
          section: "News",},{id: "news-animesh-serves-as-program-chair-for-iclr-2025",
          title: 'Animesh serves as program chair for ICLR 2025',
          description: "",
          section: "News",},{id: "news-our-work-sufia-bc-rocoda-climb-on-will-be-at-icra-2025",
          title: 'Our work Sufia-BC, RoCODA, CLIMB on will be at ICRA 2025.',
          description: "",
          section: "News",},{id: "news-animesh-presents-at-icra-2025-keynote-see-slides",
          title: 'Animesh presents at ICRA 2025 Keynote (see slides)',
          description: "",
          section: "News",},{id: "people-albert-wilcox",
          title: 'Albert Wilcox',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/albert-wilcox/";
            },},{id: "people-animesh-garg",
          title: 'Animesh Garg',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/animesh-garg/";
            },},{id: "people-dennis-anthony",
          title: 'Dennis Anthony',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/dennis-anthony/";
            },},{id: "people-dylan-turpin",
          title: 'Dylan Turpin',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/dylan-turpin/";
            },},{id: "people-ezra-ameperosa",
          title: 'Ezra Ameperosa',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/ezra-ameperosa/";
            },},{id: "people-hrishit-leen",
          title: 'Hrishit Leen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/hrishit-leen/";
            },},{id: "people-ignat-georgiev",
          title: 'Ignat Georgiev',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/ignat-georgiev/";
            },},{id: "people-jeremy-collins",
          title: 'Jeremy Collins',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/jeremy-collins/";
            },},{id: "people-liquan-wang",
          title: 'Liquan Wang',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/liquan-wang/";
            },},{id: "people-lorand-chang",
          title: 'Lorand Chang',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/lorand-chang/";
            },},{id: "people-masoud-moghani",
          title: 'Masoud Moghani',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/masoud-moghani/";
            },},{id: "people-misroslav-bogdanovic",
          title: 'Misroslav Bogdanovic',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/misroslav-bogdanovic/";
            },},{id: "people-shuxin-cao",
          title: 'Shuxin Cao',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/shuxin-cao/";
            },},{id: "people-walker-byrnes",
          title: 'Walker Byrnes',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/walker-byrnes/";
            },},{id: "people-wei-yu",
          title: 'Wei Yu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/wei-yu/";
            },},{id: "people-yuchi-zhao",
          title: 'Yuchi Zhao',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/yuchi-zhao/";
            },},{id: "people-zihan-zhou",
          title: 'Zihan Zhou',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/al-folio/people/zihan-zhou/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/animesh-garg.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%69%6D%65%73%68.%67%61%72%67@%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/animesh-garg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/animeshgarg", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zp8V7ZMAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/animesh_garg", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
