module V1
  # :nodoc:
  class PredictionController < ApplicationController
    def predict
      @outfit = Outfit.all
      render json: @outfit
    end
  end
end
