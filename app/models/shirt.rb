class Shirt < ApplicationRecord
  belongs_to :color
  has_many :outfits, dependent: :destroy
  validates :color_id, uniqueness: true
end
