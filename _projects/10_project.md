---
layout: page
title: My New Project
description: A test project to get things working.
img: /assets/img/r1.jpg
importance: 10
category: fun
date: 2024-08-21
images:
  compare: true
  slider: true
---


<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/r3.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/r2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/r1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---
<div class="caption">
    This is a test image for my new project.
</div>


This project involved analyzing the AdventureWorks dataset to uncover sales trends and key performance indicators. I designed and built a comprehensive, interactive dashboard using Microsoft Power BI to present these findings in an accessible and user-friendly way.

The live, interactive report is embedded below. You can click on different charts and filters to explore the data.

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

[**Goal:** Briefly describe the main objective. For example: "The primary goal was to identify the top-performing products, regions, and sales channels to provide actionable insights for the marketing team."]

[**Process:** Describe your steps. For example: "My process involved connecting to the SQL database, performing data cleaning and transformation in Power Query, creating a relational data model, and then developing DAX measures to calculate key metrics like Year-over-Year growth and profit margins."]

[**Insights:** List a few key findings. For example: "Key insights revealed that online sales significantly outperform reseller sales in the European market, and that specific bike models are major drivers of profit."]

