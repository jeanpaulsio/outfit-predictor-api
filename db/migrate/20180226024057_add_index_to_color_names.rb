class AddIndexToColorNames < ActiveRecord::Migration[5.1]
  def change
    add_index :colors, :name, unique: true
  end
end
