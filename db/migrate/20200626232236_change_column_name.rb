class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :type, :media_type
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
