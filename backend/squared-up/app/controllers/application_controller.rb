class ApplicationController < ActionController::API
    before_action :authenticate_user

    def authenticate_user
        token = request.headers['Authorization']
        if token.present?
            begin
            jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
    
            @current_user_id = jwt_payload['id']
            rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
            head :unauthorized
            end
        else
            head :unauthorized
        end
    end
end
