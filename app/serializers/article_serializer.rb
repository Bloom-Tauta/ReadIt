class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :genre, :name, :rating
  belongs_to :user
  has_many :reviews
end
