Rails.application.routes.draw do
  scope :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      get 'predict' => 'prediction#predict'
      resources :colors
      resources :outfits
      resources :shirts
      resources :pants
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
