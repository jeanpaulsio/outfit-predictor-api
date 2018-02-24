class AddIndexToShirts < ActiveRecord::Migration[5.1]
  def change
    add_index :shirts, :color, unique: true
  end
end
