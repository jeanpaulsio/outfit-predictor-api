Shirt.destroy_all
Pant.destroy_all

shirt_colors = %w[gray pink black white denim blue red]
pant_colors  = %w[lightgreen gray olive denim brown]

shirt_colors.each do |color|
  Shirt.create!(color: color)
end

pant_colors.each do |color|
  Pant.create!(color: color)
end
