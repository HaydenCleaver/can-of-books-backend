# Can of Books

**Author**: AJ Harris, Hayden Cleaver
<br>
**Version**: 1.3.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

Application that tracks books that are significant to the user and recommends new books to them.
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

1. Create repo and clone down starter files from template, or create fresh repo and create basic server file.
2. Install express, cors, dotenv, and mongoose via `npm install` in terminal.
3. Create `.gitignore` and `.env` files and ensure `.env` is included in `.gitignore`.
4. Link Heroku to Github repo.
5. Add Atlas URL to `.env` file and use it in `mongoose.connect(URL)`; then add Atlas URL to heroku config vars.
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

Node, Express, Mongoose, Cors, Dotenv
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

07-25-2022 10:15pm - Mongoose has been initialized and Seed data saved. Server also takes in queries based on title, description, or status of books and returns any relevant data.

07-26-2022 8:00pm - Route to allow addition of new book objects has been completed.

07-27-2022 8:00pm - New route that allows users to update books within the database.
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Estimates
<!-- See below -->

## Credit and Collaborations

[MongoDB Atlas Database](https://www.mongodb.com/atlas/database)
<br>
[Heroku Cloud Application](https://www.heroku.com/)
<br>

## Feature 1: Repo and Cloud Setup

Estimate of time needed to complete: 1 hr

Start time: 8:00pm

Finish time: 9:00pm

Actual time needed to complete: 1 hr

## Feature 2: Mongoose Setup and Seed Data

Estimate of time needed to complete: 1 hr

Start time: 9:10pm

Finish time: 10:15pm

Actual time needed to complete: 1 hr 5 min

## Feature 3: Add New Book Functionality

Estimate of time needed to complete: 2 hr

Start time: 6:00pm

Finish time: 8:00pm

Actual time needed to complete: 2 hr

## Feature 4: Remove Book Functionality

Estimate of time needed to complete: 2 hr

Start time: 9:00pm

Finish time: 9:50pm

Actual time needed to complete: 50 min

## Feature 5: Update Book Functionality

Estimate of time needed to complete: 1 hr

Start time: 7:00pm

Finish time: 8:00pm

Actual time needed to complete: 1 hr


## Team Agreement

### Logistics

1. Hours available:
    * 9 - 6pm (PST)
2. What platforms will be used for communication?
    * Slack and Remo
3. How often will you take breaks?
    * On the hour / as needed.
4. What is your plan if you start to fall behind?
    * Meet together to find roadblocks and call for TA help.

### Cooperative

1. Make a list of each person's strengths:
    * A.J. :
        * Debugging
    * Hayden:
        * Clear view of big picture requirements and organization.
2. How can you best utilize these strengths in the development of your app?
    * A.J. can double check for syntax errors and bugs in general, and Hayden can overview overall component functionality.
3. In what areas do you each want to develop greater strength?
    * A.J. : Knowledge of code
    * Hayden : Debugging
4. Knowing that all team members need to understand the code, how do you plan to approach the day-to-day development?
    * When pushing, revisit code and describe functionality to each other.

### Conflict Resolution

1. What will your team do if one person is pulling all the weight?
    * Just straightforward communication if someone is falling behind on tasks.
2. What will your team do if one person is taking over the project and not letting the other member contribute?
    * Mostly dividing up tasks and ensuring that we're learning from each other.
3. How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?
    * Referring back to talking through merges together, we'll ensure that both of members understand what the code is doing so that no one is left behind.