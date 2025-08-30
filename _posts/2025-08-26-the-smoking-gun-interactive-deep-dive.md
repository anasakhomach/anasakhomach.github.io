---
layout: post
title: "The Smoking Gun: An Interactive Deep Dive"
date: 2025-08-26 18:30:00
description: "Going beyond the initial investigation to find the real levers of growth. An interactive analysis using Plotly to uncover the story behind the numbers."
img: /assets/img/pr13.png
tags: portfolio-build data-visualization plotly python sql
categories: project-deep-dive
images:
  compare: true
  slider: true
chart:
  plotly: true
---
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr13.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr14.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr15.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr16.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr17.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr18.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---
### The Briefing: A Lingering Question

The initial investigation into Maven Fuzzy Factory was closed. We had mapped the company's incredible growth, identified their core strategies, and celebrated their success. But a good detective is never satisfied. A single piece of evidence kept nagging at me: the explosive 930% growth in 2012. It was too clean, too perfect. I had the "what," but I needed the "how."

The mission was to reopen the case, this time with a more powerful magnifying glass. I needed to go beyond static charts and put the data on the stand for a live interrogation. The goal: use interactive visualizations to isolate the specific channels and landing pages that were acting as the secret engine for this growth.

### The Interrogation Room: Interactive Evidence

This time, static images wouldn't cut it. I needed to let the data breathe, to allow for dynamic exploration. I used Plotly to build a series of interactive charts, turning my case file into a live intelligence dashboard.

#### Exhibit A: The Growth Engine's Dashboard

The first chart tracks the key performance indicators month-over-month during the critical growth period. We can see not just an increase in traffic, but a significant improvement in efficiency.

{% raw %}
{% include weekly_performance_embed.html %}
{% endraw %}

#### Exhibit B: Channel Efficiency Under Scrutiny
Next, I put the two primary paid channels—gsearch nonbrand and gsearch brand—head-to-head. One is built for volume, the other for precision. The data reveals a classic trade-off between reach and efficiency.

#### Exhibit C: The Smoking Gun
The final piece of evidence is the most damning. After isolating the traffic sources, I drilled down into the performance of the specific landing pages these visitors were sent to. The results are not just insightful; they are the key to the entire investigation.


### The Verdict: An Actionable Intelligence Report

The interactive evidence paints a clear picture. The explosive growth wasn't an accident; it was the result of a few hyper-effective assets that were outperforming everything else.

-   **The Growth Driver is Inefficient:** `gsearch nonbrand` is the workhorse, bringing in massive volume, but its conversion rate is significantly lower than brand traffic.

-   **The Smoking Gun is `/lander-5`:** The investigation revealed a superstar performer. While the default `/home` page converts well, `/lander-5` converts at an incredible **9.75%**. This single page is a goldmine.

-   **A Clear Underperformer:** On the flip side, `/lander-3` is failing, converting at a dismal 3.68%.


This isn't just analysis; it's a strategic roadmap. The evidence demands action.

1.  **Issue a Warrant for `/lander-3`:** This page is wasting money. Traffic needs to be redirected immediately.

2.  **Promote the Star Performers:** A significant portion of the `gsearch nonbrand` budget must be funneled directly to `/lander-5` and `/lander-2`. This is the single fastest lever to pull for an immediate lift in revenue.

3.  **Keep the Pressure On:** The `gsearch nonbrand` channel is a proven growth engine. With traffic now pointed to the highest-converting pages, it's time to increase the budget and scale the operation.