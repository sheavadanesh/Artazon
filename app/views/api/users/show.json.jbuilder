# creates json object that points id -> user id and name -> user name
json.extract! @user, :id, :name
json.cart_items @user.cart_items