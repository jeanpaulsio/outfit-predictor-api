module V1
  # :nodoc:
  class PredictionController < ApplicationController
    def predict
      @outfit    = Outfit.all
      @predictor = PredictOutfitService.new(@outfit).execute

      json_response(@predictor)
    end
  end
end
