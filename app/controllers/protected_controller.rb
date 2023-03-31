class ProtectedController < ApplicationController
  before_action :authenticate_request!

  def index
    render json: {message: "Hello, user ##{current_user.id}!"}
  end

  private

  def authenticate_request!
    if !payload || !JsonWebToken.valid_payload(payload.first)
      return invalid_authentication
    end

    @current_user = User.find_by(id: payload.first['user_id'])
    invalid_authentication unless @current_user
  end

  def invalid_authentication
    render json: {error: 'Invalid authentication token'}, status: :unauthorized
  end

  def payload
    token = request.headers['Authorization'].split(' ').last
    JsonWebToken.decode(token)
  rescue
    nil
  end

  def current_user
    @current_user
  end
end
