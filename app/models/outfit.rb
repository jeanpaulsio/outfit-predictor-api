class Outfit < ApplicationRecord
  DATE_REGEX = /\d{4}-\d{2}-\d{2}/

  belongs_to :shirt
  belongs_to :pant

  validates :date, presence: true, uniqueness: true, format: {
    with: DATE_REGEX
  }
end
