export const fetchImages = userId => {
  return $.ajax({
    url: "api/images",
    data: { userId }
  });
};

export const createImage = ({ activityId, userId, image }) =>
  $.ajax({
    url: "api/images",
    method: "POST",
    data: { activityId, userId, image }
  });
