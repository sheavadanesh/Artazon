class CartItems < ApplicationRecord
    validates :user_id, :item_id, presence: true

    belongs_to :users, class_name: "Users", foreign_key: :user_id
    belongs_to :items, class_name: "Items", foreign_key: :item_id
end
