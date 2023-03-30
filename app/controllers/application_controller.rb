class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorized

    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response


    def encode_token(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
    
    def auth_header
        # { Authorization: 'Bearer <token>' }
        request.headers['Authorization']
    end
    
   def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          # header: { 'Authorization': 'Bearer <token>' }
          begin
            decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
          rescue JWT::DecodeError
            nil
          end
        end
    end
    
   def current_user
        if decoded_token
          user_id = decoded_token[0]['user_id']
          @user = User.find_by(id: user_id)
        end
    end

    
    
    def logged_in?
        !!current_user
    end

    
    
    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end


    private

    def record_not_found_response
        render json:{error: "#{controller_name.classify} not found" }, status: :not_found
    end

    def record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
