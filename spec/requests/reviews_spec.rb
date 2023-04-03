require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do
  describe "POST #create" do
    context "with valid attributes" do
      it "creates a new review" do
        expect {
          post :create, params: { comments: "Great article!", user_id: 1, article_id: 1 }
        }.to change(Review, :count).by(1)
      end

      it "returns a 201 status code" do
        post :create, params: { comments: "Great article!", user_id: 1, article_id: 1 }
        expect(response.status).to eq(201)
      end
    end

    context "with invalid attributes" do
      it "does not create a new review" do
        expect {
          post :create, params: { comments: nil, user_id: 1, article_id: 1 }
        }.not_to change(Review, :count)
      end

      it "returns a 422 status code" do
        post :create, params: { comments: nil, user_id: 1, article_id: 1 }
        expect(response.status).to eq(422)
      end
    end
  end

  describe "PATCH #update" do
    context "with valid attributes" do
      it "updates the review" do
        review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
        patch :update, params: { id: review.id, comments: "Updated comments" }
        expect(review.reload.comments).to eq("Updated comments")
      end

      it "returns a 200 status code" do
        review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
        patch :update, params: { id: review.id, comments: "Updated comments" }
        expect(response.status).to eq(200)
      end
    end

    context "with invalid attributes" do
      it "does not update the review" do
        review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
        patch :update, params: { id: review.id, comments: nil }
        expect(review.reload.comments).to eq("Great article!")
      end

      it "returns a 422 status code" do
        review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
        patch :update, params: { id: review.id, comments: nil }
        expect(response.status).to eq(422)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the review" do
      review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
      expect {
        delete :destroy, params: { id: review.id }
      }.to change(Review, :count).by(-1)
    end

    it "returns a 204 status code" do
      review = Review.create(comments: "Great article!", user_id: 1, article_id: 1)
      delete :destroy, params: { id: review.id }
      expect(response.status).to eq(204)
    end
  end
end

