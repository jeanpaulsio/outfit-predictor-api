class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :null_session,
                       only: proc { |c| c.request.format.json? }
  skip_before_action :verify_authenticity_token

  def fallback_index_html
    render file: 'public/index.html'
  end
end
