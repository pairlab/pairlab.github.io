---
layout: page
div_class: people
permalink: /people/
title: people
description: members of the research group
nav: true
nav_order: 4
tabs: true
lab_pictures: assets/img/pair-group-pictures/
pretty_table: true
images:
  compare: true
  slider: true
  spotlight: true
display_categories: [pi, postdoc, phd, ms, ug, visitor] #ordered list
display_status: [current, alumni]
---
  
{% if page.lab_pictures %}
{% assign lab_images = site.static_files | where_exp: "file", "file.path contains page.lab_pictures" %}
{% assign highres_images = lab_images | where_exp: "img", "img.path contains '-1400.webp'" %}
{% assign unique_images = highres_images | uniq: "basename" %}
{% assign lab_images = unique_images %}
  <!-- <swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true"> -->
<div style="max-width: 900px; margin: 0 auto;">
  <swiper-container
    style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff; width: 80%; height: 480px;"
    class="mySwiper"
    pagination-dynamic-bullets="true"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
  >
    <style>
      @media (max-width: 600px) {
        .mySwiper {
          height: 180px !important;
        }
        .mySwiper .swiper-slide img {
          height: 160px !important;
        }
      }
      .mySwiper, .mySwiper .swiper-wrapper {
        width: 100% !important;
        height: 640px !important;
        min-height: 160px;
      }
      .mySwiper .swiper-slide img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
        display: block;
        border-radius: 8px;
      }
    </style>
    {% for lab_image in lab_images %}    
      <swiper-slide>
        {% include figure.liquid loading="eager" path=lab_image.path class="img-fluid rounded z-depth-1" %}
      </swiper-slide> 
    {% endfor %}
  </swiper-container>
</div>

  <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="5" free-mode="true" watch-slides-progress="true">
    {% for lab_image in lab_images %}    
        <swiper-slide>
          {% include figure.liquid loading="eager" path=lab_image.path class="img-fluid rounded z-depth-1" %}
        </swiper-slide> 
      {% endfor %}
  </swiper-container>

{% endif %}


<br>
### Current Members

<!-- pages/people.md -->
<div class="people">
  <!-- Display sorted list of people by role -->
  {% for category in page.display_categories %}
    {% assign categorized_people = site.people | where: "category", category %}
    {% assign sorted_people = categorized_people | sort_natural: "name" %}
    <!-- Generate cards for each person -->
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for people in sorted_people %}
          {% if people.status contains "current" %}
            {% include people_card.liquid %}                
          {% endif %}
        {% endfor %}
      </div>
    </div>          
  {% endfor %}
</div>

<br>
### Alumni

We have been fortunate to work with exemplary colleagues over the years.

{% details **Graduates/Postdocs** %}

