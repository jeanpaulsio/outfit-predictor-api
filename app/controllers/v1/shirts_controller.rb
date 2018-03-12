module V1
  # :nodoc:
  class ShirtsController < ApplicationController
    def index
      shirts = Shirt.all
      json_response(shirts)
    end
  end
end
