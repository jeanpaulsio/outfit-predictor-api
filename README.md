# Outfit Predictor

__Decision Trees__

```ruby
require 'rubygems'
require 'decisiontree'

day = ['Day']
train_shirt_colors = [
  ['thu', 'grey'],
  ['fri', 'pink'],
  ['wed', 'black'],
  ['thu', 'grey'],
  ['wed', 'pink'],
  ['thu', 'black'],
  ['fri', 'grey'],
  ['mon', 'white'],
  ['tue', 'black'],
  ['wed', 'denim'],
  ['thu', 'pink'],
  ['mon', 'grey'],
  ['tue', 'grey'],
  ['wed', 'pink'],
  ['thu', 'black'],
  ['fri', 'blue'],
  ['mon', 'black'],
  ['tue', 'denim'],
  ['wed', 'grey'],
  ['thu', 'black'],
  ['fri', 'white']
]

shirt_dec_tree = DecisionTree::ID3Tree.new(day, train_shirt_colors, 0, :discrete)
shirt_dec_tree.train

test = ['mon']

predicted_shirt = shirt_dec_tree.predict(test)

puts "Predicted Shirt: #{predicted_shirt}"
# => Predicted Shirt: black

shirt_color = ['Shirt Color']
train_pant_color = [
  ['grey', 'olive'],
  ['pink', 'grey'],
  ['black', 'olive'],
  ['grey', 'lightgreen'],
  ['pink', 'denim'],
  ['black', 'olive'],
  ['grey', 'lightgreen'],
  ['white', 'denim'],
  ['black', 'grey'],
  ['denim', 'grey'],
  ['pink', 'denim'],
  ['grey', 'grey'],
  ['grey', 'grey'],
  ['pink', 'denim'],
  ['black', 'olive'],
  ['blue', 'denim'],
  ['black', 'denim'],
  ['denim', 'grey'],
  ['grey', 'olive'],
  ['black', 'lightgreen'],
  ['white', 'grey'],
]

pant_dec_tree = DecisionTree::ID3Tree.new(shirt_color, train_pant_color, 0, :discrete)
pant_dec_tree.train

test = [predicted_shirt]

predicted_pant = pant_dec_tree.predict(test)

puts "Predicted Pants: #{predicted_pant}"
# => Predicted Pants: olive
```

