class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  # skip_before_action :authorize, only:[:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users

  def create
    user = User.create(user_params)
   
    if user.valid?
      render json: { user: user, status: :created}
    else
      render json: { error: 'failed to create user', status: :not_acceptable}
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end

