Outfit.destroy_all
Shirt.destroy_all
Pant.destroy_all
Color.destroy_all

colors = {
  dark_gray:   '#3f3f3f',
  black:       '#232323',
  denim:       '#577088',
  pink:        '#ffb7e1',
  white:       '#f4f4f4',
  red:         '#e82929',
  light_blue:  '#95c6f4',
  light_green: '#bacca7',
  gray:        '#a8a8a8',
  olive:       '#526d47',
  beige:       '#bca07c',
  mint:        '#00ffd0',
  light_gray:  '#dddddd'
}

colors.each do |key, value|
  Color.create!(name: key, hex: value)
end

puts "Created Colors"

colors.each_key do |key|
  s = Shirt.new
  p = Pant.new
  c = Color.find_by_name(key)

  s.color = c
  p.color = c

  s.save
  p.save
end

puts 'Created Pants and Shirts'

outfits = [
  { shirt: colors[:pink],       pant: colors[:gray],        date: '2017-12-13' },
  { shirt: colors[:black],      pant: colors[:olive],       date: '2017-12-14' },
  { shirt: colors[:red],        pant: colors[:gray],        date: '2017-12-15' },
  { shirt: colors[:dark_gray],  pant: colors[:olive],       date: '2017-12-21' },
  { shirt: colors[:pink],       pant: colors[:light_green], date: '2017-12-22' },
  { shirt: colors[:black],      pant: colors[:olive],       date: '2017-12-27' },
  { shirt: colors[:dark_gray],  pant: colors[:light_green], date: '2017-12-28' },
  { shirt: colors[:pink],       pant: colors[:denim],       date: '2018-1-3' },
  { shirt: colors[:black],      pant: colors[:olive],       date: '2018-1-4' },
  { shirt: colors[:dark_gray],  pant: colors[:light_green], date: '2018-1-5' },
  { shirt: colors[:white],      pant: colors[:denim],       date: '2018-1-8' },
  { shirt: colors[:black],      pant: colors[:gray],        date: '2018-1-9' },
  { shirt: colors[:denim],      pant: colors[:gray],        date: '2018-1-10' },
  { shirt: colors[:pink],       pant: colors[:denim],       date: '2018-1-11' },
  { shirt: colors[:dark_gray],  pant: colors[:gray],        date: '2018-1-15' },
  { shirt: colors[:dark_gray],  pant: colors[:gray],        date: '2018-1-16' },
  { shirt: colors[:pink],       pant: colors[:denim],       date: '2018-1-17' },
  { shirt: colors[:black],      pant: colors[:olive],       date: '2018-1-18' },
  { shirt: colors[:light_blue], pant: colors[:denim],       date: '2018-1-19' },
  { shirt: colors[:black],      pant: colors[:denim],       date: '2018-1-22' },
  { shirt: colors[:denim],      pant: colors[:gray],        date: '2018-1-23' },
  { shirt: colors[:dark_gray],  pant: colors[:olive],       date: '2018-1-24' },
  { shirt: colors[:black],      pant: colors[:light_green], date: '2018-1-25' },
  { shirt: colors[:white],      pant: colors[:gray],        date: '2018-1-26' },
  { shirt: colors[:dark_gray],  pant: colors[:gray],        date: '2018-1-30' },
  { shirt: colors[:dark_gray],  pant: colors[:olive],       date: '2018-1-31' },
  { shirt: colors[:red],        pant: colors[:denim],       date: '2018-2-1' },
  { shirt: colors[:dark_gray],  pant: colors[:denim],       date: '2018-2-2' },
  { shirt: colors[:light_blue], pant: colors[:gray],        date: '2018-2-6' },
  { shirt: colors[:white],      pant: colors[:gray],        date: '2018-2-7' },
  { shirt: colors[:dark_gray],  pant: colors[:light_green], date: '2018-2-8' },
  { shirt: colors[:red],        pant: colors[:gray],        date: '2018-2-9' },
  { shirt: colors[:pink],       pant: colors[:denim],       date: '2018-2-12' },
  { shirt: colors[:white],      pant: colors[:light_green], date: '2018-2-13' },
  { shirt: colors[:dark_gray],  pant: colors[:denim],       date: '2018-2-14' },
  { shirt: colors[:pink],       pant: colors[:gray],        date: '2018-2-15' },
  { shirt: colors[:light_blue], pant: colors[:gray],        date: '2018-2-16' },
  { shirt: colors[:light_blue], pant: colors[:beige],       date: '2018-2-19' },
  { shirt: colors[:pink],       pant: colors[:gray],        date: '2018-2-20' },
  { shirt: colors[:light_blue], pant: colors[:denim],       date: '2018-2-23' },
  { shirt: colors[:pink],       pant: colors[:gray],        date: '2018-2-26' },
  { shirt: colors[:red],        pant: colors[:black],       date: '2018-2-27' },
  { shirt: colors[:dark_gray],  pant: colors[:olive],       date: '2018-2-28' },
  { shirt: colors[:light_blue], pant: colors[:black],       date: '2018-3-2' },
  { shirt: colors[:mint],       pant: colors[:gray],        date: '2018-3-5' },
  { shirt: colors[:red],        pant: colors[:black],       date: '2018-3-6' },
  { shirt: colors[:gray],       pant: colors[:denim],       date: '2018-3-7' },
  { shirt: colors[:light_gray], pant: colors[:denim],       date: '2018-3-8' },
  { shirt: colors[:dark_gray],  pant: colors[:olive],       date: '2018-3-9' },
  { shirt: colors[:white],      pant: colors[:black],       date: '2018-3-12' },
  { shirt: colors[:gray],       pant: colors[:black],       date: '2018-3-13' }
]

outfits.each do |outfit|
  shirt_color_id = Color.find_by_hex(outfit[:shirt]).id
  pant_color_id  = Color.find_by_hex(outfit[:pant]).id

  shirt = Shirt.find_by_color_id(shirt_color_id)
  pants = Pant.find_by_color_id(pant_color_id)

  o       = Outfit.new
  o.shirt = shirt
  o.pant  = pants
  o.date  = outfit[:date]
  o.save
end

puts 'Created Outfits'
