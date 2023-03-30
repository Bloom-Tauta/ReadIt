class ArticleListSerializer < ActiveModel::Serializer
    attributes :id, :img_url, :genre, :name, :rating, :author, :preview, :date
    
end