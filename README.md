# GWG Udacity Front End Web Developer Certification Course

# MyReads Project

This project is forked from Udacity's Front End Web Developer course. Static code has been refactored into react components. The hardcoded books have been removed and the app now uses an API to interact with the Udacity backend server.

## Get Started

To get started developing right away:

* navigate to the project root
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Using the app

The app uses react-router-dom to display two different views

####Home

   The home page loads 3 shelves containing all of the books in the users library. There is a button
   on each book that opens a dropdown select. This can be used to change the self the book is on
   by sending an API POST to the server. A new GET request is sent and the shelves render again

####Search

   The search page starts with only a search bar. As characters are entered the app sends GET requests to the server
   containing the query. The books matching that query and are then loaded. T/he selector can be used to add these
   to the library

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).