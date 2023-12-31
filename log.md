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

---

### Day 6: October 24, 2023

**Progress:**
- Learned about [ActivityPub](https://www.w3.org/TR/activitypub/) and what is it.

**Thoughts:**
- ActivityPub is a protocol for building decentralized social networking applications. It provides a client to server API for creating, updating and deleting content, as well as a federated server to server API for delivering notifications and subscribing to content.
- I feel this could be future of social network, not sure when but this will be future, everone will have there own site instead going to one specific site for social networking.

**Links to work:**
- [ActivityPub - The Protocol Decentralised Social Networking](https://dev.to/siddharth_g/activitypub-the-protocol-decentralised-social-networking-3nom)

**References:**
- [ActivityPub](https://www.w3.org/TR/activitypub/)
- [Tantek Celik](https://tantek.com/)

---

### Day 7: October 25, 2023

**Progress:**
- I learned more about Activity Pub to understand the basics, the needs and uses

**Links to work:**
- [ActivityPub - The Protocol Decentralised Social Networking](https://dev.to/siddharth_g/activitypub-the-protocol-decentralised-social-networking-3nom)

---

### Day 8: October 26, 2023

**Progress:**
- Started with NextJS, learning what is framework is about, how it works
**Thoughts:**
- Started looking into NextJS so I understand SSR and SSC, server side rendering and static site generation better. What are use cases and case studies
- Another reason is to understand market standards and what is trending in market, so I can scale up myself accordingly.
- Also how other applications / platforms using SSR in scale

**References:**

- [NextJS](https://nextjs.org/)
- [Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript](https://www.youtube.com/watch?v=ZVnjOPwW4ZA&t=2864s)

---

### Day 9: October 27, 2023

**Progress:**

- Learned about React Server Component which is differnt from Server Side Rendered Component
- Checking on NextJS for SSR, RSR(React Server Component) and SSG(Static Site Generation)
- Checking how we scaleup NextJS application

**Thoughts:**

- This learning so far is very interesting, since it is purely from Front end perspective and I am more of a backend developer, so it is giving me a different perspective to look at things.
- Also it is interesting to see how other players are using nextjs or similar framework to implement web applications

---

### Day 10: October 30, 2023

**Progress:**

- Took break for weekend to reflect on laste 9 days if I am going in right directions
- Understood the need of Coding doing as Tech Lead and also understood how other staff engineers and tech leads are doing coding in market
- Went back to Book: Building Second Brain by Tiago Forte to restructure my setup.

**Thoughts:**

- I think I need to change course of my learning to code more and also gain more experience as senior software engineer
- Need more areas listed for this scale up project

---

### Day 11: October 31, 2023

**Progress:**

- Today's targets are 2 things which I already started exploring this morning
    - _Back to Basics_: I am again going through all core concepts from Javascripts, reading again Javascript: Good Parts by Douglas Crockford
    - Understanding ExpressJS framework code and how it is built

**Thoughts:**

- Today, my target will be understanding ExpressJS framework code and how it is built with core JS concepts used with that code

**Resources:**

- ExpressJS Github Repo: https://github.com/expressjs

---

### Day 12: November 6, 2023

**Progress:**

- There is too little progress in terms of the learning, the reason being I feel because of lack of clear targets and goals I am not sure on daily task and checklist.
- usually for this challenge clear list of task and goal is must have and will help to get consistancy in place
- From past of few days I am working on these same items to align my plan and aspiration

---

### Day 13: November 14, 2023

***Thoughts:***

- 8 Days, 8 Days of retrospective and thinking on how to move forward with this challenge. I needed clear picture on a Goal and plan for this challeng.
- Not only plan but clear set of tasks and checklist to follow on daily basis.
- Finally I see clear picture on where I am at today and at what direction I need to move forward.

***Progress:***

- I have started to understand the career path and responsibilities of Senior software engineer to Staff Software Engineer to Principal Solftware Engineer etc

***Links to work:***

- [100DaysOfScaleUp](./100DaysOfChallenge.svg)

### Day 14: November 16, 2023

***Progress:***

- Learn about Task Queues, specifically from Celery, a Python based task queue to coordinate task across multiple workers
- Also Learned about Big O notation to measure the performance of the algorithm
- Understood more about the Staff Engineer and the role 
- Learned about coalescing opeartor in Javascript (?? opearator)
- Got to know about IP casting - UnitCast, MultiCast, BroadCast

***Thoughts:***
- I am still bit confuse on Task Queues and Message Queues. In my opinion it is also depends on the language and framework you are building a product in since in some cases Message queue is also enough
- I found double question mark found very interesting

---

### Day 15: November 20, 2023

***Progress:***
- System Design
    - Was curious on how online streaming platform works, especially large scale such as hotstar when it is steaming World Cup Cricket match which is being watched by 4.5 cr viewers at same time
    - Got to know about RTMP and SRT protocols which are used for streaming. Will check on these 2 in deep later
    - Learned about CDN and Distributed File System, again need to check on these 2 in detail
    - Learned how to think while someone ask to design a system

- JS / NodeJS core
    - None so far today