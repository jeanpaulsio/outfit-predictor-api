module V1
  # :nodoc:
  class ShirtsController < ApplicationController
    before_action :set_shirt, only: %i[update destroy]

    def index
      shirts = Shirt.all
      json_response(shirts)
    end

    def create
      shirt = Shirt.create!(shirt_params)
      json_response(shirt, :created)
    end

    def update
      @shirt.update!(shirt_params)
      json_response(@shirt)
    end

    def destroy
      @shirt.destroy
      head :no_content
    end

    private

    def set_shirt
      @shirt = Shirt.find(params[:id])
    end

    def shirt_params
      params.require(:shirt).permit(:color_id)
    end
  end
end
