class Like < ApplicationRecord
  validates :liker_id, :activity_id, presence: true
  validates_uniqueness_of :liker_id, scope: [:activity_id]
  belongs_to :liker, class_name: :User
  belongs_to :activity
end
