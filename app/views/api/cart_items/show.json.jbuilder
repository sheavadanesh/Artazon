json.extract! @cart_item, :id, :user_id, :item_id
# json.cart_item do 
#     json.partial! 'api/items/items', item: @cart_item.item_id
#     json.photoUrl url_for(@cart_item.item.photo)
# end
json.deleted false