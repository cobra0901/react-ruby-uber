class ChangeActivitiesColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :activities, :distance, :string
  end
end
