class SessionsController < ApplicationController
    # app/controllers/authentication_controller.rb
     skip_before_action :authorized, only:[:login,:signup]
    def login
      # if logged_in?
      #   render json: { error: 'You are already logged in' }
      #   return
      # end
      
      @user = User.find_by(username: params[:username])
    
      if @user&.authenticate(params[:password])
        token = encode_token(user_id: @user.id)
        render json: { user: @user.as_json(only: [:id, :username]), token: token }

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
 

    # def logout
    #   # Get and authenticate the current user if necessary.
    #   if @user = User.find_by(username: params[:username]) 
    #     # Delete the authentication token.
    #     @user.authentication_token = nil
    #     @user.save
    #     head(:ok)
    #     render json: {message: "logged out"}
    #   else
    #     head(:unauthorized)
    #   end
    # end
    
    
    def logout
      token = request.headers['Authorization']&.split(' ')&.last
      if token
        user = User.find_by(token: token)
        if user
          user.update(token: nil)
          render json: { message: 'You have been logged out' }
        else
          render json: { error: 'Invalid token' }, status: :unauthorized
        end
      else
        render json: { error: 'Token not found' }, status: :bad_request
      end
    end
    
    # def logout
    #   token = params[:token]
    #   if token
    #     decode_token(token)
    #     render json:{ message: 'You have been logged out'}
    #     #redirect '/login'
    #     else
    #       render json:{ message:'Token not found'}
    #       #redirect '/login'
    #       end
    # end
  
    private
  
    def user_params
      params.permit(:username, :password)
    end
  
    def encode_token(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

  
end
