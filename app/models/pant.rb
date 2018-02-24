class Pant < ApplicationRecord
  validates :color, presence: true, uniqueness: { case_sensitive: false }
end
