module V1
  # :nodoc:
  class ColorsController < ApplicationController
    before_action :set_color, only: %i[show update destroy]

    def index
      @colors = Color.all
      json_response(@colors)
    end

    def create
      @color = Color.create!(color_params)
      json_response(@color, :created)
    end

    def update
      @color.update!(color_params)
      json_response(@color)
    end

    def destroy
      @color.destroy
      head :no_content
    end

    private

    def set_color
      @color = Color.find(params[:id])
    end

    def color_params
      params.require(:color).permit(:name, :hex)
    end
  end
end
