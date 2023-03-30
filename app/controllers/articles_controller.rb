# class ArticlesController < ApplicationController
#   before_action :set_article, only: %i[ show update destroy ]

#   # GET /articles
#   def index
#     @articles = Article.all.includes(:user).order(created_at: :desc)
#     render json: @articles
#   end

#   # GET /articles/1
#   def show
#     render json: @articles, status: :ok
#   end

#   # POST /articles
#   def create
#     @article = Article.create(article_params)

#     if @article.save
#       render json: @article, status: :created, location: @article
#     else
#       render json: @article.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /articles/1
#   def update
#     if @article.update(article_params)
#       render json: @article
#     else
#       render json: @article.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /articles/1
#   def destroy
#     @article.destroy
#     head :no_content
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_article
#       @article = Article.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def article_params
#       params.permit(:img_url, :name, :genre, :rating, :user_id, :category_id)
#     end
# end


class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  def index
    @articles = Article.all.includes(:user).order(created_at: :desc)
    render json: @articles, Serializer: :ArticleListSerializer
  end

  def show
    if @article.present?
      render json: @article, status: :ok
    else
      render json: { error: "Article not found" }, status: :not_found
    end
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article.destroy
    head :no_content
  end

  private

  def set_article
    @article = Article.find_by(id: params[:id])
  end

  def article_params
    params.permit(:img_url, :name, :genre, :rating, :user_id, :category_id)
  end
end
