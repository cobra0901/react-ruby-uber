@images.each do |img|
  json.set! img.id do
    json.extract! img, :user_id, :activity_id
    json.url image_path(img.image.url)
end
