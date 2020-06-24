class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if !@user
            render json: ['We cannot find an account with that email address or your password is incorrect'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if current_user 
            logout!
            render json: {}
        else  
            render json: @user.errors.full_messages, status: 404
        end
    end
end
