## READIT

This is a Rails-Api, React-frontend web app.
It contans data about the three tables and how they interact with each other.


### Things you may want to cover when running the application:

* Ruby version (2.7.4)

* System dependencies

    Run $ bundle install to get the depencaies for the application.
    To run the back end server run $ rails s.
    This will run on port [http://localhost:3000]

* Database creation

    The Database was created using db diagram out of preferrences.
    To view the ERD diagram click the link below:
    https://dbdiagram.io/d/641dbd5a5758ac5f1723ebc9


* Database initialization

    For the Database we have three tables namely; Users, Reviews, Articles and Categories.

* Deployment instructions

(not yet deployed at the moment.)

## API Creation Proccess

* Creating a new Rails API

    Firstly  we run the following command to create a new rails api:
    $ rails new ReadIt --api --minimal --skip-javascript

* Generating the required Resources

    Run the following commands to generate the three resources

    1. $ rails g scaffold Users username password_digest --no-test-framework
    2. $ rails g scaffold Reviews comments:text user_id:integer article_id:integer address --no-test-framework
    3. $ rails g scaffold Articles img_url name genre rating:integer user_id category --no-test-framework
    4. $ rails g scaffold Categories content --no-test-framework

* Model Relationships

    - A `User` has many `Reviews` and has many `Articles`

    - A `Review` belongs to a `User` and belongs to an `Article`

    - A `Category` has many `Articles`

    - An `Article` has many `Reviews`, belongs to`User` and belongs to `Categories`

## ROUTES

    Each resource has it own specific routes as specified in the ./configroutes.rb folder .
    
     User routes; resources :pizzas, only: [:index, :create, :show, :delete]

     Review routes; resources :restaurants, only: [:index, :show, :destroy, :create]
    
     Categories routes; resources :restaurant_pizzas, only: [:show, :create, :index, :destroy]

     Articles routes; resources :restaurant_pizzas, only: [:create, :index, :show, :destroy]

#### POST / create Article


Headers
-------
Content-Type: application/json


Request Body
------
{
  "id": 4,
  "title" Star Magazine,
  "editorial": How the recents sports fund is boosting...,
  "rating": 4,
  "img_url": https://images.google.com/img.ong,
  "category": Sports,
}


Response Body
-------
{
  "id": 4,
  "title" Star Magazine,
  "editorial": How the recents sports fund is boosting...,
  "rating": 4,
  "img_url": https://images.google.com/img.ong,
  "category": Sports,
  "created_at": ,
  "updated_at": 
}

#### DELETE/ destroy Article

Making a DELETE request to this route should delete one article from the database.
You should return a response of `head :no_content` to indicate a successful
deletion.

DELETE /article/:id


Response Body
------
no content

#### UPDATE/edit Article

Making changes to an existing article
You will get a respone accepted if it is successful

PATCH/article/:id

Request Body
------
{
  "id": 4,
  "title" "The Star Magazines",
  "editorial": "How the recents sports fund is boosting...",
  "rating": 4,
  "img_url": "https://images.google.com/img.ong",
  "category": "Sports",
}


Response Body
-------
{
  "id": 4,
  "title" "The Star Magazine",
  "editorial": "How the recents sports fund is boosting...",
  "rating": 4,
  "img_url": "https://images.google.com/img.ong",
  "category": "Sports",
  "created_at": ,
  "updated_at": 
}





