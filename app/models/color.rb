class Color < ApplicationRecord
  HEX_CODE_REGEX = /\A#(?:[0-9a-fA-F]{3}){1,2}\Z/

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :hex,  presence: true, format: { with: HEX_CODE_REGEX }

  has_many :shirts
  has_many :pants
end
