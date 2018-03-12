require 'test_helper'

module V1
  # :nodoc:
  class ColorsControllerTest < ActionDispatch::IntegrationTest
    def setup
      @dark_gray        = colors(:dark_gray)
      @valid_params     = { name: 'off_white', hex: '#ffffff' }
      @invalid_params   = { name: '', hex: '' }
      @duplicate_params = { name: 'white', hex: '#ffffff' }
    end

    test 'GET /colors' do
      get v1_colors_path, headers: {}
      assert_equal 200, status
    end

    test 'POST /colors with valid params' do
      assert_difference 'Color.count', 1 do
        post v1_colors_path, params: { color: @valid_params },
                             headers: {},
                             xhr: true
      end
    end

    test 'POST /colors with existing color' do
      assert_no_difference 'Color.count' do
        post v1_colors_path, params: { color: @duplicate_params },
                             headers: {},
                             xhr: true
      end

      assert_equal 422, status
      assert_match(/Name has already been taken/, @response.body)
    end

    test 'POST /colors with invalid params' do
      assert_no_difference 'Color.count' do
        post v1_colors_path, params: { color: @invalid_params },
                             headers: {},
                             xhr: true
      end

      assert_equal 422, status
      assert_match(/Validation failed/, @response.body)
    end

    test 'PATCH /colors/:id with valid params' do
      patch v1_color_path(@dark_gray), headers: {},
                                       xhr: true,
                                       params: { color: { name: 'dark_grey' } }

      assert_equal 200, status
      @dark_gray.reload
      assert_equal 'dark_grey', @dark_gray.name
    end

    test 'PATCH /colors/:id with invalid params' do
      patch v1_color_path(@dark_gray), headers: {},
                                       xhr: true,
                                       params: { color: { name: 'white' } }

      assert_equal 422, status
      @dark_gray.reload
      assert_match(/Name has already been taken/, @response.body)
    end

    test 'DELETE /colors/:id' do
      assert_difference 'Color.count', -1 do
        delete v1_color_path(@dark_gray), headers: {}, xhr: true
      end

      assert_equal 204, status
      assert_equal '', @response.body
    end
  end
end
