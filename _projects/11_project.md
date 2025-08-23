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

This project involved a complete business intelligence workflow using data from **Maven Market**, a multi-national grocery chain with locations in Canada, Mexico, and the United States. The goal was to transform raw transactional data into an actionable, interactive dashboard to monitor key performance metrics.

<hr>

### View the Interactive Report: [here](https://app.powerbi.com/view?r=eyJrIjoiZmUxM2QwZWQtMDM2Ni00ZjA0LTljZGUtNDAxNmVmZTk3NjNmIiwidCI6ImEyYWYxMzczLTA2ZmQtNDgwNy1iYjgxLThhMmFhNmIwNzc3NiJ9){:target="\_blank"}

<small>Note: You must replace the link above with the public URL to your own Power BI report.</small>
<div class="embed-responsive embed-responsive-16by9">
    <iframe title="Maven_Market_Report_COMPLETE" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmUxM2QwZWQtMDM2Ni00ZjA0LTljZGUtNDAxNmVmZTk3NjNmIiwidCI6ImEyYWYxMzczLTA2ZmQtNDgwNy1iYjgxLThhMmFhNmIwNzc3NiJ9" frameborder="0" allowFullScreen="true"></iframe>
</div>

<hr>

### Project Goals & Process

**Goal:** The primary objective was to connect to multiple raw CSV files, build a robust relational data model, and design a dynamic dashboard to analyze transaction volumes, profit, and return rates by product brand and region.

**Process:** My process followed the entire business intelligence workflow:
* **Connecting & Shaping Data:** I connected to a folder of CSVs containing transaction and returns data for 1997 and 1998, along with lookup tables for customers, products, stores, and regions. Using Power Query, I combined files, merged columns to create unique identifiers, and ensured all data types were accurate.
* **Creating the Data Model:** I built a relational model, arranging the lookup tables and data tables into a clean schema. I established one-to-many relationships between the tables, ensuring filter context flowed downstream correctly from lookups to data.
* **Adding DAX Measures:** I developed a number of DAX measures to calculate key metrics, including Total Transactions, Total Revenue, Profit Margin, Return Rate, and complex time-intelligence calculations like Year-to-Date Revenue and Revenue vs. Target.

### Insights & Final Report

The final report provides a comprehensive overview of topline performance, allowing users to drill down into specific product brands and regions to identify key business drivers.

**Key features of the dashboard include:**
* A matrix showing **Total Transactions, Profit, and Return Rates** for the top 30 product brands, with conditional formatting to highlight performance.
* KPI cards to monitor **Current Month Transactions** against the previous month's target.
* A treemap visualizing **Total Revenue by Store Country**, allowing for drill-down into specific cities.
* Interactive bookmarks to highlight specific insights, such as when a particular store location hits a sales milestone.