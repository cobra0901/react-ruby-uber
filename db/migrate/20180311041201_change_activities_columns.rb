class ChangeActivitiesColumns < ActiveRecord::Migration[5.1]
  def change
    change_column :activities, :est_moving_time, :string
  end
end
