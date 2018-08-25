import * as API from "../util/image_util";

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";

const receiveImages = images => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const fetchImages = userId =>
  API.fetchImages(userId).then(payload => {
    dispatch(receiveImages(payload));
  });

export const createImage = image =>
  API.createImage(image).then(payload => dispatch(receiveImage(payload)));
