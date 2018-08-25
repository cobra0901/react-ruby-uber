export const saveActivity = ({
  polyline,
  title,
  description,
  athlete_id,
  est_moving_time,
  distance,
  elevation,
  type
}) =>
  $.ajax({
    url: "api/activities",
    method: "POST",
    data: {
      activity: {
        polyline,
        title,
        description,
        athlete_id,
        est_moving_time,
        distance,
        elevation,
        type_of: type
      }
    }
  });

export const fetchActivity = id =>
  $.ajax({
    url: `api/activities/${id}`
  });

export const fetchActivities = page =>
  $.ajax({
    url: "api/activities",
    data: { page }
  });

export const createLike = activityId =>
  $.ajax({
    url: "api/likes",
    method: "POST",
    data: { activityId: activityId }
  });

export const createComment = ({ activityId, authorId, content }) => {
  return $.ajax({
    url: "api/comments",
    method: "POST",
    data: { comment: { activity_id: activityId, author_id: authorId, content } }
  });
};
