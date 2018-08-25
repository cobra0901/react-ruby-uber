class Activity < ApplicationRecord
  validates :title, :polyline, :athlete_id, :type_of, presence: true
  validates :title, length: { maximum: 20 }
  belongs_to :user, foreign_key: :athlete_id
  has_many :comments
  has_many :likes
  has_many :likers, through: :likes, source: :liker
  has_many :images

  def self.find_by_athletes_ids(ids)
    Activity.where(athlete_id: ids)
  end

  def created
    self.created_at.to_date.to_formatted_s(:long_ordinal)
  end

end
