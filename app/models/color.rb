class Color < ApplicationRecord
  validates :name, presence: true
  validates :hex,  presence: true
end
