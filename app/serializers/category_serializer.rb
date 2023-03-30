class CategorySerializer < ActiveModel::Serializer
  attributes :id, :content
  has_many :articles
end
