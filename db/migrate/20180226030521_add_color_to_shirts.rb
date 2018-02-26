class AddColorToShirts < ActiveRecord::Migration[5.1]
  def change
    add_reference :shirts, :color, foreign_key: true
  end
end
