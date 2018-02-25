Outfit.destroy_all
Shirt.destroy_all
Pant.destroy_all

shirt_colors = %w[3f3f3f pink 232323 white steelblue red lightblue]
pant_colors  = %w[lightgreen lightslategray olive midnightblue tan]

shirt_colors.each do |color|
  Shirt.create!(color: color)
end

pant_colors.each do |color|
  Pant.create!(color: color)
end

outfits = [
  { shirt: 'pink',      pant: 'lightslategray', date: '2017-12-13' },
  { shirt: '232323',    pant: 'olive',          date: '2017-12-14' },
  { shirt: 'red',       pant: 'lightslategray', date: '2017-12-15' },
  { shirt: '3f3f3f',    pant: 'olive',          date: '2017-12-21' },
  { shirt: 'pink',      pant: 'lightgreen',     date: '2017-12-22' },
  { shirt: '232323',    pant: 'olive',          date: '2017-12-27' },
  { shirt: '3f3f3f',    pant: 'lightgreen',     date: '2017-12-28' },
  { shirt: 'pink',      pant: 'midnightblue',   date: '2018-1-3' },
  { shirt: '232323',    pant: 'olive',          date: '2018-1-4' },
  { shirt: '3f3f3f',    pant: 'lightgreen',     date: '2018-1-5' },
  { shirt: 'white',     pant: 'midnightblue',   date: '2018-1-8' },
  { shirt: '232323',    pant: 'lightslategray', date: '2018-1-9' },
  { shirt: 'steelblue', pant: 'lightslategray', date: '2018-1-10' },
  { shirt: 'pink',      pant: 'midnightblue',   date: '2018-1-11' },
  { shirt: '3f3f3f',    pant: 'lightslategray', date: '2018-1-15' },
  { shirt: '3f3f3f',    pant: 'lightslategray', date: '2018-1-16' },
  { shirt: 'pink',      pant: 'midnightblue',   date: '2018-1-17' },
  { shirt: '232323',    pant: 'olive',          date: '2018-1-18' },
  { shirt: 'lightblue', pant: 'midnightblue',   date: '2018-1-19' },
  { shirt: '232323',    pant: 'midnightblue',   date: '2018-1-22' },
  { shirt: 'steelblue', pant: 'lightslategray', date: '2018-1-23' },
  { shirt: '3f3f3f',    pant: 'olive',          date: '2018-1-24' },
  { shirt: '232323',    pant: 'lightgreen',     date: '2018-1-25' },
  { shirt: 'white',     pant: 'lightslategray', date: '2018-1-26' },
  { shirt: '3f3f3f',    pant: 'lightslategray', date: '2018-1-30' },
  { shirt: '3f3f3f',    pant: 'olive',          date: '2018-1-31' },
  { shirt: 'red',       pant: 'midnightblue',   date: '2018-2-1' },
  { shirt: '3f3f3f',    pant: 'midnightblue',   date: '2018-2-2' },
  { shirt: 'lightblue', pant: 'lightslategray', date: '2018-2-6' },
  { shirt: 'white',     pant: 'lightslategray', date: '2018-2-7' },
  { shirt: '3f3f3f',    pant: 'lightgreen',     date: '2018-2-8' },
  { shirt: 'red',       pant: 'lightslategray', date: '2018-2-9' },
  { shirt: 'pink',      pant: 'midnightblue',   date: '2018-2-12' },
  { shirt: 'white',     pant: 'lightgreen',     date: '2018-2-13' },
  { shirt: '3f3f3f',    pant: 'midnightblue',   date: '2018-2-14' },
  { shirt: 'pink',      pant: 'lightslategray', date: '2018-2-15' },
  { shirt: 'lightblue', pant: 'lightslategray', date: '2018-2-16' },
  { shirt: 'lightblue', pant: 'tan',            date: '2018-2-19' },
  { shirt: 'pink',      pant: 'lightslategray', date: '2018-2-20' },
  { shirt: 'lightblue', pant: 'midnightblue',   date: '2018-2-23' }
]

outfits.each do |outfit|
  Outfit.create!(
    shirt_id: Shirt.find_by_color(outfit[:shirt]).id,
    pant_id:  Pant.find_by_color(outfit[:pant]).id,
    date:     outfit[:date]
  )
end
