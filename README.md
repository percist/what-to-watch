# What to Watch
* [Chris Clark](https://percist.github.io/), [Ahdari Scott](https://koran23.github.io/), [Elyse Steingold](https://elyselindsays.github.io/), and [Samuel Nunn](https://samuelnunn.github.io/) - [Live site](https://next-round.herokuapp.com/)

A Goodreads clone focused on movies.

You can also visit Goodreads [here](https://www.goodreads.com).

For a deeper dive into our planing process and code setup, please visit our [Wiki](https://github.com/percist/what-to-watch/wiki)!

**Table of Contents**
  * [What to Watch at a Glance](#what-to-watch-at-a-glance)
  * [Technologies Used](#technologies-used)
  * [Application Architecture](#application-architecture)
  * [Frontend Overview](#frontend-overview)
  * [Backend Overview](#backend-overview)
  * [Backend Installation and Setup](#Backend-Installation-and-Setup)
  * [Frontend Installation and Run Application Locally](#Frontend-Installation-and-Run-Application-Locally)
  * [Conclusion](#conclusion)

## What to Watch at a Glance
What to Watch is a Goodreads clone designed for users to find new movies, track movies they've watched, and rate and review watched movies.

The application is made using PUG templates on the front end and an Express Server with a PostgreSQ: database on the backend.

**Key Features**
* User sign in / sign up with express authentication and encrypted password hashing with bcrypt.

* View movies in the database
* Add movies to your 'Want to Watch' or 'Watched' lists
* Change movies back and forth from 'Watched to 'Want to Watch'
* Rate and Review movies you have watched

## Technologies Used
* Frontend
  * PUG
  * JavaScript
  * CSS
* Backend
  * Express
  * PostgreSQL
  * Sequelize
  * Heroku deployment

## Application Architecture
The application uses a single express server to render PUG templates from an Express server with various RESTful endpoints.

## What to Watch Database Schemea
![image](https://github.com/percist/what-to-watch/blob/master/What-to-watch-db-schema.png?raw=true)

## Frontend Overview
The front end utilizes simple original styling. We used PUG templates to provide a consistent feel across the entire site.

## Backend Overview
The backend is a collection of RESTful routes serving data to the frontend and an interface with the PostgreSQL database. The database is queried wusing the Sequelize ORM, and seed data was scraped from [The Movie Database](https://www.themoviedb.org.)

## Installation and Setup

1. Clone this repository (only this branch)

  ```bash
  git clone https://github.com/percist/what-to-watch.git
  ```

2. Install dependencies

  ```bash
  npm install
  ```

3. Create a **.env** file based on the .env.example with proper settings for your development environment.

4. Setup your PostgreSQL user, password, and database making sure it matches your **.env** file

5. Migrate your database, seed your database, and run your server

  ```bash
  npx dotenv sequelize-cli db:migrate &&  
  npx dotenv sequelize-cli db:seed:all
  ```
  
  ```bash
  npm start
  ```

6. Visit application at localhost:8080 (changes you make locally will appear after reload)

## Conclusion
What to Watch was our idea as a team to redevelop Goodreads focused on films. We appreciated the concept as well as film so the project was a natural choice for our first full stack project.

Were we to remake this project, we would focus on incorporating AJAX calls to update information without rerender. Additional features would include the option to create watchlists, edit reviews, remove movies from a watchlist, and search for movies.
