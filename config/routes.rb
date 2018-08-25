Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :activities, only: [:create, :index, :show, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :images, only: [:create, :destroy, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
