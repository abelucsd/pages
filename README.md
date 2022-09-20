# Pages
A web application which allows article creation and displays them as cards on a page for easy access.

## Tools and Frameworks
- React.js
- Fetch API
- Express.js

## Current State
- Server Side
  * Currently undisplayed on GitHub.
  * Get and Post methods which either writes or gets articles.
  * Stores articles in a local repository (Json).
- Frontend
  * Comprises multiple pages: Home, Articles, Create an Article
  * Allows user to create an article.
  * Articles page shows cards which display the corresponding article's title, content, date, and a quote.

## Todo
- Home page should display photos and a short intro to the application, with a carousel of sample cards at the bottom.

## Home

Introduces the application to the user.

## Articles

Lists the articles in a card grid.
Clicking on an article card will direct to its article page.

## Create an Article

User could create an article with a title, content, date, and a quote to display in the 'Articles' page.

### Tools

Frontend
* React.js
* CSS
* React Router

Backend
* Express.js
* Json file database (holds the articles)
