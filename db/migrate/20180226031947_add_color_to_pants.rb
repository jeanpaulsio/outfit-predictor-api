class AddColorToPants < ActiveRecord::Migration[5.1]
  def change
    add_reference :pants, :color, foreign_key: true
  end
end
