class Api::CartItemsController < ApplicationController
    
    def create
        @cart_item = CartItem.new(item_params)
        if @cart_item.save
            render :show
        else
            render :json @cart_item.errors.full_messages, status: 401
        end
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end
    
    def index 
        @cart_items = CartItem.all
    end

    private

    def item_params 
        params.require(:cart_items).permit(:user_id, :item_id)
    end
end
