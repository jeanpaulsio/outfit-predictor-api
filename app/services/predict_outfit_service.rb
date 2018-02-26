# Decision Tree Service to predict an outfit given some data
class PredictOutfitService
  def initialize(outfits)
    @outfits = outfits
    # @date    = Date.today.strftime('%a')
    @date    = 'Mon'
  end

  def execute
    train_shirt_colors = []
    train_pant_colors  = []

    @outfits.each do |outfit|
      train_shirt_colors << [outfit.date.strftime('%a'), outfit.shirt.color.hex]
      train_pant_colors << [outfit.shirt.color.hex, outfit.pant.color.hex]
    end
    puts train_pant_colors


    shirt_decision_tree = create_tree('Day', train_shirt_colors)
    shirt_decision      = make_decision(@date, shirt_decision_tree)
    pant_decision_tree  = create_tree('Shirt Color', train_pant_colors)
    pant_decision       = make_decision(shirt_decision, pant_decision_tree)

    { shirt: shirt_decision, pants: pant_decision }
  end

  def create_tree(attribute, training)
    DecisionTree::ID3Tree.new([attribute], training, 0, :discrete)
  end

  def make_decision(test, tree)
    tree.train
    tree.predict([test])
  end
end
