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

test = Item.new(title: "The Persistence of Memory", artist: "Salvador Dali", year: 1930, description: "cool", style: 'Surrealism', media_type: 'Painting', price: 100.00)
file = open('https://www.phaidon.com/resource/persistenceofmemory1931.jpg')
test.photo.attach(io: file, filename: 'persistence.jpg')
test.save!