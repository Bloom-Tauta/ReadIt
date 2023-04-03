require 'rails_helper'

RSpec.describe AuthController, type: :controller do
  describe "POST #create" do
    context "with valid params" do
      let(:user) { create(:user, username: "testuser", password: "password123") }
      let(:valid_params) { { user: { username: "testuser", password: "password123" } } }

      it "returns a successful response" do
        post :create, params: valid_params
        expect(response).to have_http_status(:accepted)
      end

      it "returns a JWT token" do
        post :create, params: valid_params
        expect(JSON.parse(response.body)["jwt"]).to_not be_nil
      end
    end

    context "with invalid params" do
      let(:invalid_params) { { user: { username: "testuser", password: "wrongpassword" } } }

      it "returns an unauthorized response" do
        post :create, params: invalid_params
        expect(response).to have_http_status(:unauthorized)
      end

      it "returns an error message" do
        post :create, params: invalid_params
        expect(JSON.parse(response.body)["message"]).to eq("Invalid username or password")
      end
    end
  end

  describe "POST #auto_login" do
    let(:user) { create(:user, username: "testuser", password: "password123") }
    let(:token) { Auth.encode_token({ user_id: user.id }) }
    let(:valid_params) { { token: token } }

    it "returns a user object" do
      post :auto_login, params: valid_params
      expect(JSON.parse(response.body)["username"]).to eq(user.username)
    end
  end
end

