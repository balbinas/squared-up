class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  # Defining own layouts method
  def layouts
    render json: user.layouts
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user
    User.find(@current_user_id)
  end

  def user_params
    params.permit(:email, :password)
  end

end
