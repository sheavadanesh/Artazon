json.array! @items do |item|
    json.extract! item, :id, 
                        :title, 
                        :artist, 
                        :year, 
                        :description, 
                        :style, 
                        :media_type, 
                        :price
end