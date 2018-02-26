class RemoveColorFromPants < ActiveRecord::Migration[5.1]
  def change
    remove_column :pants, :color, :string
  end
end
