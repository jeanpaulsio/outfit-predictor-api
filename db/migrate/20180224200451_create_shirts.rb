class CreateShirts < ActiveRecord::Migration[5.1]
  def change
    create_table :shirts do |t|
      t.string :color

      t.timestamps
    end
  end
end
