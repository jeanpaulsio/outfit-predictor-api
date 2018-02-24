class CreateOutfits < ActiveRecord::Migration[5.1]
  def change
    create_table :outfits do |t|
      t.date :date
      t.references :shirt, foreign_key: true
      t.references :pant, foreign_key: true

      t.timestamps
    end
  end
end
