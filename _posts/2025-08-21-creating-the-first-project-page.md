---
layout: post
title: "Day Four: Creating a Project Amidst Chaos"
date: 2025-08-21 22:00:00
description: "With the website's build process completely stuck, we pivoted to building out the first real project page, facing new challenges with Power BI along the way."
tags: portfolio-building github-pages jekyll power-bi troubleshooting
categories: professional-development
---

Today was supposed to be the day. The day I finally saw the portfolio live and working. Instead, it was a masterclass in frustration, courtesy of a complete outage on GitHub Actions. The build process for my site has been stuck in a "Queued" state for hours, a problem completely out of my hands. After trying to cancel and re-run the job to no avail, it became clear that no amount of troubleshooting on my end would fix it.

---
### Pivoting to Content

Instead of waiting, we decided to shift focus to what I could actually control: the content. It was the perfect time to build out the first real project page for my portfolio—a showcase for a Power BI sales report I created for the AdventureWorks company.

---
### Building the Project Page

We started by creating a new file, `10_project.md`, in the `_projects` folder. The initial idea was just a simple page, but we quickly decided to make it more dynamic. A single static screenshot felt flat.

The solution was to implement an interactive image swiper. We replaced the standard image code with a carousel that cycles through three different screenshots of the dashboard: `r1.jpg`, `r2.jpg`, and `r3.jpg`. This immediately made the page feel more engaging and allowed me to show off different aspects of the report at a glance.

---
### The Power BI Embedding Challenge

The next major task was embedding the interactive Power BI report. I had the `iframe` code ready to go, but we ran into a critical issue: the standard embed link requires the viewer to sign in to a Power BI account. This is a non-starter for a portfolio. A recruiter isn't going to sign in to view my work.

The correct method is to use the "Publish to web (public)" feature, which creates a link that anyone can view. But, of course, that option was missing from my Power BI account. After digging into the settings, it became clear that the feature was disabled by an administrator policy, another roadblock.

With a true public embed off the table, we had to pivot again. A broken or inaccessible `iframe` is worse than no embed at all. We scrapped the `iframe` entirely and replaced it with a simple, clean text link that says "here." It's an honest solution that directs visitors to the report without the friction of a failed embed.

So, while the site itself remains in limbo, a major piece of it is now fully built and ready. We turned a day of technical delays into a productive session that resulted in a much better, more thoughtful project page.