@cart_items.each do |item|
    json.set! item.id do
        json.extract! item.items, :id, 
        :title, 
        :artist, 
        :year, 
        :description, 
        :style, 
        :media_type, 
        :price
        json.photoUrl url_for(item.items.photo)
    end
end