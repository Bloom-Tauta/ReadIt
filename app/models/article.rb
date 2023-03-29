class Article < ApplicationRecord
  has_many :reviews, dependent: :destroy
  belongs_to :user
  belongs_to :category

  def author
    user.username
  end

  def preview
    content.split("\n")[1]
  end

  def date
    created_at.strftime('%B %e, %Y')
  end

end
