---
layout: post
title: "The Maven Market Case: A Deep Dive into the BI Workflow"
date: 2025-08-23 19:00:00 # A time in the past
description: "Deconstructing a full business intelligence project, from messy CSVs to a dynamic dashboard that uncovered the real story behind the sales data."
img: /assets/img/pr5.png
tags: portfolio-build power-bi data-modeling dax etl
categories: project-deep-dive
---

### The Briefing: A New Case Arrives

Every data detective lives for the moment a new case file lands on their desk. This one came in the form of a folder of raw, disconnected CSV files from **Maven Market**, a multi-national grocery chain. The mission was clear, if not simple: infiltrate this chaotic mess of transactional data, interrogate it until it confessed its secrets, and build a dynamic dashboard that would serve as a single source of truth for the entire operation.

This wasn't just about making charts; it was about building an intelligence-gathering machine from the ground up.

### The Investigation: Following the Data Trail

A good investigation follows a strict procedure. You don't just jump to conclusions. You build the case, piece by piece, from the ground up. This project was a live-fire exercise in the entire end-to-end business intelligence workflow.

1.  **Connecting & Shaping the Evidence (Power Query):** The first step was to get the raw data into the interrogation room. I connected Power BI to a folder of CSVs containing thousands of transactions and returns. This data was messy—inconsistent formats, missing connections. Using Power Query, I cleaned it, merged files, and transformed the raw inputs into a set of clean, reliable tables. This is the unglamorous but most critical part of any analysis: ensuring the evidence is admissible.

2.  **Building the Relationship Map (Data Modeling):** Once the individual pieces of evidence were clean, I had to understand how they connected. In the data modeling phase, I constructed a relational database, linking the transaction and returns data to lookup tables for customers, products, and stores. This is like building a crime board, connecting suspects to locations and motives. A well-built model ensures that when you ask a question in one part of the data, the answer is consistent everywhere else.

3.  **The Interrogation (DAX Measures):** With a solid model in place, the real interrogation began. I used DAX (Data Analysis Expressions) to create a battery of calculated measures. I wasn't just counting transactions; I was calculating **Profit Margin**, **Return Rate**, and complex time-intelligence metrics like **Year-to-Date Revenue** and **Revenue vs. Target**. DAX is the language you use to ask the tough questions—the ones that reveal the real story hiding beneath the surface.

### The Challenges: When the Trail Goes Cold

No investigation is a straight line. This case presented its own set of challenges that required more than just technical skill; they required an analytical mindset.

* **The "Snowflake" Schema:** The store data was connected to a separate regions table, creating a "snowflake" schema. This adds a layer of complexity to the model and requires careful management to ensure filters propagate correctly. It’s a reminder that real-world data is rarely simple.
* **Time-Intelligence Complexity:** Calculating metrics like "60-Day Running Revenue" or comparing performance to the "Last Month" requires a deep understanding of DAX filter context. Writing these formulas is like crafting a perfectly worded legal argument—every comma and every function has to be precise, or you get the wrong answer.

### What This Project Proves

This project is more than a dashboard; it's a demonstration of a complete analytical skill set.

* **Methodical Process:** It proves I can follow a structured, end-to-end BI workflow, from raw data ingestion to final report delivery. This is the core discipline of any data professional.
* **Technical Proficiency:** It showcases my hands-on skills in **Power Query** for ETL (Extract, Transform, Load), complex **Data Modeling** to build a reliable source of truth, and advanced **DAX** for creating meaningful, actionable metrics.
* **Business Acumen:** The final dashboard, with its KPI cards and interactive filters, proves I can translate complex data into a tool that business leaders can actually use to make decisions. I didn't just find the data; I made it talk.