---
layout: page
title: Adventure Wroks Sales Analysis
description: A Power BI dashboard for the AdventureWorks dataset, built as part of the PL-300 Microsoft exam preparation.
img: /assets/img/r1.jpg
importance: 10
category: fun
date: 2024-08-21
images:
  compare: true
  slider: true
---


<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr3.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---
<div class="caption">
    Screenshots from the AdventureWorks Power BI project, from data shaping to the final dashboard.
</div>

This project is an analysis of the AdventureWorks dataset. I used Microsoft Power BI to build an interactive dashboard that shows sales trends and other key metrics.
The goal was to make the data easy to explore. You can click on the charts and filters to see the data for yourself.

<hr>

<!--
<div class="embed-responsive embed-responsive-16by9">
    <iframe title="AdventureWorks Report_Visualization Complete" class="embed-responsive-item" src="https://app.powerbi.com/reportEmbed?reportId=40f82ff2-8caf-41f6-a0fd-8d1f3ee7febd&autoAuth=true&ctid=a2af1373-06fd-4807-bb81-8a2aa6b07776&actionBarEnabled=true" frameborder="0" allowFullScreen="true"></iframe>
</div>
-->

### View the Interactive Report: [here](https://app.powerbi.com/reportEmbed?reportId=40f82ff2-8caf-41f6-a0fd-8d1f3ee7febd&autoAuth=true&ctid=a2af1373-06fd-4807-bb81-8a2aa6b07776){:target="\_blank"}

<small>Note: Viewing this report may require a Power BI account.</small>

<hr>


### Project Goals & Process

**Goal:** The main goal was to find the best-selling products, regions, and sales channels. This was to give the marketing team clear insights to act on.

**Process:** I connected to the SQL database, cleaned the data in Power Query, and built a data model. Then, I wrote DAX measures to calculate metrics like year-over-year growth and profit margins.

**Insights:** I found that online sales were much higher than reseller sales in Europe. I also saw that a few specific bike models were driving most of the profit.
