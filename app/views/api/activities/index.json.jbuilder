@activities.each do |act|
  json.set! act.id do
    json.partial! '/api/activities/activity', activity: act
    json.date act.created
  end
end


# json.users do
#   @activities.map(&:user).each do |user|
#     json.set! user.id do
#       json.partial! '/api/users/user', user: user
#     end
#   end
# end
