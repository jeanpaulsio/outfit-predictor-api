require 'test_helper'

class PantTest < ActiveSupport::TestCase
  test 'should have a unique identity' do
    olive       = colors(:olive)
    olive_pants = Pant.new
    olive_pants.color = olive

    assert_not olive_pants.valid?

    message = olive_pants.errors.messages[:color_id][0]
    assert_match(/has already been taken/, message)
  end
end
