---
layout: page
title: The Smoking Gun: An Interactive Deep Dive
description: An interactive Streamlit application for a deep-dive analysis into Maven Fuzzy Factory's growth, uncovering the key drivers behind their success.
img: /assets/img/pr134.png
importance: 13
category: fun
date: 2025-09-30
images:
  compare: true
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr134.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr131.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr132.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr133.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr135.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr136.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---

<div class="caption">
    Screenshots from the interactive "Smoking Gun" analysis of the Maven Fuzzy Factory dataset.
</div>

This project is an interactive version of the "Growth Marketing Story" analysis. The original report was a static summary. This project is a live tool you can use to explore the data yourself.
I built a Streamlit app that lets you filter and analyze the Maven Fuzzy Factory data. It turns the analysis from a static report into an interactive tool where you can find the "smoking gun" behind the company's growth.

<hr>

### View the Interactive Application

The live Streamlit app is embedded below. You can use the filters and controls to explore the data and find your own insights.

<div class="embed-responsive embed-responsive-16by9">
    <iframe title="Fuzzy Factory Streamlit App" class="embed-responsive-item" src="https://fuzzy-factory.streamlit.app/?embed=true" frameborder="0" allowFullScreen="true"></iframe>
</div>

<small>You can also access the app directly: [here](https://fuzzy-factory.streamlit.app/){:target="\_blank"}</small>

<hr>

### Project Goals & Process

**Goal:** I wanted to go beyond static analysis and create a tool that lets people explore the Maven Fuzzy Factory data themselves. The idea was to build an app that shows not just *what* happened, but lets users figure out *how* and *why* it happened.

**Process:**
*   **Data Work:** I went back to the SQL queries from the first analysis and made them faster for a live app.
*   **App Development:** I used Python and Streamlit to build the user interface. I created widgets like date sliders and multi-select boxes for filtering.
*   **Visualization:** I used Plotly for the interactive charts. This lets you hover over data points, zoom in on timeframes, and filter the view.
*   **Deployment:** I put the final app on Streamlit Community Cloud so anyone can access and embed it.

### Key Features

The interactive dashboard allows you to:
*   Analyze month-over-month trends for key metrics like sessions, orders, and conversion rates.
*   Compare the efficiency and volume of different marketing channels (`gsearch` vs. `bsearch`, `brand` vs. `nonbrand`).
*   Look at the performance of specific landing pages to find the top performers and underachievers. These are the "smoking guns" of the growth strategy.