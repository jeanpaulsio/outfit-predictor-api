class PantSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :color
end
