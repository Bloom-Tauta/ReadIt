Rails.application.routes.draw do
  resources :reviews
  resources :articles
  resources :users
  post '/login', to: 'sessions#login'
  post '/signup', to: 'sessions#signup'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
