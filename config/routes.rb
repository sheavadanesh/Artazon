Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :cart_items, only: [:index, :show, :create, :destroy]
    resources :items, only: [:index, :show]
  end
end