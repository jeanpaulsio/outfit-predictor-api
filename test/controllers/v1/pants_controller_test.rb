require 'test_helper'

module V1
  # :nodoc:
  class PantsControllerTest < ActionDispatch::IntegrationTest
    def setup
      @denim_pants    = pants(:denim_pants)
      @pink           = colors(:pink)
      @valid_params   = { color_id: colors(:dark_gray).id }
      @invalid_params = { color_id: '' }
    end

    test 'GET /pants' do
      get v1_pants_path, headers: {}
      assert_equal 200, status
    end

    test 'POST /pants with valid params' do
      assert_difference 'Pant.count', 1 do
        post v1_pants_path, params: { pant: @valid_params },
                            headers: {},
                            xhr: true
      end
    end

    test 'POST /pants with invalid params do' do
      assert_no_difference 'Pant.count' do
        post v1_pants_path, params: { pant: @invalid_params },
                            headers: {},
                            xhr: true
      end

      assert_equal 422, status
    end

    test 'PATCH /pants/:id with valid params' do
      patch v1_pant_path(@denim_pants), headers: {}, xhr: true, params: {
        pant: { color_id: @pink.id }
      }

      assert_equal 200, status
      @denim_pants.reload
      assert_equal 'pink', @denim_pants.color.name
    end

    test 'PATCH /pants/:id with nonexisting color' do
      patch v1_pant_path(@denim_pants), headers: {}, xhr: true, params: {
        pant: { color_id: 1 }
      }

      assert_equal 422, status
      @denim_pants.reload
      assert_match(/Color must exist/, @response.body)
    end

    test 'PATCH /pants/:id with a taken color' do
      patch v1_pant_path(@denim_pants), headers: {}, xhr: true, params: {
        pant: { color_id: colors(:olive).id }
      }

      assert_equal 422, status
      @denim_pants.reload
      assert_match(/Color has already been taken/, @response.body)
    end

    test 'DELETE /pants/:id' do
      assert_difference 'Pant.count', -1 do
        delete v1_pant_path(@denim_pants), headers: {}, xhr: true
      end

      assert_equal 204, status
      assert_equal '', @response.body
    end
  end
end

