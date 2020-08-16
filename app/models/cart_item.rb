class CartItem < ApplicationRecord
    validates :user_id, :item_id, presence: true

    belongs_to :users, 
        class_name: "User", 
        foreign_key: :user_id

    belongs_to :items, 
        class_name: "Item", 
        foreign_key: :item_id
end
