class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    private

    def record_not_found_response
        render json:{error: "#{controller_name.classify} not found" }, status: :not_found
    end

    def record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
