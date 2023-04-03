require 'rails_helper'

require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let(:valid_attributes) { { username: 'testuser', password: 'password' } }

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new user' do
        expect {
          post :create, params: { user: valid_attributes }
        }.to change(User, :count).by(1)
      end

      it 'returns a success response with the new user' do
        post :create, params: { user: valid_attributes }
        expect(response).to be_successful
        expect(response.content_type).to eq('application/json')
        expect(response.body).to include_json({
          user: {
            username: 'testuser'
          }
        })
      end
    end

    context 'with invalid params' do
      it 'returns an error response' do
        post :create, params: { user: { username: 'testuser' } }
        expect(response).to have_http_status(:not_acceptable)
        expect(response.content_type).to eq('application/json')
        expect(response.body).to include_json({
          error: 'failed to create user'
        })
      end
    end
  end

  describe 'PUT #update' do
    let(:new_attributes) { { username: 'newusername' } }

    context 'with valid params' do
      it 'updates the requested user' do
        user = User.create! valid_attributes
        put :update, params: { id: user.to_param, user: new_attributes }
        user.reload
        expect(user.username).to eq('newusername')
      end

      it 'returns a success response with the updated user' do
        user = User.create! valid_attributes
        put :update, params: { id: user.to_param, user: new_attributes }
        expect(response).to be_successful
        expect(response.content_type).to eq('application/json')
        expect(response.body).to include_json({
          username: 'newusername'
        })
      end
    end

    context 'with invalid params' do
      it 'returns an error response' do
        user = User.create! valid_attributes
        put :update, params: { id: user.to_param, user: { username: '' } }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
        expect(response.body).to include_json({
          username: ["can't be blank"]
        })
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested user' do
      user = User.create! valid_attributes
      expect {
        delete :destroy, params: { id: user.to_param }
      }.to change(User, :count).by(-1)
    end

    it 'returns a success response' do
      user = User.create! valid_attributes
      delete :destroy, params: { id: user.to_param }
      expect(response).to have_http_status(:no_content)
    end
  end
end
