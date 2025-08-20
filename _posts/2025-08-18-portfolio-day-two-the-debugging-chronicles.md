---
layout: post
title: "Portfolio, Day 2: The Debugging Chronicles"
date: 2025-08-18 20:00:00 # A time in the past
description: "Sometimes the most valuable data is in the error logs. A recap of Day 2, where strategy met a series of stubborn bugs."
tags: portfolio-build debugging jekyll liquid
categories: technical-deep-dive
---

### The Strategy: Ruthless Optimization

Day one was about laying the foundation. Day two? It was about sharpening the blade. I looked at my homepage not as a biography, but as the opening argument in a case to a very busy jury: potential employers.

The verdict was swift. The "News" and "Publications" sections were circumstantial evidence at best—distractions. In their place, I needed to present Exhibit A, my proof of work. I decided to surgically remove the noise and engineer a new section front and center: **"Featured Projects."** This wasn't just a design choice; it was a strategic decision to control the narrative and immediately answer the only question that matters: "Can you do the job?"

### The Crime Scene: The Case of the Empty Section

I coded the new section. I configured it. I deployed it. And... nothing. An empty space where my proudest work should have been. This is where a data detective's real work begins. The system wasn't throwing errors; it was giving me the silent treatment. The most frustrating kind of bug.

My investigation led me down a rabbit hole of dead-end hypotheses:

1.  **The Wrong Sorting Key:** My first assumption was a simple logic error. I was trying to sort projects by `date`, but the theme was hardcoded to use a number called `importance`. A quick change, a redeploy, and... still nothing.

2.  **The Data Type Mismatch:** I dug deeper into the code. The sorting logic was looking for projects where `importance` was equal to the *text* `"1"`, but my project files correctly defined it as the *number* `1`. To a computer, that's like comparing a photograph of a key to the key itself. They are not the same. I corrected the data type. I redeployed. Still nothing.

### The Breakthrough: Finding the Real Culprit

At this point, I knew I wasn't just fixing a typo. I was hunting a fundamental flaw in the system's logic. The final breakthrough came when I realized the theme was using two entirely different visual blueprints for projects: a vertical card for the main projects page, and a horizontal one for the homepage.

The sorting file I was fixing was correctly gathering the data, but it was handing that data off to the wrong blueprint. It was like a perfectly executed police raid on the wrong address.

With the true culprit identified, the fix was decisive. I rewrote the sorting logic from the ground up to be more robust and, critically, to use the correct **horizontal card blueprint**. I redeployed.

Success.

### What This Teaches a Data Analyst

This entire ordeal—the strategic pivot, the frustrating bugs, the forensic deep-dive into the code—is a perfect metaphor for the daily life of a data analyst. You start with a clear goal, you hit a wall of confusing or missing data, and you must apply logic, discipline, and relentless curiosity to find the truth. The answer is never on the surface. You have to be willing to get your hands dirty in the source code of the problem.