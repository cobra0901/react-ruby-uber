class DropString < ActiveRecord::Migration[5.1]
  def change
    remove_column :activities, :string
  end
end
