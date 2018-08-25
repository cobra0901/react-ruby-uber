import React from "react";
import { withRouter } from "react-router-dom";
import { style, key, rectangle, square } from "./google_static_map_styling";

const StaticMap = props => {
  const size = props.image ? square : props.square ? square : rectangle;
  const url =
    size +
    style +
    "&path=color:0xff0000ff|weight:2%7Cenc:" +
    props.polyline +
    key;

  return (
    <div onClick={() => props.history.push(`/activities/${props.idx}`)}>
      <img src={url} className={props.image ? "square-static-map" : ""} />
      {props.image}
    </div>
  );
};

export default withRouter(StaticMap);
