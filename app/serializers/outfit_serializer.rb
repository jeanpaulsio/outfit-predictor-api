class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :date, :shirt_color, :pant_color

  def shirt_color
    object.shirt.color
  end

  def pant_color
    object.pant.color
  end
end
