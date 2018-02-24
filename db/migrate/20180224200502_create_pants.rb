class CreatePants < ActiveRecord::Migration[5.1]
  def change
    create_table :pants do |t|
      t.string :color

      t.timestamps
    end
  end
end
