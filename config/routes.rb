Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :layouts do
    member do
      get 'rectangles'
    end
  end

  resources :users, only: [:create] do 
    member do
      get 'layouts'
    end
  end

  resources :sessions, only: [:create]

  resources :rectangles, except: [:index]
end
