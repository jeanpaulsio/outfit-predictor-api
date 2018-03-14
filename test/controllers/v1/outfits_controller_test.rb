module V1
  # :nodoc:
  class OutfitsControllerTest < ActionDispatch::IntegrationTest
    def setup
      @white_shirt     = shirts(:white_shirt)
      @denim_pants     = pants(:denim_pants)
      @white_and_denim = outfits(:white_and_denim)
    end

    test 'GET /outfits' do
      get v1_outfits_path, headers: {}
      assert_equal 200, status
    end

    test 'POST /outfits on a date without an outfit' do
      assert_difference 'Outfit.count', 1 do
        post v1_outfits_path, headers: {}, xhr: true, params: {
          outfit: {
            shirt_id: @white_shirt.id,
            pant_id: @denim_pants.id,
            date: '2018-01-03'
          }
        }
      end
    end

    test 'POST /outfits without a date' do
      assert_no_difference 'Outfit.count' do
        post v1_outfits_path, headers: {}, xhr: true, params: {
          outfit: {
            shirt_id: @white_shirt.id,
            pant_id: @denim_pants.id,
          }
        }
      end

      assert_equal 422, status
      assert_match(/Date can't be blank/, @response.body)
    end

    test 'POST /outfits on an existing date' do
      assert_no_difference 'Outfit.count' do
        post v1_outfits_path, headers: {}, xhr: true, params: {
          outfit: {
            shirt_id: @white_shirt.id,
            pant_id: @denim_pants.id,
            date: @white_and_denim.date
          }
        }
      end

      assert_equal 422, status
      assert_match(/Date has already been taken/, @response.body)
    end
  end
end
