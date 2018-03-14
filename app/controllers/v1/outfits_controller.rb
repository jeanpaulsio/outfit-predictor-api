module V1
  # :nodoc:
  class OutfitsController < ApplicationController
    def index
      @outfits = Outfit.order(date: :desc)
      json_response(@outfits)
    end

    def create
      @outfit = Outfit.create!(outfit_params)
      json_response(@outfit, :created)
    end

    private

    def outfit_params
      params.require(:outfit).permit(:shirt_id, :pant_id, :date)
    end
  end
end
