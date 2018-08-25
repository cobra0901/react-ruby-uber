
json.partial! '/api/users/user', user: @user

json.activities do
  @user.activities.each do |act|
    json.set! act.id do
      json.partial! '/api/activities/activity.json.jbuilder', activity: act
    end
  end
end

json.images do
  @user.images.each do |img|
    json.set! img.id do
      json.url image_path(img.image.url)
    end
  end
end
