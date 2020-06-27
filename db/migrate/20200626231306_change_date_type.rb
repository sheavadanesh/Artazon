class ChangeDateType < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :year
    add_column :items, :year, :integer
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
