class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :comments
    belongs_to :article
end