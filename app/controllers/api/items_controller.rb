class Api::ItemsController < ApplicationController

    def index 
        @items = keyword ? Item.search(keyword) : Item.all
        # debugger
        render :index
    end

    def show 
        @item = Item.find(params[:id])
        render :show
    end
    
    # def search
    #     @items = Item.search(keyword)
    #     render :index
    # end

    private

    def keyword
        # debugger
        params[:keyword]
    end
    
end
