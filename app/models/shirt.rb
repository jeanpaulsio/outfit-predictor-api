class Shirt < ApplicationRecord
  validates :color, presence: true, uniqueness: { case_sensitive: false }
end
