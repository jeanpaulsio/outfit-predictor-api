class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :null_session,
                       only: proc { |c| c.request.format.json? }
  skip_before_action :verify_authenticity_token

end
