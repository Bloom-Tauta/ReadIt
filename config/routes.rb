Rails.application.routes.draw do
  resources :categories
  resources :reviews
  resources :articles
  resources :users

  post '/login', to: 'sessions#login'
  post '/signup', to: 'sessions#signup'
<<<<<<< HEAD
  delete '/logout', to: 'sessions#logout'
=======
  get '/me', to: 'sessions#me'
>>>>>>> 587cefcca00ef7dda7294c3fd300ecf6a6e8e49f
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
