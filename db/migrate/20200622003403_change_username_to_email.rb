class ChangeUsernameToEmail < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :email
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
