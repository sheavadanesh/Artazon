class Api::ItemsController < ApplicationController

    def index 
        @items = keyword ? Item.search(keyword) : Item.all
        render :index
    end

    def show 
        @item = Item.find(params[:id])
        render :show
    end

    private

    def keyword
        params[:keyword]
    end
    
end
