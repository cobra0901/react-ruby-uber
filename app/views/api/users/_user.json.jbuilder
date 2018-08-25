json.user do
  json.extract! user, :id, :username, :email, :session_token
  json.avatar_url image_path(user.avatar.url(:medium))
  json.followers user.followers
  json.followings user.followings
  json.followings_with_avatar user.followings.each do |f|
    json.username f.username
    json.id f.id
    json.avatar_url image_path(f.avatar.url(:medium))
  end
  json.liked_posts user.liked_posts.pluck(:activity_id)
  json.activity_ids user.activity_ids
  json.last_weeks_activities user.last_weeks_activities
  json.year_totals user.one_year_act_totals
  json.follower_ids user.followers.pluck(:id)
  json.following_ids user.followings.pluck(:id)
  json.yearlyCyclingGoal user.yearly_cycling_goal
  json.weeklyCyclingGoal user.weekly_cycling_goal
  json.yearlyRunningGoal user.yearly_running_goal
  json.weeklyRunningGoal user.weekly_running_goal
  json.image_ids user.images.pluck(:id)
end
