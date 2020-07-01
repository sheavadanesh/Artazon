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

i11 = Item.new(title: "Les Demoiselles d'Avignon", artist: "Pablo Picasso", year: 1907, description: "Les Demoiselles d'Avignon is a large oil painting created in 1907 by the Spanish artist Pablo Picasso. The work, part of the permanent collection of the Museum of Modern Art, portrays five nude female prostitutes in a brothel on Carrer d'Avinyó, a street in Barcelona.", style: 'Cubism', media_type: 'Painting', price: 995.86)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/the-girls-of-avignon-1907.jpg')
i11.photo.attach(io: file, filename: 'avignon.jpg')
i11.save!

i12 = Item.new(title: "The Night Cafe", artist: "Vincent van Gogh", year: 1888, description: "The Night Café is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.", style: 'Post-Impressionism', media_type: 'Painting', price: 230.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/600px-Vincent_Willem_van_Gogh_076.jpg')
i12.photo.attach(io: file, filename: 'night_cafe.jpg')
i12.save!

i13 = Item.new(title: "The Son of Man", artist: "Rene Magritte", year: 1946, description: "The Son of Man is a 1964 painting by the Belgian surrealist painter René Magritte. It is perhaps his most well-known artwork. Magritte painted it as a self-portrait. The painting consists of a man in an overcoat and a bowler hat standing in front of a low wall, beyond which are the sea and a cloudy sky.", style: 'Surrealism', media_type: 'Painting', price: 15.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/son-of-man.jpg')
i13.photo.attach(io: file, filename: 'son_of_man.jpg')
i13.save!

i14 = Item.new(title: "Campbell's Soup Cans", artist: "Andy Warhol", year: 1962, description: "Campbell's Soup Cans, which is sometimes referred to as 32 Campbell's Soup Cans, is a work of art produced between November 1961 and March or April 1962 by Andy Warhol.", style: 'Pop Art', media_type: 'Painting', price: 11.70)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/soupcan.jpg')
i14.photo.attach(io: file, filename: 'soupcan.jpg')
i14.save!

i15 = Item.new(title: "The Dream", artist: "Henri Rousseau", year: 1910, description: "The Dream is a large oil-on-canvas painting created by Henri Rousseau in 1910, one of more than 25 Rousseau paintings with a jungle theme. His last completed work, it was first exhibited at the Salon des Indépendants from 18 March to 1 May 1910, a few months before his death on 2 September 1910.", style: 'Post-Impressionism', media_type: 'Painting', price: 24.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/dream.jpg')
i15.photo.attach(io: file, filename: 'the_dream.jpg')
i15.save!

i16 = Item.new(title: "Irises", artist: "Vincent van Gogh", year: 1889, description: "Irises is one of several paintings of irises by the Dutch artist Vincent van Gogh, and one of a series of paintings he made at the Saint Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France, in the last year before his death in 1890.", style: 'Post-Impressionism', media_type: 'Painting', price: 54.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/600px-Irises-Vincent_van_Gogh.jpg')
i16.photo.attach(io: file, filename: 'irises.jpg')
i16.save!

i17 = Item.new(title: "The Two Fridas", artist: "Frida Kahlo", year: 1939, description: "The Two Fridas is an oil painting by Mexican artist Frida Kahlo. The painting was the first large-scale work done by Kahlo and is considered one of her most notable paintings. It is a double self-portrait, depicting two versions of Kahlo seated together.", style: 'Surrealism', media_type: 'Painting', price: 12.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/The_Two_Fridas.jpg')
i17.photo.attach(io: file, filename: 'two_fridas.jpg')
i17.save!

i18 = Item.new(title: "The Painter's Studio", artist: "Gustave Courbet", year: 1854, description: "The Painter's Studio: A real allegory summing up seven years of my artistic and moral life is an 1855 oil on canvas painting by Gustave Courbet. It is located in the Musée d'Orsay in Paris, France. Courbet painted The Painter's Studio in Ornans, France in 1855.", style: 'Realism', media_type: 'Painting', price: 15.60)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/painterstudio.jpg')
i18.photo.attach(io: file, filename: 'painters_studio.jpg')
i18.save!

i19 = Item.new(title: "The Weeping Woman", artist: "Pablo Picasso", year: 1937, description: "The Weeping Woman is an oil on canvas painted by Pablo Picasso in France in 1937. Picasso was intrigued with the subject, and revisited the theme numerous times that year. This painting, created on 26 October 1937, was the most elaborate of the series. Its dimensions are 60 х 49 cm, 23 ⅝ х 19 ¼ inches.", style: 'Realism', media_type: 'Painting', price: 160.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/the-weeping-woman-pablo-picasso.jpg')
i19.photo.attach(io: file, filename: 'weeping_woman.jpg')
i19.save!

i20 = Item.new(title: "The Old Guitarist", artist: "Pablo Picasso", year: 1903, description: "The Old Guitarist is an oil painting by Pablo Picasso created in late 1903 and early 1904. It depicts an elderly musician, a blind, haggard man with threadbare clothing, weakly hunched over his guitar while playing in the streets of Barcelona, Spain.", style: 'Expressionism', media_type: 'Painting', price: 25.19)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/guitar.jpg')
i20.photo.attach(io: file, filename: 'guitarist.jpg')
i20.save!

i21 = Item.new(title: "Le Reve", artist: "Pablo Picasso", year: 1932, description: "Le Rêve is a 1932 oil painting by Pablo Picasso, then 50 years old, portraying his 22-year-old mistress Marie-Thérèse Walter. It is said to have been painted in one afternoon, on 24 January 1932.", style: 'Cubism', media_type: 'Painting', price: 131.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Le+Reve.jpg')
i21.photo.attach(io: file, filename: 'reve.jpg')
i21.save!

i22 = Item.new(title: "Girl before a Mirror", artist: "Pablo Picasso", year: 1932, description: "Girl before a Mirror is a painting by Pablo Picasso that was created in March 1932. Considered to be one of his masterpieces, the painting has elicited varied interpretations of this portrait of Picasso's lover and her reflection.", style: 'Cubism', media_type: 'Painting', price: 45.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Le+Reve.jpg')
i22.photo.attach(io: file, filename: 'reve.jpg')
i22.save!

i23 = Item.new(title: "Don Quixote", artist: "Pablo Picasso", year: 1955, description: "Don Quixote is a 1955 sketch by Pablo Picasso of the Spanish literary hero and his sidekick, Sancho Panza. It was featured on the August 18–24 issue of the French weekly journal Les Lettres Françaises in celebration of the 350th anniversary of the first part of Cervantes’s Don Quixote. ", style: 'Cubism', media_type: 'Sketch', price: 10.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/don-quixote-1955.jpg')
i23.photo.attach(io: file, filename: 'quixote.jpg')
i23.save!

i24 = Item.new(title: "The Burning Giraffe", artist: "Salvador Dali", year: 1937, description: "The Burning Giraffe is a painting by the Spanish surrealist Salvador Dalí. It is an oil painting on panel and is in the Kunstmuseum Basel. Dalí painted Burning Giraffe before his exile in the United States, which was from 1940 to 1948.", style: 'Surrealism', media_type: 'Painting', price: 145.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/The+Burning+Giraffe+Salvador+Dali.jpg')
i24.photo.attach(io: file, filename: 'giraffe.jpg')
i24.save!

i25 = Item.new(title: "Lobster Telephone", artist: "Salvador Dali", year: 1936, description: "Lobster Telephone is a Surrealist object, created by Salvador Dalí in 1936 for the English poet Edward James, a leading collector of surrealist art.", style: 'Surrealism', media_type: 'Sculpture', price: 35.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/T03257_9.jpg')
i25.photo.attach(io: file, filename: 'lobster.jpg')
i25.save!

i26 = Item.new(title: "Metamorphosis of Narcissus", artist: "Salvador Dali", year: 1937, description: "Metamorphosis of Narcissus is an oil-on-canvas painting by the Spanish surrealist Salvador Dalí. Originally titled Métamorphose de Narcisse, this painting is from Dalí's paranoiac-critical period and depicts his interpretation of the Greek myth of Narcissus.", style: 'Surrealism', media_type: 'Painting', price: 86.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/T02343_9.jpg')
i26.photo.attach(io: file, filename: 'narcissus.jpg')
i26.save!

i27 = Item.new(title: "The Elephants", artist: "Salvador Dali", year: 1948, description: "The Elephants differs from the other paintings in that the animals are the primary focus of the work, with a barren graduated background and lack of other content, where most of Dalí's paintings contain much detail and points of interest.", style: 'Surrealism', media_type: 'Painting', price: 99.50)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Dali_Elephants.jpg')
i27.photo.attach(io: file, filename: 'elephants.jpg')
i27.save!

i28 = Item.new(title: "Swans Reflecting Elephants", artist: "Salvador Dali", year: 1937, description: "Swans Reflecting Elephants is a painting by the Spanish surrealist Salvador Dalí. This painting is from Dalí's Paranoiac-critical period. Painted using oil on canvas, it contains one of Dalí's famous double images.", style: 'Surrealism', media_type: 'Painting', price: 112.50)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/cygnes-refletant-des-elephants.jpg!Large.jpg')
i28.photo.attach(io: file, filename: 'swans.jpg')
i28.save!

i29 = Item.new(title: "Christ of Saint John of the Cross", artist: "Salvador Dali", year: 1951, description: "Christ of Saint John of the Cross is a painting by Salvador Dalí made in 1951 which is in the collection of the Kelvingrove Art Gallery and Museum, Glasgow. It depicts Jesus Christ on the cross in a darkened sky floating over a body of water complete with a boat and fishermen.", style: 'Surrealism', media_type: 'Painting', price: 110.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Christ_of_Saint_John_of_the_Cross.jpg')
i29.photo.attach(io: file, filename: 'christ.jpg')
i29.save!

i30 = Item.new(title: "The Temptation of St. Anthony", artist: "Salvador Dali", year: 1946, description: "The Temptation of St. Anthony is a painting by Spanish surrealist artist Salvador Dalí. Painted in 1946, it is a precursor to the body of Dalí's work commonly known as the classical period or the Dalí Renaissance.", style: 'Surrealism', media_type: 'Painting', price: 121.99)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/3a3cff502795db1e804515790411b002.jpg')
i30.photo.attach(io: file, filename: 'temptation.jpg')
i30.save!

i31 = Item.new(title: "Galatea of Spheres", artist: "Salvador Dali", year: 1952, description: "Galatea of the Spheres is a painting by Salvador Dalí made in 1952. It depicts Gala Dalí, Salvador Dalí's wife and muse, as pieced together through a series of spheres arranged in a continuous array.", style: 'Surrealism', media_type: 'Painting', price: 88.95)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Galaofspheres.jpg')
i31.photo.attach(io: file, filename: 'spheres.jpg')
i31.save!

i32 = Item.new(title: "The Artist's Garden at Giverny", artist: "Claude Monet", year: 1900, description: "The Artist's Garden at Giverny is an oil on canvas painting by Claude Monet done in 1900 now the Musée d'Orsay, Paris. It is one of many works by the artist of his garden at Giverny over the last thirty years of his life.", style: 'Impressionism', media_type: 'Painting', price: 204.95)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Monet_-_Monets_Garten_in_Giverny.jpg')
i32.photo.attach(io: file, filename: 'giverny.jpg')
i32.save!

i33 = Item.new(title: "San Giorgio Maggiore at Dusk", artist: "Claude Monet", year: 1908, description: "Saint-Georges majeur au crépuscule refers to an Impressionist painting by Claude Monet, which exists in more than one version. It forms part of a series of views of the monastery-island of San Giorgio Maggiore.", style: 'Impressionism', media_type: 'Painting', price: 187.29)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/San-Giorgio-Maggiore-At-Dusk.jpg')
i33.photo.attach(io: file, filename: 'dusk.jpg')
i33.save!

i34 = Item.new(title: "The Water Lily Pond", artist: "Claude Monet", year: 1899, description: "In 1899, once the garden had matured, the painter undertook 17 views of the motif under differing light conditions. Surrounded by luxuriant foliage, the bridge is seen here from the pond itself, among an artful arrangement of reeds and willow leaves.", style: 'Impressionism', media_type: 'Painting', price: 40.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/water-lily-pond-with-japanese-bridge.jpg')
i34.photo.attach(io: file, filename: 'water_lily.jpg')
i34.save!

i35 = Item.new(title: "Shot Marylins", artist: "Andy Warhol", year: 1964, description: "The Shot Marilyns is a work of art produced in 1964 by Andy Warhol. It consists of four canvases, each a square measuring 40 inches and each consisting of a painting of Marilyn Monroe, each shot through in the forehead by a single bullet.", style: 'Pop Art', media_type: 'Painting', price: 150.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/shot-marilyns-80f35df1-e97d-40df-9f68-452ffa475ab-resize-750.jpg')
i35.photo.attach(io: file, filename: 'marylins.jpg')
i35.save!

i36 = Item.new(title: "David", artist: "Michelangelo", year: 1501, description: "David is a masterpiece of Renaissance sculpture created in marble between 1501 and 1504 by the Italian artist Michelangelo. David is a 5.17-metre marble statue of the Biblical figure David, a favoured subject in the art of Florence.", style: 'Renaissance', media_type: 'Sculpture', price: 450.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/david.jpg')
i36.photo.attach(io: file, filename: 'david.jpg')
i36.save!

i37 = Item.new(title: "The Thinker", artist: "Auguste Rodin", year: 1902, description: "The Thinker is a bronze sculpture by Auguste Rodin, usually placed on a stone pedestal. The work shows a nude male figure of heroic size sitting on a rock with his chin resting on one hand as though deep in thought, often used as an image to represent philosophy.", style: 'Realism', media_type: 'Sculpture', price: 339.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/DP-13618-012.jpg')
i37.photo.attach(io: file, filename: 'thinker.jpg')
i37.save!

i38 = Item.new(title: "Pietà", artist: "Michelangelo", year: 1498, description: "The Pietà is a work of Renaissance sculpture by Michelangelo Buonarroti, housed in St. Peter's Basilica, Vatican City. It is the first of a number of works of the same theme by the artist. The statue was commissioned for the French Cardinal Jean de Bilhères, who was a representative in Rome.", style: 'Renaissance', media_type: 'Sculpture', price: 499.95)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/pieta-1499.jpg')
i38.photo.attach(io: file, filename: 'pieta.jpg')
i38.save!

i39 = Item.new(title: "The Creation of Adam", artist: "Michelangelo", year: 1512, description: "The Creation of Adam is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man.", style: 'Renaissance', media_type: 'Painting', price: 200.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/sistine-chapel-ceiling-creation-of-adam-1510.jpg')
i39.photo.attach(io: file, filename: 'adam.jpg')
i39.save!

i40 = Item.new(title: "Black Square", artist: "Kazimir Malevich", year: 1884, description: "Black Square is an iconic painting by Kazimir Malevich. The first version was done in 1915. Malevich made four variants of which the last is thought to have been painted during the late 1920s or early 1930s. Black Square was first shown in The Last Futurist Exhibition 0,10 in 1915.", style: 'Abstract', media_type: 'Painting', price: 60.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/black_square.png')
i40.photo.attach(io: file, filename: 'black_square.png')
i40.save!

i41 = Item.new(title: "Broadway Boogie-Woogie", artist: "Piet Mondrian", year: 1942, description: "Broadway Boogie Woogie is a painting by Piet Mondrian completed in 1943, after he had moved to New York in 1940. Compared to his earlier work, the canvas is divided into a much larger number of squares. ", style: 'Abstract', media_type: 'Painting', price: 180.00)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/1200px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg')
i41.photo.attach(io: file, filename: 'boogie.jpg')
i41.save!

i42 = Item.new(title: "Autumn Rhythm (Number 30)", artist: "Jackson Pollock", year: 1950, description: "Autumn Rhythm (Number 30) is a 1950 abstract expressionist painting by American artist Jackson Pollock in the collection of the Metropolitan Museum of Art in New York City. The work is a distinguished example of Pollock's 1947-52 poured-painting style, and is often considered one of his most notable works.", style: 'Abstract', media_type: 'Painting', price: 24.50)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/autumn-rhythm.jpg')
i42.photo.attach(io: file, filename: 'autumn.jpg')
i42.save!

i43 = Item.new(title: "Composition with Red, Yellow and Blue", artist: "Piet Mondrian", year: 1942, description: "Composition with Red, Yellow and Blue represents a mature stage of Mondrian's abstraction. It seems to be a flat work, but there are differences in the texture of different elements. ", style: 'Abstract', media_type: 'Painting', price: 190.75)
file = open('https://artazon-seeds.s3-us-west-1.amazonaws.com/Composition-with-red-yellow-and-blue.jpg')
i43.photo.attach(io: file, filename: 'composition.jpg')
i43.save!