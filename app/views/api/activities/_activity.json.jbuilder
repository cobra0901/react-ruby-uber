json.extract! activity, :id,
:title, :description, :polyline, :athlete_id,
:distance, :est_moving_time, :elevation, :type_of
json.owner activity.user
json.date activity.created
json.owner_img activity.user.avatar.url
json.likers activity.likers.each do |liker|
  json.id liker.id
  json.img image_path(liker.avatar.url(:medium))
end
json.comments activity.comments.each do |c|
  json.author_name c.author.username
  json.author_photo image_path(c.author.avatar.url(:medium))
  json.comment c
  json.created c.creation_in_words
end
json.images activity.images.each do |img|
  json.id img.id
  json.image image_path(img.image.url)
end
# json.comments activity.comments
