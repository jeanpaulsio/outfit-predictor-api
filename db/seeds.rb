Shirt.destroy_all
Pant.destroy_all
Outfit.destroy_all

shirt_colors = %w[gray pink black white denim blue red lightblue]
pant_colors  = %w[lightgreen gray olive denim brown]

shirt_colors.each do |color|
  Shirt.create!(color: color)
end

pant_colors.each do |color|
  Pant.create!(color: color)
end

outfits = [
  { shirt: 'pink',      pant: 'gray',       date: '2017-12-13' },
  { shirt: 'black',     pant: 'olive',      date: '2017-12-14' },
  { shirt: 'red',       pant: 'gray',       date: '2017-12-15' },
  { shirt: 'gray',      pant: 'olive',      date: '2017-12-21' },
  { shirt: 'pink',      pant: 'lightgreen', date: '2017-12-22' },
  { shirt: 'black',     pant: 'olive',      date: '2017-12-27' },
  { shirt: 'gray',      pant: 'lightgreen', date: '2017-12-28' },
  { shirt: 'pink',      pant: 'denim',      date: '2017-1-3' },
  { shirt: 'black',     pant: 'olive',      date: '2017-1-4' },
  { shirt: 'gray',      pant: 'lightgreen', date: '2017-1-5' },
  { shirt: 'white',     pant: 'denim',      date: '2017-1-8' },
  { shirt: 'black',     pant: 'gray',       date: '2017-1-9' },
  { shirt: 'denim',     pant: 'gray',       date: '2017-1-10' },
  { shirt: 'pink',      pant: 'denim',      date: '2017-1-11' },
  { shirt: 'gray',      pant: 'gray',       date: '2017-1-15' },
  { shirt: 'gray',      pant: 'gray',       date: '2017-1-16' },
  { shirt: 'pink',      pant: 'denim',      date: '2017-1-17' },
  { shirt: 'black',     pant: 'olive',      date: '2017-1-18' },
  { shirt: 'blue',      pant: 'denim',      date: '2017-1-19' },
  { shirt: 'black',     pant: 'denim',      date: '2017-1-22' },
  { shirt: 'denim',     pant: 'gray',       date: '2017-1-23' },
  { shirt: 'gray',      pant: 'olive',      date: '2017-1-24' },
  { shirt: 'black',     pant: 'lightgreen', date: '2017-1-25' },
  { shirt: 'white',     pant: 'gray',       date: '2017-1-26' },
  { shirt: 'gray',      pant: 'gray',       date: '2017-1-30' },
  { shirt: 'gray',      pant: 'olive',      date: '2017-1-31' },
  { shirt: 'red',       pant: 'denim',      date: '2017-2-1' },
  { shirt: 'gray',      pant: 'denim',      date: '2017-2-2' },
  { shirt: 'blue',      pant: 'gray',       date: '2017-2-6' },
  { shirt: 'white',     pant: 'gray',       date: '2017-2-7' },
  { shirt: 'gray',      pant: 'lightgreen', date: '2017-2-8' },
  { shirt: 'red',       pant: 'gray',       date: '2017-2-9' },
  { shirt: 'pink',      pant: 'denim',      date: '2017-2-12' },
  { shirt: 'white',     pant: 'lightgreen', date: '2017-2-13' },
  { shirt: 'gray',      pant: 'denim',      date: '2017-2-14' },
  { shirt: 'pink',      pant: 'gray',       date: '2017-2-15' },
  { shirt: 'lightblue', pant: 'gray',       date: '2017-2-16' },
  { shirt: 'lightblue', pant: 'brown',      date: '2017-2-19' },
  { shirt: 'pink',      pant: 'gray',       date: '2017-2-20' },
  { shirt: 'blue',      pant: 'denim',      date: '2017-2-23' }
]

outfits.each do |outfit|
  Outfit.create!(
    shirt_id: Shirt.find_by_color(outfit[:shirt]).id,
    pant_id:  Pant.find_by_color(outfit[:pant]).id,
    date:     outfit[:date]
  )
end
