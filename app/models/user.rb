class User < ApplicationRecord
    has_many :articles
    has_many :reviews
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
