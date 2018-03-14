require 'test_helper'

class OutfitTest < ActiveSupport::TestCase
  def setup
    @white_and_denim = outfits(:white_and_denim)
  end

  test 'outfit should be valid' do
    assert @white_and_denim.valid?
  end

  test 'date should be formatted YYYY-MM-DD' do
    @white_and_denim.date = '12-12-2012'
    @white_and_denim.save!
    assert @white_and_denim.valid?

    @white_and_denim.reload
    assert_equal '2012-12-12', @white_and_denim.date.to_s
  end
end
