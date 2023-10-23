# 100 Days Of Scale Up - Log

### Day 0: October 18, 2023

**Progress:**
- I have joined 100 days challenge, Created github repo and started logging.
- Watched the [talk](https://portal.gitnation.org/contents/towards-a-standard-library-for-javascript-runtimes) by Towards a Standard Library for JavaScript Runtimes by James Snell

**Thoughts:** 
- I didn't wanted to start this challenge for specific area or skill set, since on daily basis I am working on different things and differnt areas. I get ideas and opportunities to learn many differnt things and topics, So I have decided to have this challenge as 100 days of scale up. I will be working on different things which will help me to scale up in my career.

- About the talk: Towards a Standard Library for JavaScript Runtimes by James Snell
    - I found the talk very interesting, what James proposed is to have a new collaborative open-source effort which should be preferably driven jointly by contrinutors to NodeJS, Deno and other JS runtimes to develop a library of common APIs independent of runtimes
    - So waht is the problem today, we have different runtimes and each runtime has its own set of APIs, so if you are using NodeJS and you want to use some APIs which are not available in NodeJS but available in Deno, then you have to use some third party library which will provide you the same functionality.
    For example, creating base64 from string, you can do that by any of the following
    ```javascript
        // NodeJS
        const base64 = Buffer.from('Hello World').toString('base64');
        // Browser
        const base64 = btoa('Hello World');
        // Deno
        import {encode} from "https://deno.land/std/encoding/base64.ts";
        encode('Hello World');
        // npm package
        import {encode} from "base64";
        encode('Hello World');
    ```
    So if you observe above code, you have multiple ways to do same thing in your own runtime, even we have packages which you can use to do same thing, why?
    Why we can't have a single standard library which can be used across all runtimes, so that we don't have to worry about the APIs and we can focus on our business logic.

**Links to work:** 
- [100 Days Of Scale Up](README.md)
---
### Day 1: October 19, 2023

**Progress:**
- Learned about `monorepo` and how it can be benifited
   - Also learned how big companies like Google, Facebook, Twitter, Microsoft, Airbnb, Uber, Netflix, etc are using monorepo
- Learned about `npm workspace` and how we can levarge to manage repository with multiple packages

**Thoughts:**
- I still feel I haven't understood `monorepo` completed but breifly what I understood is, monorepo is a single repository which contains multiple projects, so instead of having multiple repositories for each project, we can have a single repository which will contain all the projects.
    - Example: Here all the projects are in single repository and each of them represnts independent project. They also might share a common code or compononets.

    ```
    -- monorepo
        -- project1
        -- project2
        -- project3
    ```

- Got to know and learn about `npm workspace` which can be leverage to manage multiple packages in single repository. It is very easy to setup and use.
    - multiple packages are nothing but smaller projects with own package.json
- It also give flexibility of having shared dependencies between packages, so if you have multiple packages and they are using same dependencies, then you can have those dependencies in root package.json and all the packages can use them.
- To let npm know that you are using workspace, you have to add `workspaces` property in root package.json and specify the packages which you want to use as workspace.

**Links to work:**
- [monorepo](https://github.com/sidgujrathi/100DaysOfScaleUp/tree/main/Projects/monorepo)

**References:**
- [Getting Started with npm Workspaces](https://ruanmartinelli.com/posts/npm-7-workspaces-1)

---

### Day 2,3,4: October 20,21,22 2023

**Progress:**
- Because of Production sprint planning and Friday activities didn't get much time to go rough much but I do read about dev container
- Nothing new for Weekend, due to personal commitments again get very less time to go through much. But I did try to continue on checking dev containers

**Thoughts:**

- I find idea of dev container really interesting, it is a way to leverage docker container to setup develpment workflow and tools for your project. It is very easy to setup and use.
- Using IDE extentions and .devcontainer.json file you can setup your development environment in docker container. It can include all the tools and dependencies which you need for your project.
- Your IDE then will use this container to setup your development environment, so you don't have to worry about installing all the tools and dependencies on your local machine.

**References:**

- [dev container](https://code.visualstudio.com/docs/devcontainers/create-dev-container)

---

### Day 5: October 23, 2023

**Progress:**
- Today I have worked on the list of resources for my scale up challenge.

**Thoughts:**

- When I decided to start this challenge I didn't have any plan ready with me for these 100 days nor I have list of resources, list of topics or things to learn. I just started with the idea of scale up and I will figure out the rest of the things as I go.
- On daily basis I was going through multiple random sites, blogs or reources to gain knowledge and bewtween yesterday and today I have created a list of resources which I will be using for this challenge.
- This will give me a steamlined approach to decide topics for the day and manage time better

**Links to work:**
- [Resources](Resources.md)