module V1
  # :nodoc:
  class PantsController < ApplicationController
    def index
      pants = Pant.all
      json_response(pants)
    end
  end
end
