class ChangeTypeColumnOnActivities < ActiveRecord::Migration[5.1]
  def change
    rename_column :activities, :type, :type_of
  end
end
