class Shirt < ApplicationRecord
  belongs_to :color

  validates :color_id, uniqueness: true
end
