class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.datetime :year, null: false
      t.string :description, null: false
      t.string :style, null: false
      t.string :type, null: false
      t.float :price, null: false

      t.timestamps
    end
  end
end
