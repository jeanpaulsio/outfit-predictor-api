Outfit.destroy_all
Shirt.destroy_all
Pant.destroy_all

DARK_GRAY  = '3f3f3f'
BLACK      = '232323'
DENIM      = '577088'
PINK       = 'ffb7e1'
WHITE      = 'f4f4f4'
RED        = 'e82929'
LIGHT_BLUE = '95c6f4'

LIGHT_GREEN = 'bacca7'
GRAY        = 'a8a8a8'
OLIVE       = '526d47'
BEIGE       = 'bca07c'

shirt_colors = [
  DARK_GRAY, BLACK, DENIM,
  PINK, WHITE, RED, LIGHT_BLUE
]

pant_colors = [
  LIGHT_GREEN, GRAY, OLIVE,
  DENIM, BEIGE
]

shirt_colors.each do |color|
  Shirt.create!(color: color)
end

pant_colors.each do |color|
  Pant.create!(color: color)
end

outfits = [
  { shirt: PINK,       pant: GRAY,        date: '2017-12-13' },
  { shirt: BLACK,      pant: OLIVE,       date: '2017-12-14' },
  { shirt: RED,        pant: GRAY,        date: '2017-12-15' },
  { shirt: DARK_GRAY,  pant: OLIVE,       date: '2017-12-21' },
  { shirt: PINK,       pant: LIGHT_GREEN, date: '2017-12-22' },
  { shirt: BLACK,      pant: OLIVE,       date: '2017-12-27' },
  { shirt: DARK_GRAY,  pant: LIGHT_GREEN, date: '2017-12-28' },
  { shirt: PINK,       pant: DENIM,       date: '2018-1-3' },
  { shirt: BLACK,      pant: OLIVE,       date: '2018-1-4' },
  { shirt: DARK_GRAY,  pant: LIGHT_GREEN, date: '2018-1-5' },
  { shirt: WHITE,      pant: DENIM,       date: '2018-1-8' },
  { shirt: BLACK,      pant: GRAY,        date: '2018-1-9' },
  { shirt: DENIM,      pant: GRAY,        date: '2018-1-10' },
  { shirt: PINK,       pant: DENIM,       date: '2018-1-11' },
  { shirt: DARK_GRAY,  pant: GRAY,        date: '2018-1-15' },
  { shirt: DARK_GRAY,  pant: GRAY,        date: '2018-1-16' },
  { shirt: PINK,       pant: DENIM,       date: '2018-1-17' },
  { shirt: BLACK,      pant: OLIVE,       date: '2018-1-18' },
  { shirt: LIGHT_BLUE, pant: DENIM,       date: '2018-1-19' },
  { shirt: BLACK,      pant: DENIM,       date: '2018-1-22' },
  { shirt: DENIM,      pant: GRAY,        date: '2018-1-23' },
  { shirt: DARK_GRAY,  pant: OLIVE,       date: '2018-1-24' },
  { shirt: BLACK,      pant: LIGHT_GREEN, date: '2018-1-25' },
  { shirt: WHITE,      pant: GRAY,        date: '2018-1-26' },
  { shirt: DARK_GRAY,  pant: GRAY,        date: '2018-1-30' },
  { shirt: DARK_GRAY,  pant: OLIVE,       date: '2018-1-31' },
  { shirt: RED,        pant: DENIM,       date: '2018-2-1' },
  { shirt: DARK_GRAY,  pant: DENIM,       date: '2018-2-2' },
  { shirt: LIGHT_BLUE, pant: GRAY,        date: '2018-2-6' },
  { shirt: WHITE,      pant: GRAY,        date: '2018-2-7' },
  { shirt: DARK_GRAY,  pant: LIGHT_GREEN, date: '2018-2-8' },
  { shirt: RED,        pant: GRAY,        date: '2018-2-9' },
  { shirt: PINK,       pant: DENIM,       date: '2018-2-12' },
  { shirt: WHITE,      pant: LIGHT_GREEN, date: '2018-2-13' },
  { shirt: DARK_GRAY,  pant: DENIM,       date: '2018-2-14' },
  { shirt: PINK,       pant: GRAY,        date: '2018-2-15' },
  { shirt: LIGHT_BLUE, pant: GRAY,        date: '2018-2-16' },
  { shirt: LIGHT_BLUE, pant: BEIGE,       date: '2018-2-19' },
  { shirt: PINK,       pant: GRAY,        date: '2018-2-20' },
  { shirt: LIGHT_BLUE, pant: DENIM,       date: '2018-2-23' }
]

outfits.each do |outfit|
  Outfit.create!(
    shirt_id: Shirt.find_by_color(outfit[:shirt]).id,
    pant_id:  Pant.find_by_color(outfit[:pant]).id,
    date:     outfit[:date]
  )
end
