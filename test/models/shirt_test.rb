require 'test_helper'

class ShirtTest < ActiveSupport::TestCase
  test 'should have a unique identity' do
    white             = colors(:white)
    white_shirt       = Shirt.new
    white_shirt.color = white

    assert_not white_shirt.valid?

    message = white_shirt.errors.messages[:color_id][0]
    assert_match(/has already been taken/, message)
  end
end
