# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demo_user = User.create!(name: 'Bob Ross', email: 'bobross@br.com', password:'123456')

Item.destroy_all

test = Item.new(title: "The Persistence of Memory", artist: "Salvador Dali", year: 1930, description: 'One of the most recognizable works of Surrealism. The dripping watches and deformed face in this painting certainly look like an unalloyed expression of the subconscious. Yet, just as with the local mountains in the background, there are a few recongisable features in this work.', style: 'Surrealism', media_type: 'Painting', price: 100.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/the_persistence_of_memory.jpg')
test.photo.attach(io: file, filename: 'persistence.jpg')
test.save!

i2 = Item.new(title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503, description: "A half-length portrait painting by the Italian artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.", style: 'Renaissance', media_type: 'Painting', price: 850.90)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg')
i2.photo.attach(io: file, filename: 'mona_lisa.jpg')
i2.save!

i3 = Item.new(title: "The Starry Night", artist: "Vincent van Gogh", year: 1889, description: "The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an ideal village.", style: 'Post-Impressionism', media_type: 'Painting', price: 100.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/starry_night_full.jpg')
i3.photo.attach(io: file, filename: 'starry_night.jpg')
i3.save!

i4 = Item.new(title: "Guernica", artist: "Pablo Picasso", year: 1937, description: "Guernica is a large 1937 oil painting on canvas by Spanish artist Pablo Picasso. One of Picasso's best known works, Guernica is regarded by many art critics as one of the most moving and powerful anti-war paintings in history. It is exhibited in the Museo Reina Sofía in Madrid.", style: 'Cubism', media_type: 'Painting', price: 202.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/1_O-Sf9WR3-4FJbyvuIpnUZw.jpg')
i4.photo.attach(io: file, filename: 'guernica.jpg')
i4.save!

i5 = Item.new(title: "The Kiss", artist: "Gustav Klimt", year: 1907, description: "The Kiss is an oil-on-canvas painting with added gold leaf, silver and platinum. by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his Golden Period.", style: 'Modern Art', media_type: 'Painting', price: 110.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/The-Kiss.jpg')
i5.photo.attach(io: file, filename: 'kiss.jpg')
i5.save!

i6 = Item.new(title: "The Last Supper", artist: "Leonardo da Vinci", year: 1495, description: "The Last Supper is a late 15th-century mural painting by Italian artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. It is one of the Western world's most recognizable paintings.", style: 'Renaissance', media_type: 'Painting', price: 198.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg')
i6.photo.attach(io: file, filename: 'supper.jpg')
i6.save!

i7 = Item.new(title: "Cafe Terrace at Night", artist: "Vincent van Gogh", year: 1888, description: "Café Terrace at Night is an 1888 oil painting by the Dutch artist Vincent van Gogh. The painting is not signed, but described and mentioned by the artist in three letters. This is a night painting without black, with nothing but beautiful blue and violet and green and in this surrounding the illuminated area colors itself sulfur pale yellow and citron green.", style: 'Post-Impressionism', media_type: 'Painting', price: 250.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/300px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpg')
i7.photo.attach(io: file, filename: 'cafe_terrace.jpg')
i7.save!

i8 = Item.new(title: "The Great Wave off Kanagawa", artist: "Hokusai", year: 1820, description: "The Great Wave off Kanagawa, also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji.", style: 'Ukiyo-e', media_type: 'Print', price: 95.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/download.jpg')
i8.photo.attach(io: file, filename: 'wave.jpg')
i8.save!

i9 = Item.new(title: "Impression, Sunrise", artist: "Claude Monet", year: 1872, description: "Impression, Sunrise (French: Impression, soleil levant) is a painting by Claude Monet first shown at what would become known as the Exhibition of the Impressionists in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement.", style: 'Impressionism', media_type: 'Painting', price: 12.50)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/400px-Monet_-_Impression%2C_Sunrise.jpg')
i9.photo.attach(io: file, filename: 'impression_sunrise.jpg')
i9.save!

i10 = Item.new(title: "No. 5, 1948", artist: "Jackson Pollock", year: 1948, description: "No. 5, 1948 is a painting by Jackson Pollock, an American painter known for his contributions to the abstract expressionist movement. It was sold in 22 May 2006 for $140 million, a new mark for highest ever price for a painting, not surpassed until April 2011.", style: 'Abstract', media_type: 'Painting', price: 140.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/175px-No._5%2C_1948.jpg')
i10.photo.attach(io: file, filename: 'no5_1948.jpg')
i10.save!