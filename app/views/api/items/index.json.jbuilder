@items.each do |item|
    json.set! item.id do
        json.extract! item, :id, 
        :title, 
        :artist, 
        :year, 
        :description, 
        :style, 
        :media_type, 
        :price
        json.photoUrl url_for(item.photo)
    end
end