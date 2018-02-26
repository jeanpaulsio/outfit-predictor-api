class RemoveColorFromShirts < ActiveRecord::Migration[5.1]
  def change
    remove_column :shirts, :color, :string
  end
end
