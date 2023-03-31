Rails.application.routes.draw do
  resources :categories
  resources :reviews
  resources :articles
  resources :users

  post '/login', to: 'auth#create'
  post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'
  delete '/logout', to: 'sessions#logout'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
