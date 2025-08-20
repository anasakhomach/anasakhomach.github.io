---
layout: post
title: "Portfolio, Day 3: The Devil is in the Details"
date: 2025-08-20 16:00:00 # A time in the past
description: "The final 10% of any project is what separates the amateur from the professional. A deep dive into the obsessive pursuit of consistency."
tags: portfolio-build front-end-dev css debugging
categories: technical-deep-dive
---

### The Mission: Achieving Total Consistency

Days one and two were about broad strokes: setting up the framework, writing the content, and fixing the major bugs. Day three was about something more difficult: the last mile. It's the point where you stop building and start polishing. It's the obsessive, detail-oriented work that most people skip, and it's the only thing that matters.

The new mission was to overhaul my CV page. The data was a mess of placeholders, and the layout had inconsistencies that, to a data detective's eye, were as jarring as a fraudulent transaction.

### Data Integrity: The First Priority

The first task was a data overhaul inside the `resume.json` file. This is the central database for my professional history, and its integrity is non-negotiable.

* **Work History:** I translated every role from my career into the precise JSON structure, focusing on quantifiable achievements.
* **Education & Certifications:** I updated my academic and professional credentials, ensuring every date was correct and every issuer was named. For my university degree, I made a strategic choice to highlight its official recognition in Germany—a key piece of data for my target audience.

This wasn't just data entry; it was about ensuring the source of truth was clean, accurate, and structured.

### The Final Boss: A Single Inconsistent Section

With the data clean, a glaring visual bug remained. The "Certificates" section was rendered as a grid of cards, while "Work" and "Education" were clean, professional lists. It was a design flaw that broke the flow of the entire page. It had to be fixed.

What followed was a frustrating but invaluable lesson in front-end debugging.

1.  **The Wrong Path:** My first instinct was to fight fire with fire. I wrote custom CSS to override the grid layout. The result? The CSS was either too weak and was ignored, or too strong and broke the entire page. It was a classic case of treating the symptom, not the disease.

2.  **The Root Cause Analysis:** A true analyst doesn't just fix a problem; they understand its origin. I dove into the theme's source code and found the real culprit: the HTML blueprint itself (`_includes/resume/certificates.liquid`). It was fundamentally different from the `work.liquid` and `education.liquid` blueprints.

3.  **Re-engineering the Solution:** The only way to guarantee perfect consistency was to use the same blueprint. I meticulously re-engineered the `certificates.liquid` file, using the `education.liquid` file as a reference. I went line-by-line, matching every HTML tag, every CSS class, and every variable.

The result is a CV page where every section is now visually harmonious. It was a brutal, detail-obsessed fight for a few pixels of alignment, and it was worth it. This is what it means to be a data professional: an obsessive, relentless pursuit of getting it right, down to the last detail.