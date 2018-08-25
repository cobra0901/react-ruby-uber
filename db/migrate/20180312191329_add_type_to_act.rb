class AddTypeToAct < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :type, :string
  end
end
