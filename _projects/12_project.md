---
layout: page
title: A Growth Marketing Story
description: A comprehensive analysis of a growing e-commerce business, from its early stages to a more mature state.
img: /assets/img/pr8.png
importance: 12
category: fun
date: 2025-08-24
toc:
  beginning: true
images:
  compare: true
  slider: true
tags: formatting jupyter

---
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">

  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr8.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr9.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr10.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr11.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---

<div class="caption">
    A selection of the dashboards created to analyze the Maven Fuzzy Factory dataset.
</div>

This report is an analysis of Maven Fuzzy Factory, an e-commerce business, from its start in March 2012 to early 2014. I used SQL queries and Python to tell the story of how the company grew by solving problems with traffic, user engagement, and product strategy.
The goal was to look at the company's past data to find what drove growth, spot problems, and suggest what to do next. It shows how using data can help a business grow.

### Table of Contents

- [](#)
  - [Table of Contents](#table-of-contents)
  - [1. Initial Traffic Analysis](#1-initial-traffic-analysis)
  - [2. Understanding Business Patterns \& Seasonality](#2-understanding-business-patterns--seasonality)
  - [3. Analyzing Channel Performance](#3-analyzing-channel-performance)
  - [4. The Rise of Brand Awareness](#4-the-rise-of-brand-awareness)
  - [5. Optimizing the Conversion Funnel](#5-optimizing-the-conversion-funnel)
  - [6. A/B Testing for Landing Page Optimization](#6-ab-testing-for-landing-page-optimization)
  - [7. In-Depth Bounce Rate Analysis](#7-in-depth-bounce-rate-analysis)
  - [8. Product Launch and Pathing Analysis](#8-product-launch-and-pathing-analysis)
  - [9. Comprehensive Sales \& Product Analytics](#9-comprehensive-sales--product-analytics)
  - [10. Final Business Recap \& Strategic Recommendations](#10-final-business-recap--strategic-recommendations)
  - [11. Conclusion](#11-conclusion)
  - [12. The Complete Analysis Notebook](#12-the-complete-analysis-notebook)

---

### 1. Initial Traffic Analysis

First, I looked at where website traffic was coming from. The data showed that the company relied heavily on paid search ads.

**Key Insights:**

* **Gsearch Dominance:** The majority of traffic was driven by `gsearch` non-brand campaigns, indicating a strong dependency on paid acquisition.
* **Low Organic Traffic:** There was very little organic or direct traffic, suggesting low brand awareness in the early stages.

This initial look highlighted a critical strategic vulnerability: an over-reliance on a single traffic channel.
This showed a big risk: the company depended too much on one traffic source.

### 2. Understanding Business Patterns & Seasonality

Next, I looked at when users were most active to understand the rhythm of the business.

![Business Patterns & Seasonality Analysis](/assets/img/fuzzy_factory_report/output_5_0.png)

**Key Insights:**

* **Weekday Dominance:** Traffic and sales were significantly higher during weekdays, with a peak during business hours (9 am - 5 pm). This suggests a B2B audience or customers who shop during their workday.
* **Explosive Growth:** The business saw a 436% growth in monthly sessions from March to December 2012.
* **Holiday Surge:** A big spike in traffic happened around Black Friday, which points to a strong seasonal effect.

### 3. Analyzing Channel Performance

I then looked closer at the performance of different marketing channels, comparing `gsearch` and `bsearch`.

![Channel Portfolio Analysis Dashboard](/assets/img/fuzzy_factory_report/output_7_0.png)

**Key Insights:**

* **Gsearch is the Winner:** `gsearch` consistently delivered 3-4 times more traffic than `bsearch`.
* **Desktop Converts Best:** Desktop users converted at a much higher rate (4.52% for `gsearch` desktop) compared to mobile users (1.28% for `gsearch` mobile).
* **Mobile Disparity:** `gsearch` had a significantly higher percentage of mobile traffic (24.5%) compared to `bsearch` (8.6%), suggesting `gsearch` campaigns were better optimized for mobile.

### 4. The Rise of Brand Awareness

This analysis tracked how users found the website over time. I focused on the growth of brand-driven traffic compared to paid non-brand traffic.

![Direct & Brand-Driven Traffic Analysis](/assets/img/fuzzy_factory_report/output_11_0.png)

**Key Insights:**

* **Explosive Brand Growth:** Brand-related traffic grew by an astounding 12.9x relative to non-brand traffic over the course of 2012.
* **Reduced Paid Dependency:** The company successfully reduced its dependency on paid acquisition, with "free" (brand, direct, organic) traffic making up 23.8% of all traffic by December 2012.
* **Customer Loyalty:** A 15.9x increase in direct traffic suggests that customer loyalty and repeat business were growing.

### 5. Optimizing the Conversion Funnel

I did a detailed analysis of the conversion funnel to see where users were dropping off before making a purchase.

![Conversion Funnel Analysis (Jan 2014)](/assets/img/fuzzy_factory_report/output_9_1.png)

**Key Insights:**

* **Exceptional Overall Conversion:** By January 2014, the site boasted a 9.24% overall conversion rate, which is 3-4 times the industry average.
* **Biggest Drop-off Points:** The most significant drop-offs occurred between the landing page and the products page, and from viewing a specific product to adding it to the cart.
* **Strong Checkout Flow:** The payment and shipping steps had high conversion rates. This showed that the checkout process was trustworthy and worked well.

### 6. A/B Testing for Landing Page Optimization

This analysis focused on an A/B test between the original homepage and a new landing page (`/lander-1`).

![Landing Page A/B Test Analysis](/assets/img/fuzzy_factory_report/output_13_0.png)

**Key Insights:**

* **Lander-1 is the Winner:** The new `/lander-1` page resulted in a 2.57 percentage point improvement in bounce rate compared to the old homepage.
* **Data-Driven Decision:** Based on the test results, the company made a data-driven decision to completely phase out the old homepage and fully adopt `/lander-1`.
* **Systematic Improvement:** This A/B test was a foundational example of the company's commitment to systematic, data-driven optimization.

### 7. In-Depth Bounce Rate Analysis

A deep dive into bounce rates revealed critical insights about user engagement, particularly for new visitors.

![Bounce Rate Analysis](/assets/img/fuzzy_factory_report/output_3_0.png)

**Key Insights:**

* **High Non-Brand Bounce Rate:** The `gsearch` non-brand traffic had a high bounce rate of 60.2%, indicating that many new visitors were not finding what they expected.
* **Brand Traffic Performs Well:** In contrast, brand-related traffic had a much lower bounce rate of 35.7%, showing that users who were already familiar with the brand were highly engaged.
* **The "Smoking Gun":** The 24.5 percentage point gap between brand and non-brand bounce rates showed a clear opportunity. The company needed to improve the landing page for new visitors to get them as engaged as brand-aware visitors.

### 8. Product Launch and Pathing Analysis

This analysis looked at how launching a second product, "The Forever Love Bear," affected user behavior and the business.

**Key Insights:**

* **Successful Product Launch:** The new product was an immediate success, capturing 19.2% of product page traffic and boasting a higher conversion rate (19.9%) than the original "Mr. Fuzzy" (16.9%).
* **Improved Engagement:** Adding a second product improved user engagement. The bounce rate from the products page went down by 4.3 percentage points.
* **Diversification Strategy Works:** The launch proved that the company's product diversification strategy was working. It reduced dependency on a single product and improved the site's performance.

### 9. Comprehensive Sales & Product Analytics

This analysis tied everything together by looking at high-level business metrics like revenue, orders, and conversion rates over time.

**Key Insights:**

* **Phenomenal Growth:** The company saw a 930% increase in sales from March to the peak in November 2012.
* **Strong Profitability:** The business kept a healthy average margin of 61%.
* **Conversion Rate Transformation:** The launch of the second product and other improvements led to a big 2.88 percentage point improvement in the overall conversion rate.

### 10. Final Business Recap & Strategic Recommendations

The final recap put all the analyses together. It gave a complete view of the business in mid-2012 and a clear path forward.

**Key Issues Identified (as of mid-2012):**

* **Traffic Concentration:** 97.3% of traffic from a single source.
* **Poor Mobile Performance:** A 3.9x lower conversion rate on mobile compared to desktop.
* **Leaky Funnel:** An overall funnel completion rate of only 2.94%.

**Strategic Recommendations:**

1.  **IMMEDIATE:** Optimize the mobile user experience.
2.  **URGENT:** Implement a landing page A/B testing program.
3.  **CRITICAL:** Diversify traffic sources to reduce dependency on `gsearch`.
4.  **IMPORTANT:** Systematically optimize the conversion funnel.
5.  **STRATEGIC:** Invest in brand building to grow organic and direct traffic.

### 11. Conclusion

The journey of Maven Fuzzy Factory from 2012 to 2014 is a powerful case study in the impact of a data-driven growth strategy. By systematically identifying problems, forming hypotheses, testing solutions, and measuring results, the company transformed itself from a business with high potential but significant flaws into a world-class e-commerce performer.

The initial state in 2012, with a 2.88% conversion rate and heavy reliance on a single traffic source, evolved into a multi-product powerhouse with a 9.24% conversion rate by 2014. This was not the result of a single "silver bullet," but rather the compound effect of continuous, methodical optimization across every aspect of the customer journey. This project demonstrates that with the right data and a culture of experimentation, any business can unlock its potential for exponential growth.


<hr>

### 12. The Complete Analysis Notebook

For a technical deep-dive, the full Jupyter Notebook containing all the SQL queries, Python code, and visualizations is embedded below.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/fuzzy_factory_report.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/fuzzy_factory_report.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

<hr>