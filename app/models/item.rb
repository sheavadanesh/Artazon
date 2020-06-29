class Item < ApplicationRecord
    # ARTISTS = [
    #     'Salvador Dali',
    #     'Pablo Picasso',
    #     'Leonardo Da Vinci',
    #     'Andy Warhol',
    #     'Claude Monet',
    #     'Rembrandt van Rijn',
    #     'Vincent Van Gogh',
    #     'Frida Kahlo',
    #     "Georgia O'Keeffe",
    #     'Jackson Pollock',
    #     'Other'
    # ]

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
    validates :media_type, presence: true, inclusion: { in: TYPES }
    validates :style, presence: true, inclusion: { in: STYLES }
    validates :title, :year, :description, :price, presence: true

    has_one_attached :photo
    
    has_many :reviews, class_name: "Review", foreign_key: :item_id
end
