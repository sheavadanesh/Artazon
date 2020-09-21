class Api::ItemsController < ApplicationController

    def index 
        @items = keyword ? Item.search(keyword) : Item.all
        # .all is a built-in Rails method that serves up all records of the object.
        render :index
    end

    def show 
        @item = Item.find(params[:id])
        # .find is also a built-in Rails method
        render :show
    end

    private

    def keyword
        params[:keyword]
    end
    
end
