class AddToActivities < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :elevation, :integer
    add_column :activities, :distance, :integer
    add_column :activities, :est_moving_time, :integer
  end
end
