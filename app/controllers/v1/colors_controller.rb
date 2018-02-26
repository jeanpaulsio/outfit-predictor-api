module V1
  # :nodoc:
  class ColorsController < ApplicationController
    def index
      render json: Color.all
    end
  end
end