| Name | Institution | Degree | Year | Currently at |
|--- | --- | --- | --- | --- |
| [Kourosh Darvish](https://www.linkedin.com/in/kouroshdarvish/) | UofT | Postdoc | 2022-2024 | AC, UofT |
| [Siqi Zhou](https://siqizhou.com) | UofT | Postdoc | 2022-2022 | TU Munich |
| [Nikita Dvornik](https://www.linkedin.com/in/nikita-dvornik/) | UofT | Postdoc | 2021-2022 | Waabi |
| [Irene Zhang](https://irenezhang30.github.io/) | UofT | MSc (CS) | 2020-2022 | PhD, Oxford|
| [Matthew Zhang](https://scholar.google.com/citations?user=Y1y2jdoAAAAJ&hl=en) | UofT | MSc (CS) | 2020-2022 | PhD, UofT|
| [Dylan Turpin](http://www.cs.toronto.edu/~dylanturpin/) | UofT | MSc (CS) | 2019-2021 | PhD, UofT|
| [Homanga Bhardwaj](https://homangab.github.io/) | UofT | MSc (CS) | 2019-2021 | PhD, CMU|

{% enddetails %}

{% details **Undergraduates** %}

| Name | Institution | Degree | Year | Currently at |
|--- | --- | --- | --- | --- |
| [Jia Lin (Alan) Yuan](https://www.linkedin.com/in/jalnyn/) | UofT | BS (CS)| 2021-2024 | MScAC, Instacart |
| [Arthur Allshire](https://allshire.org) | UofT | Engg. Sci.  | 2020-2023 | PhD, UC Berkeley |
| [Ritvik Singh](https://www.linkedin.com/in/ritvik-singh/) | UofT | Engg. Sci. | 2020-2023 | Nvidia |
| [Jingzhou (Jason) Liu](https://www.linkedin.com/in/jasonjzliu/) | UofT | Engg. Sci | 2020-2023 | PhD, CMU |
| [Alice Zhuo](https://www.linkedin.com/in/alice-x-zhou/ca) | UofT | Engg. Sci | 2020-2023 | Google |
| [Songheng Yin](https://www.linkedin.com/in/songheng-yin-549a78170/) | UofT | BS (CS) | 2020-2022 | Columbia, Mujin |
| [Varun Lodaya](https://www.linkedin.com/in/varun-lodaya/) | UofT | BS (CS) | 2020-2022 | Deep Genomics |
| [Advaya Gupta](https://www.linkedin.com/in/advaya-gupta-5a2263151) | UofT | BS (CS) | 2020-2022 | Stanford |
| [Xintong (Oscar) Zhou](https://www.linkedin.com/in/xintong-zhou-066a1b179/) | UofT | BS (CS) | 2020-2023 | CMU |
| [Richard Ren](https://www.linkedin.com/in/richard-ren-1762ab17a/) | UofT | Engg. Sci | 2020-2022 | |
| [Helen Wang](https://www.linkedin.com/in/yi-ru-helen-wang/) | UofT | Engg. Sci | 2020-2022 | PhD, UW |
| [Dhananjay Ashok](https://www.linkedin.com/in/dhananjay-ashok-576342142/) | UofT | BS (CS)| 2020-2022 | PhD, USC |
| [Yanxin (Anna) Ding](https://www.linkedin.com/in/yanxin-anna-ding/) | UofT | BS (CS)| 2021-2022 | Google |
| [Siyan Zhao](https://www.linkedin.com/in/siyanzhao/) | UofT | Engg. Sci.| 2021-2022 | Phd, UCLA |
| [Quinxi (Quincy) Yu](https://www.linkedin.com/in/qinxi-yu-8b83b419a/?originalSubdomain=ca) | UofT | BS (CS)| 2021-2022 | AWS |
| [Calvin Yu](https://www.linkedin.com/in/calvin00/) | UofT | BS (CS)| 2021-2022 | Apple |
| [Ming Yu Wang](https://www.linkedin.com/in/ming-wang-2t4nsci) | UofT | Engg. Sci| 2021-2022 | Stripe |
| [Umid Targuliyev](https://www.linkedin.com/in/umid-targuliyev/) | UofT | BS (CS)| 2021-2022 | Caspian Innovation Center |
| [Shysta Sehgal](https://www.linkedin.com/in/shysta-sehgal/) | UofT | BS (CS, CogSci)| 2021-2022 | PhD, UofT |
| [Liquan Wang](https://www.linkedin.com/in/liquan-wang-a37634196/?originalSubdomain=ca) | UofT | BS (CS) | 2019-2021 | PhD, Georgia Tech |
| [Quanzhou Li](https://quanzhou-li.github.io/) | UofT | BS (ECE) | 2020-2021 | PhD, NTU |
| [James Liang](http://jamesliang.ca/) | UofT | BS (Engg. Sci.) | 2020-2021 | In Memoriam |
| [Samarth Sinha](https://www.samsinha.me/) | UofT | BS (ECE) | 2019-2021 | Luma Labs|
| [Anup Deb](https://www.linkedin.com/in/anup-deb/) | UofT | Engg. Sci | 2020-2021 | Citadel |
| [Tianxu An](https://www.linkedin.com/in/tianxu-an-a6b053154/) | UofT | Engg. Sci. (Rob) | 2020-2021 | PhD ETH |
| [Winston Chen](https://www.linkedin.com/in/wenxinchen11/) | UofT | Engg. Sci. (Robotics) | 2019-2020 | Google |
| | | | | |
| [Keyu Long](https://www.linkedin.com/in/keyu-long/) | UofT | MScAC | 2020 | GPTZero|
| [Panteha Naderian](https://www.linkedin.com/in/panteha-naderian/) | UofT | MScAC | 2020 | StackAdapt |
| [Priya Thakur](https://www.linkedin.com/in/priyathakur95/) | UofT | MScAC | 2020 | Google |
| [Mohan Zhang](https://www.linkedin.com/in/mohan-zhang-b00b94180/) | UofT | MScAC | 2020 | Sixty Degree Capital (VC) |
 
 {% enddetails %}

 {% details **Visitors & Collaborators** %}

 | Name | Institution | Degree | Year | Currently at |
|--- | --- | --- | --- | --- |
| [Theophile Gaudin](https://www.linkedin.com/in/th%C3%A9ophile-gaudin-a4a29381/) | UofT| PhD | 2019-2022 | Exscientia |         
| [Haoyu Xiong](https://haoyu-x.github.io/) | TJU| BS | 2020-2022 | MIT, PhD |   
| [Alexandra Volokhova](https://alexandravolokhova.github.io/) | MIPT | MSc | 2020-2021 | MILA, PhD |
| [Jiankai (Jack) Sun](https://github.com/Jiankai-Sun) | CUHK | BS | 2020-2021 | Stanford, PhD |
| [Chaitanya Devaguptatu](https://tdchaitanya.github.io/) | IIT Hyd | MSc | 2021 | Fujitsu Research |   
| [Chenjia Bai](https://scholar.google.com/citations?user=Rm_1y2kAAAAJ&hl=en) | [HIT](http://en.hit.edu.cn/) | PhD | 2021 | TeleAI |   
| [Mayank Mittal](https://mayankm96.github.io/) | ETH | MSc | 2020-2021 | PhD ETH |
| [Sizhe Sui](https://www.linkedin.com/in/sizhe-sui/) | SJTU | BS | 2020 | PhD UT Austin | 

 {% enddetails %}

<!-- 
### [Spotlight JS](https://nextapps-de.github.io/spotlight/)
  -->
<!-- Group 1 -->
<!-- 
<div class="spotlight-group">
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" />
    </a>
</div>
 -->