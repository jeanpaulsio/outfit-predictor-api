require 'test_helper'

class ColorTest < ActiveSupport::TestCase
  def setup
    @dark_gray = colors(:dark_gray)
  end

  test 'color should be valid' do
    assert @dark_gray.valid?
  end

  test 'name should be present' do
    @dark_gray.name = ''
    assert_not @dark_gray.valid?
  end

  test 'name should be unique' do
    dark_gray_clone      = Color.new
    dark_gray_clone.name = 'dark_gray'
    dark_gray_clone.hex  = '#e8e8e8'
    assert_not dark_gray_clone.valid?

    message = dark_gray_clone.errors.messages[:name][0]
    assert_equal message, 'has already been taken'
  end

  test 'hex should be present' do
    @dark_gray.hex = ''
    assert_not @dark_gray.valid?
  end

  test 'hex should be formatted correctly' do
    @dark_gray.hex = '#d1d1d1'
    assert @dark_gray.valid?

    @dark_gray.hex = '#ccc'
    assert @dark_gray.valid?

    @dark_gray.hex = 'fff'
    assert_not @dark_gray.valid?

    message = @dark_gray.errors.messages[:hex][0]
    assert_equal message, 'is invalid'
  end
end
