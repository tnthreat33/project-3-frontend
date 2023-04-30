Team and Game App 

This is a simple React application that allows users to view, add, update and remove games from a teams schedule. You can also view the teams. It uses React Router for navigation and useState and useEffect hooks for state management.

How to Run

    - Clone the repository: git clone git@github.com:tnthreat33/project-3-frontend

    -Navigate to the project directory: cd project-3-frontend

    -Install dependencies: npm install

    -Start the server: npm start

    -Open your web browser and navigate to http://localhost:3000


Features

    -View a list of games for each team 

    -Add a new game to the schedule 

    -Remove a game from the schedule 

    -Update a game on the schedule 

    -View all teams 

    -Navigate between pages using React Router

Dependencies

This application uses the following dependencies:

React, React Router, CSS and Ruby Sinatra (backend API)

Usage

    -App.js - The main component that contains the React Router setup and state management for teams which has the game information nested.

    -index.js - The entry point for the application that renders the App component.

    -NavBar.js - A reusable component that contains links to navigate between pages.

    -Games.js - A component that displays games for each team along with details. It also allows for the use to delete or update a game.

    -GameDetails.js- A component that holds a form that allows for updates to the specific game selected. 

    -Home.js - A component that serves as the home page and contains a form to add new games. 

    -Teams.js - A component that displays all the teams and their record. 

    -GameForm.js - A component that contains a form to add a new game to the teams.



API Reference

This project uses a server built with Ruby and uses the Sinatra web framework and Active Record as the ORM with following endpoints:

GET /teams - returns a list of all teams, games and record 
DELETE /games/:id - delete a game by ID 
PUT /games/:id - updates an existing game by ID 
POST/games- creates a new game 

The server is located at localhost:9292 