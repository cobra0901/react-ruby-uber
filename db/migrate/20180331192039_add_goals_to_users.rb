class AddGoalsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :yearly_cycling_goal, :integer
    add_column :users, :weekly_cycling_goal, :integer
    add_column :users, :yearly_running_goal, :integer
    add_column :users, :weekly_running_goal, :integer
  end
end
