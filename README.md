# Sole-Designer-BE

Backend for Sole-Designer web app which is a design editor, where user can upload images and add it to there t-shirt.

## Steps to start application

1) Git clone the repository (via ssh or https).
2) Run command `npm install` in the project directory.
3) Start mysql server.
4) Create a database named `sole_designer_DB` (You can use any name, but you will have to update the same in index.js file).
5) Once the database is created, create following tables with mentioned schema-:
    - **Table name**- `users`
          **Table schema**-: 
          - id [primary key, int(11)] [Stores id of new users (randomly generated)],
          - name [varchar(50)] [Stores full name of user],
          - email [unique, varchar(50)] [Stores email of user]
          - password [varchar(20)] [Stores password of user]
    - **Table name**- `image_urls`
          **Table schema**-: 
          - user_id [int(11)] [Stores id of user whom the canvas belongs],
          - canvas_json [json] [Stores canvas in JSON format],
          - canvas_name [varchar(50)] [Stores name by which user has saved the canvas]
6) Update `max_allowed_packet` in `my.cnf` file. [To increase the size of data packet mysql can accept].
7) Start the backend application server by running `nodemon` or `nodemon --inspect`.
8) Once Backend is running. You are ready to use the `Sole-Designer` web application.
                     
