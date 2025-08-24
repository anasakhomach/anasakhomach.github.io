// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-day-6-the-case-of-the-invisible-notebook",
        
          title: "Day 6: The Case of the Invisible Notebook",
        
        description: "A deep dive into the end-to-end analytical process, from raw data to a final report, and the hidden systems that tried to keep it offline.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/the-case-of-the-invisible-notebook/";
          
        },
      },{id: "post-the-maven-market-case-a-deep-dive-into-the-bi-workflow",
        
          title: "The Maven Market Case: A Deep Dive into the BI Workflow",
        
        description: "Deconstructing a full business intelligence project, from messy CSVs to a dynamic dashboard that uncovered the real story behind the sales data.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/portfolio-day-five-the-maven-market-case/";
          
        },
      },{id: "post-day-four-creating-a-project-amidst-chaos",
        
          title: "Day Four: Creating a Project Amidst Chaos",
        
        description: "With the website&#39;s build process completely stuck, we pivoted to building out the first real project page, facing new challenges with Power BI along the way.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/creating-the-first-project-page/";
          
        },
      },{id: "post-portfolio-day-3-the-devil-is-in-the-details",
        
          title: "Portfolio, Day 3: The Devil is in the Details",
        
        description: "The final 10% of any project is what separates the amateur from the professional. A deep dive into the obsessive pursuit of consistency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/portfolio-day-three-the-last-mile/";
          
        },
      },{id: "post-portfolio-day-2-the-debugging-chronicles",
        
          title: "Portfolio, Day 2: The Debugging Chronicles",
        
        description: "Sometimes the most valuable data is in the error logs. A recap of Day 2, where strategy met a series of stubborn bugs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/portfolio-day-two-the-debugging-chronicles/";
          
        },
      },{id: "post-my-first-steps-in-building-a-data-analyst-portfolio",
        
          title: "My First Steps in Building a Data Analyst Portfolio",
        
        description: "A look into the tools, configurations, and the value of creating a personal portfolio for a data analyst.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-my-data-analyst-portfolio/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-portfolio-launch",
          title: 'Portfolio Launch',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-18-portfolio-launch/";
            },},{id: "projects-adventure-wroks-sales-analysis",
          title: 'Adventure Wroks Sales Analysis',
          description: "Adventure Wroks Sales Analysis this is the GOAT for PowerBI learner offered in PL-300 Microsoft prepearion, and this is my take folloing the steps of one of the best courses EVER! cheers Chris.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-maven-market-sales-analysis",
          title: 'Maven Market Sales Analysis',
          description: "An interactive Power BI dashboard analyzing sales trends for a multi-national grocery chain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-maven-fuzzy-factory-a-growth-marketing-story",
          title: 'Maven Fuzzy Factory - A Growth Marketing Story',
          description: "A comprehensive analysis of a growing e-commerce business, from its early stages to a more mature state.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
