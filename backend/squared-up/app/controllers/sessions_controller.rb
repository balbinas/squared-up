class SessionsController < ApplicationController
    skip_before_action :authenticate_user

  def create
    user = User.find_by_email(sign_in_params[:email])

    if user && user.valid_password?(sign_in_params[:password])
      render json: { token: user.generate_jwt }
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def sign_in_params
      params.permit(:email, :password)
    end
end