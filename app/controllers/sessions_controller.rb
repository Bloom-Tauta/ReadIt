class SessionsController < ApplicationController
    # app/controllers/authentication_controller.rb
    def login
      @user = User.find_by(username: params[:username])
  
      if @user&.authenticate(params[:password])
        token = encode_token(user_id: @user.id)
        render json: { user: @user, token: token }
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
  
    def signup
      @user = User.new(user_params)
  
      if @user.save
        token = encode_token(user_id: @user.id)
        render json: { user: @user, token: token }, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def logout
      
    end
  
    private
  
    def user_params
      params.permit(:username, :password)
    end
  
    def encode_token(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

  
end
