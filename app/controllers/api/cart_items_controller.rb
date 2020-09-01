class Api::CartItemsController < ApplicationController
    
    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        els
            render :json ['cannot save item'], status: 422
        end
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end
    
    def index 
        @cart_items = current_user.cart_items
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
        render :show
    end

    private
    def cart_item_params 
        params.require(:cartItem).permit(:user_id, :item_id)
    end

end
