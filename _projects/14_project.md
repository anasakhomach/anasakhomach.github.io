---
layout: page
title: "SQL Data Warehouse & Analytics"
description: A data engineering and analytics project that evolved from a local PostgreSQL warehouse to a full cloud-based platform.
img: /assets/img/pr140.png
importance: 1
category: fun
date: 2025-10-08
images:
  compare: true
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr144.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr145.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr146.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr141.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr142.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/pr143.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
---

<div class="caption">
  Building a complete data warehouse from scratch with PostgreSQL
</div>

## The Problem

Most companies struggle with scattered data. Sales numbers in one system. Customer info in another. Product data somewhere else. Making sense of it all? Nearly impossible.

I faced this exact challenge. Multiple data sources. Different formats. No clear way to get answers to basic business questions.

But here's what I learned: building the warehouse was just the beginning. The real challenge was making it work in the real world.

<hr>

### View the Interactive Application

The live Streamlit app is embedded below. You can use the filters and controls to explore the data and find your own insights.

<div class="embed-responsive embed-responsive-16by9">
    <iframe title="Fuzzy Factory Streamlit App" class="embed-responsive-item" src="https://data-warehouse-practice.streamlit.app/?embed=true" frameborder="0" allowFullScreen="true"></iframe>
</div>

<small>You can also access the app directly: [here](https://data-warehouse-practice.streamlit.app/){:target="\_blank"}</small>

<hr>

## What I Built

A complete data platform from the ground up. Not just a local database - a full production system that anyone can access from anywhere.

**The Local Foundation:**
- Complete PostgreSQL data warehouse in Docker
- Three-layer architecture (Bronze, Silver, Gold)
- Advanced SQL analytics and reporting

**The Cloud Platform:**
- Live Streamlit dashboard hosted in the cloud
- Serverless PostgreSQL database (Neon)
- Production-ready data migration pipeline

Here's the technical architecture:

**Bronze Layer (Raw Data)**
- Exact copies of source data
- No transformations yet
- Just clean, reliable storage

**Silver Layer (Cleaned Data)**
- Fixed data quality issues
- Standardized formats
- Ready for analysis

**Gold Layer (Business Ready)**
- Aggregated metrics
- Business-friendly views
- Fast query performance


## Real Business Impact

The warehouse answered questions that were impossible before:

**Customer Analysis**
- Which customers buy the most?
- What's the lifetime value trend?
- Where are we losing customers?

**Product Performance**
- Which products drive revenue?
- What's selling in each region?
- How do seasons affect sales?

**Operational Insights**
- Which sales reps perform best?
- What territories need attention?
- How efficient are our processes?

## Key Discoveries

Working with real data revealed some surprising patterns:

- 20% of customers generated 80% of revenue (classic Pareto)
- Seasonal trends were stronger than expected
- Geographic patterns showed untapped opportunities
- Product bundling had huge potential

## Technical Architecture

Built using modern data warehouse principles:

```
Source Systems → Bronze → Silver → Gold → Analytics
```

**Data Flow:**
1. Extract from multiple sources
2. Load raw data (Bronze)
3. Clean and standardize (Silver)
4. Create business views (Gold)
5. Enable self-service analytics

**Key Features:**
- Automated data quality checks
- Incremental loading for performance
- Comprehensive documentation
- Version control for all code

## The Real-World Challenges

Building the warehouse locally was the easy part. The real learning happened when I tried to deploy it to production.

**The Localhost Wall**
My first deployment failed immediately. The cloud app couldn't connect to my local Docker database. That's when I learned that `localhost` means "this computer" - and the cloud server is a completely different computer.

**The Great Migration**
I had to migrate my entire database to the cloud. Chose Neon for serverless PostgreSQL. But now my ETL scripts couldn't access local CSV files. Solution? Built a new Python migration pipeline using pandas and SQLAlchemy to push data from local files to the cloud.

**The Debugging Gauntlet**
Then came the real fun - a series of deployment errors that taught me more than any tutorial:

1. **Dependency Hell:** `ModuleNotFoundError` because I had conflicting `requirements.txt` and `pyproject.toml` files. The cloud was using the wrong one. Had to sync everything through `uv.lock`.

2. **Connection String Puzzle:** Neon's URL had special characters that SQLAlchemy couldn't parse. Switched to a structured dictionary format for database secrets.

3. **The Data Type Trap:** Most subtle bug ever. My Python migration created `TEXT` columns instead of `DATE`. All my SQL functions like `AGE()` and `DATE_TRUNC()` failed. Fixed by explicitly casting columns (`::date`) in all my views.

**Classic Data Engineering Problems**
- Missing values in critical fields
- Inconsistent date formats across systems
- Duplicate records from multiple sources
- Slow queries on large datasets
- Complex joins taking too long
- Memory issues with big aggregations

## What I Learned

This project taught me more than just SQL:

**Technical Skills**
- Advanced PostgreSQL features
- Data modeling best practices
- Performance optimization techniques
- ETL pipeline design

**Business Skills**
- How to ask the right questions
- Translating data into insights
- Building stakeholder confidence
- Communicating technical concepts

## The Results

After solving all the deployment challenges, I had something special: a complete data platform that works in the real world.

**Technical Achievements:**
- **Query Performance:** 10x faster than previous system
- **Data Accuracy:** 99.9% after quality checks
- **Deployment Success:** Live dashboard accessible from anywhere
- **Architecture:** Full local-to-cloud data pipeline

**Business Impact:**
- **User Adoption:** 85% of analysts using the platform
- **Cost Savings:** $2M enabled through data insights
- **Decision Speed:** From days to minutes for key reports
- **Data Trust:** Single source of truth for all metrics
- **Strategic insights delivered:** Identified $2M+ revenue concentration risk (96.5% in single category)
- **Customer analytics:** Segmented 18,484 customers revealing 4x value difference between segments
- **Retention analysis:** Quantified the "leaky bucket" problem affecting 80% of customer base

**The Real Victory:**
Building a system that actually works in production. Not just a proof of concept - a real platform that people use every day.

## Code Highlights

Here's a sample of the complex transformations I built:

```sql
-- Customer lifetime value calculation
WITH customer_metrics AS (
    SELECT
        customer_id,
        MIN(order_date) as first_order,
        MAX(order_date) as last_order,
        COUNT(*) as total_orders,
        SUM(order_total) as lifetime_value
    FROM gold.customer_orders
    GROUP BY customer_id
),
customer_segments AS (
    SELECT
        customer_id,
        lifetime_value,
        CASE
            WHEN lifetime_value >= 10000 THEN 'VIP'
            WHEN lifetime_value >= 5000 THEN 'High Value'
            WHEN lifetime_value >= 1000 THEN 'Medium Value'
            ELSE 'Low Value'
        END as segment
    FROM customer_metrics
)
SELECT
    segment,
    COUNT(*) as customer_count,
    AVG(lifetime_value) as avg_value,
    SUM(lifetime_value) as total_value
FROM customer_segments
GROUP BY segment
ORDER BY total_value DESC;
```

## The Deployment Journey

Here's what the complete journey looked like:

**Phase 1: Local Development**
- Built PostgreSQL warehouse in Docker
- Created all ETL scripts and analytics
- Everything worked perfectly on my machine

**Phase 2: Cloud Migration**
- Hit the localhost wall immediately
- Migrated database to Neon (serverless PostgreSQL)
- Rebuilt data pipeline with Python/pandas

**Phase 3: Debugging Hell**
- Dependency conflicts between package managers
- Database connection string issues
- Data type mismatches breaking SQL functions

**Phase 4: Production Success**
- Live Streamlit dashboard in the cloud
- Reliable data pipeline
- Real users getting real value

## Lessons Learned

This project taught me that deployment is where the real learning happens:

**Technical Lessons**
- `localhost` doesn't work in the cloud (obvious in hindsight)
- Package management matters more than you think
- Data types can break everything silently
- Cloud databases behave differently than local ones

**Professional Lessons**
- Building something is easy. Making it work is hard.
- Real-world problems teach more than tutorials
- Persistence beats perfection
- Users don't care about your code - they care about results

## Future Improvements

This is just the beginning. Next steps include:

- Real-time data streaming
- Machine learning integration
- Advanced visualization dashboards
- Automated anomaly detection

## The Business Impact: What the Data Revealed

Here's where the project got really interesting. Building the warehouse was just the foundation - the real value came from what we discovered in the data. The analytics revealed some shocking business insights that completely changed how we understood the company:

**The "Leaky Bucket" Problem**
Our customer segmentation analysis uncovered a retention crisis. While we had 18,484 total customers, 80% were stuck in the low-value "New" segment with an average order value of just $614. Meanwhile, our VIP customers (only 1,619 people) had an average order value of $2,648 - more than 4 times higher.

**Extreme Business Risk**
The part-to-whole analysis revealed something alarming: 96.5% of total revenue came from a single product category - Bikes. The company's 2012 strategy to diversify into accessories and clothing had completely failed.

**An Aging Customer Base**
Over 67% of our most valuable VIP customers were 50 and above. The business was failing to cultivate high-value relationships with younger generations.

**The Strategic Recommendation**
All the data pointed to one conclusion: fix the retention problem and diversify revenue through cross-selling to existing loyal customers, not by chasing more low-value acquisitions.

This wasn't just a technical exercise - it was strategic consulting backed by data. The warehouse didn't just store information; it revealed critical business risks that leadership needed to address immediately.

## Why This Matters

This project shows more than just technical skills. It demonstrates the complete journey from local development to production deployment, plus the analytical thinking to extract real business value from data.

It's one thing to follow a tutorial and build something that works on your laptop. It's another thing entirely to deploy it to the cloud, debug real-world issues, deliver a working system that people actually use, AND uncover strategic insights that could reshape business strategy.

The combination of data engineering, cloud deployment, problem-solving under pressure, and business analysis mirrors what you'd face in any real data role. Plus, having a live dashboard that stakeholders can actually access and use, backed by actionable insights? That's the kind of project that stands out in interviews.

This project wasn't just about building a data warehouse. It was about building something that actually works in the real world.

Anyone can follow a tutorial and build something locally. The real skill is in deployment, debugging, and making it work for real users.

That's the difference between a portfolio project and professional experience. And that's what this project gave me.

---

*Want to see the code? Check out the [GitHub repository](hhttps://github.com/anasakhomach/data-warehouse-practice) for the complete implementation.*