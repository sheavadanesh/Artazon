class Item < ApplicationRecord

    TYPES = [
        'Painting',
        'Sculpture',
        'Other'
    ]

    STYLES = [
        'Surrealism',
        'Cubism',
        'Renaissance',
        'Pop Art',
        'Impressionism/Post-Impressionism',
        'Baroque',
        'Modernism',
        'Abstract Expressionism',
        'Other'
    ]

    validates :artist, presence: true
    validates :media_type, presence: true
    validates :style, presence: true
    validates :title, :year, :description, :price, presence: true

    has_one_attached :photo
    
    has_many :reviews, class_name: "Review", foreign_key: :item_id
    has_many :cart_items, class_name: "CartItems", foreign_key: :item_id

    # Active Storage Association

    def self.search(keyword)
        self.where("title ILIKE ?", "%#{keyword}%")
        .or(self.where("style ILIKE ?", "%#{keyword}%"))
        .or(self.where("media_type ILIKE ?", "%#{keyword}%"))
        .or(self.where("artist ILIKE ?", "%#{keyword}%"))
    end
end
