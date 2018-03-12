require 'test_helper'

module V1
  # :nodoc:
  class ShirtsControllerTest < ActionDispatch::IntegrationTest
    def setup
      @valid_params = { color_id: colors(:dark_gray).id }
    end

    test 'GET /shirts' do
      get v1_shirts_path, headers: {}
      assert_equal 200, status
    end

    test 'POST /shirts with valid params' do
      assert_difference 'Shirt.count', 1 do
        post v1_shirts_path, params: { shirt: @valid_params },
                             headers: {},
                             xhr: true
      end
    end
  end
end
