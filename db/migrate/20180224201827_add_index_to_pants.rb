class AddIndexToPants < ActiveRecord::Migration[5.1]
  def change
    add_index :pants, :color, unique: true
  end
end
