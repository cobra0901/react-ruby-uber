class Image < ApplicationRecord

  validates :user_id, :activity_id, presence: true

  has_attached_file :image

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
