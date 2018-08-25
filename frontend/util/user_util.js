export const fetchUsers = query => {
  return $.ajax({
    url: "api/users",
    data: { query }
  });
};

export const fetchUser = userId => {
  return $.ajax({
    url: `api/users/${userId}`
  });
};

export const createFollow = (followerId, followedId) => {
  return $.ajax({
    url: "api/follows",
    method: "POST",
    data: { followerId, followedId }
  });
};

export const deleteFollow = (followerId, followedId) => {
  return $.ajax({
    url: `api/follows/1`,
    method: "DELETE",
    data: { followerId, followedId }
  });
};

export const updateUser = (userId, data) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: "PATCH",
    data: { data }
  });
};
