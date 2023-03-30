class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :img_url
      t.string :name
      t.string :genre
      t.integer :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true


      t.timestamps
    end
  end
end
