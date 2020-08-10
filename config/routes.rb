Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :items, only: [:index, :show, :search]
    resources :cart_items
  end
end