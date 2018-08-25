require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper

class Comment < ApplicationRecord
  validates :author, :activity, :content, presence: true

  belongs_to :author, class_name: :User
  belongs_to :activity

  def creation_in_words
    time_ago_in_words(self.created_at)
  end
end
