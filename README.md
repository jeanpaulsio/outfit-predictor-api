# TODO

* restrict API calls until 9am on any given day
* CRUD interface for outfits
* show previous day + previous prediction
* create prediction table
* https://stackoverflow.com/questions/22723364/how-to-limit-a-model-to-create-one-record-per-day

# Outfit Predictor

Using a [Decision Tree](https://github.com/igrigorik/decisiontree) to predict outfits


## Schema

<table>
  <tr>
    <td colspan="2">Colors</td>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
  </tr>
  <tr>
    <td>hex</td>
    <td>string</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Shirts</td>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
  </tr>
  <tr>
    <td>color_id</td>
    <td>reference</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Pants</td>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
  </tr>
  <tr>
    <td>color_id</td>
    <td>reference</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">Outfits</td>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
  </tr>
  <tr>
    <td>date</td>
    <td>date</td>
  </tr>
  <tr>
    <td>shirt_id</td>
    <td>reference</td>
  </tr>
  <tr>
    <td>pant_id</td>
    <td>reference</td>
  </tr>
</table>

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


Adding a CRA client

```
create-react-app client
cd client
```

Setting up the proxy

```
  "proxy": {
    "/api/*": {
      "target": "http://localhost:3001"
    }
  }
```

Add `gem 'foreman', '~> 0.84.0'` to gemfile

Create a `Procfile`

```
web: cd client && PORT=3000 npm start
api: rails server -p 3001
```

Now you can run `foreman start`
