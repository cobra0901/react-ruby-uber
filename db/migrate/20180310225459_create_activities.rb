class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :description
      t.string :polyline
      t.string :string
      t.integer :athlete_id

      t.timestamps
    end
  end
end
