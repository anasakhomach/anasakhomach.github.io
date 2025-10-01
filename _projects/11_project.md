---
layout: page
title: Maven Market Sales Analysis
description: An interactive Power BI dashboard analyzing sales trends for a multi-national grocery chain.
img: /assets/img/pr5.jpg
importance: 11
category: fun
date: 2025-08-23
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
    Screenshots from the Maven Market Power BI project, from data shaping to the final dashboard.
</div>

This project was a full business intelligence workflow for **Maven Market**, a grocery chain in Canada, Mexico, and the US. I took raw transaction data and turned it into an interactive dashboard to track performance.

<hr>

### View the Interactive Report: [here](https://app.powerbi.com/view?r=eyJrIjoiZmUxM2QwZWQtMDM2Ni00ZjA0LTljZGUtNDAxNmVmZTk3NjNmIiwidCI6ImEyYWYxMzczLTA2ZmQtNDgwNy1iYjgxLThhMmFhNmIwNzc3NiJ9){:target="\_blank"}

<small>Note: You must replace the link above with the public URL to your own Power BI report.</small>
<div class="embed-responsive embed-responsive-16by9">
    <iframe title="Maven_Market_Report_COMPLETE" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmUxM2QwZWQtMDM2Ni00ZjA0LTljZGUtNDAxNmVmZTk3NjNmIiwidCI6ImEyYWYxMzczLTA2ZmQtNDgwNy1iYjgxLThhMmFhNmIwNzc3NiJ9" frameborder="0" allowFullScreen="true"></iframe>
</div>

<hr>

### Project Goals & Process

**Goal:** The main goal was to connect to several CSV files, build a solid data model, and create a dashboard to analyze transactions, profit, and returns by brand and region.

**Process:** I followed the standard BI workflow:
* **Connecting & Shaping Data:** I started with a folder of CSVs with transaction and returns data. Using Power Query, I combined the files and cleaned them up to create unique IDs and fix data types.
* **Creating the Data Model:** I built a relational model to connect the data tables with lookup tables for customers, products, and stores. This made sure the filters worked correctly.
* **Adding DAX Measures:** I wrote several DAX measures for key metrics like Total Transactions, Total Revenue, Profit Margin, and Return Rate. I also added time-based calculations like Year-to-Date Revenue.

### Insights & Final Report

The final report gives a high-level view of performance. Users can also look closer at specific product brands and regions to see what drives the business.

**Key features of the dashboard include:**
* A table showing **Total Transactions, Profit, and Return Rates** for the top 30 product brands. It uses color to highlight performance.
* KPI cards to monitor **Current Month Transactions** against the previous month's target.
* A treemap showing **Total Revenue by Store Country**, which lets you see details for each city.
* Bookmarks to highlight key moments, like when a store hits a sales milestone.