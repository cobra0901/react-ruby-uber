class Follow < ApplicationRecord
  validates :follower, :followed, presence: true
  validates_uniqueness_of :follower, scope: [:followed]

  belongs_to :follower, class_name: :User

  belongs_to :followed, class_name: :User
end
