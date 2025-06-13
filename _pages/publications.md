---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
# toc:
#     sidebar: left
#   min_level: 2
#   max_level: 4

# toc is same as type_order in _config.ym: [unpublished, article, workshop, thesis, patent, techreport, misc]
toc:
  beginning: true
  sidebar: left
  min_level: 2
  max_level: 3
  # name: preprints
  # name: papers
  # name: Workshop
images:
  venobox: true
tags: robotics, vision, machine learning, reinforcement learning, simulation
---

For the up-to-date publication list, please see **[Google Scholar](http://scholar.google.com/citations?user=zp8V7ZMAAAAJ&hl=en)** or **[Semantic Scholar](https://www.semanticscholar.org/author/Animesh-Garg/1873736)** pages.  
For coverage of research in press, please see [Press & Media]({{ site.baseurl }}/media/).

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}
{% if page.tags %}

  <div class="tags">
    {% assign tags = page.tags | split: ',' %}
    {% for tag in tags %}
      {% assign tag = tag | strip %}
      {% if tag != '' %}
        {% comment %} <span class="badge bg-secondary">{{ tag }}</span> {% endcomment %}

        <button
          type="button"
          class="btn btn-sm btn-outline-light z-depth-0 tag-filter"
          data-tag="{{ tag | escape }}"
          role="button"
        >
          {{ tag }}
        </button>

        <!-- <a class="tag-filter btn btn-sm btn-outline-info z-depth-0" data-tag="{{ tag | escape }}" role="button">{{ tag }}</a> -->
      {% endif %}
    {% endfor %}

  </div>
{% endif %}

<div class="publications">

{% bibliography %}

</div>
