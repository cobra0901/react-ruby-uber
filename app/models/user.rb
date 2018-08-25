class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {within: 6..20, allow_nil: true}

  has_attached_file :avatar,
  styles: { medium: "300x300>", thumb: "100x100>" },
  default_url: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :activities, foreign_key: :athlete_id
  has_many :comments, foreign_key: :author_id
  has_many :liked_posts, class_name: :Like, foreign_key: :liker_id

  has_many :follows, foreign_key: :follower_id
  has_many :in_follows, class_name: :Follow, foreign_key: :followed_id
  has_many :followers, through: :in_follows, source: :follower
  has_many :followings, through: :follows, source: :followed
  has_many :images

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(pwd)
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def is_password?(pwd)
    BCrypt::Password.new(self.password_digest).is_password?(pwd)
  end

  def reset_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_creds(email, pwd)
    user = User.find_by(email: email)
    user && user.is_password?(pwd) ? user : nil
  end

  def last_weeks_activities
    days = Hash.new { |h,k| h[k] = []}
    acts = self.activities.where('created_at >= ?', 1.week.ago)
    acts.each do |act|
      d = act.created_at.wday
      if d == 0
        days[:sun] << act
      elsif d == 1
        days[:mon] << act
      elsif d == 2
        days[:tues] << act
      elsif d == 3
        days[:wed] << act
      elsif d == 4
        days[:thurs] << act
      elsif d == 5
        days[:fri] << act
      elsif d == 6
        days[:sat] << act
      end
    end
    days
  end

  def one_year_act_totals
    acts = self.activities.where('created_at >= ?', 1.year.ago)
    total = 0
    ride = 0
    run = 0
    acts.each do |act|
      total += act.distance.to_i
      if act.type_of == "Run"
        run += act.distance.to_i
      elsif act.type_of == "Ride"
        ride += act.distance.to_i
      end
    end
    {total: total, ride: ride, run: run}
  end

  private

  def ensure_session_token
    self.session_token ||= generate_token
  end

end

# User.new({
#   username: 'charlie2',
#   email: 'charlie2@gmail.com',
#   password: 'starwars',
#   avatar: File.open("#{Rails.root}/app/assets/images/default_profile.png")
#   })
