
Eat-Da-Burger App: this assignment is to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

Description
This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Materialize framework and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

The app will store every burger in a database, whether devoured or not.

Directory structure
├── config │   ├── connection.js │   └── orm.js │  ├── controllers │   └── burgers_controller.js │ ├── db │   ├── schema.sql │   └── seeds.sql │ ├── models │   └── burger.js │  ├── node_modules │  ├── package.json │ ├── public │ ├── assets │      ├── css │      │   └── burger_style.css │      └── img │      └── burger.png ├── server.js │ └── views ├── index.handlebars └── layouts └── main.handlebars
