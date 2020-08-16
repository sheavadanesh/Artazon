json.extract! @item, :id, 
                    :title, 
                    :artist, 
                    :year, 
                    :description, 
                    :style,
                    :media_type,
                    :price
                    
if @item.photo.attached?
    json.photoUrl url_for(@item.photo)
end