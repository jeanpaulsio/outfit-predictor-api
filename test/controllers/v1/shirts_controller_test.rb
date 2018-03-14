require 'test_helper'

module V1
  # :nodoc:
  class ShirtsControllerTest < ActionDispatch::IntegrationTest
    def setup
      @white_shirt    = shirts(:white_shirt)
      @pink           = colors(:pink)
      @valid_params   = { color_id: colors(:dark_gray).id }
      @invalid_params = { color_id: '' }
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

    test 'POST /shirts with invalid params do' do
      assert_no_difference 'Shirt.count' do
        post v1_shirts_path, params: { shirt: @invalid_params },
                             headers: {},
                             xhr: true
      end

      assert_equal 422, status
    end

    test 'PATCH /shirts/:id with valid params' do
      patch v1_shirt_path(@white_shirt), headers: {}, xhr: true, params: {
        shirt: { color_id: @pink.id }
      }

      assert_equal 200, status
      @white_shirt.reload
      assert_equal 'pink', @white_shirt.color.name
    end

    test 'PATCH /shirts/:id with nonexisting color' do
      patch v1_shirt_path(@white_shirt), headers: {}, xhr: true, params: {
        shirt: { color_id: 1 }
      }

      assert_equal 422, status
      @white_shirt.reload
      assert_match(/Color must exist/, @response.body)
    end

    test 'DELETE /shirts/:id' do
      # assert @white_shirt.destroy
      # assert_raise(ActiveRecord::RecordNotFound) { @white_shirt.reload }

      assert_difference 'Shirt.count', -1 do
        delete v1_shirt_path(@white_shirt), headers: {}, xhr: true
      end

      assert_equal 204, status
      assert_equal '', @response.body
    end
  end
end
