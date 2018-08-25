class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.integer :activity_id
      t.timestamps
    end
  end
end
