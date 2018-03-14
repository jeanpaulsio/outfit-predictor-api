module V1
  # :nodoc:
  class PantsController < ApplicationController
    before_action :set_pant, only: %i[update destroy]

    def index
      pants = Pant.all
      json_response(pants)
    end

    def create
      pant = Pant.create!(pant_params)
      json_response(pant, :created)
    end

    def update
      @pant.update!(pant_params)
      json_response(@pant)
    end

    def destroy
      @pant.destroy
      head :no_content
    end

    private

    def set_pant
      @pant = Pant.find(params[:id])
    end

    def pant_params
      params.require(:pant).permit(:color_id)
    end
  end
end

