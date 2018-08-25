import React from "react";
import Gallery from "react-grid-gallery";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="banner-default" />;
    const length = Object.keys(this.props.images).length;

    const images = [];

    Object.values(this.props.images)
      .slice(0, 4)
      .forEach((img, idx) =>
        images.push({
          src: img.url,
          thumbnail: img.url,
          thumbnailWidth: 600,
          thumbnailHeight: 500
        })
      );
    // without react grid
    // <img
    //   className="banner-photo"
    //   style={{ width: "25%", height: "100%" }}
    //   src={img.url}
    //   key={`banner-img-${idx}`}
    //   />

    return (
      <div className="banner">
        <Gallery images={images} enableImageSelection={false} rowHeight={300} />
      </div>
    );
  }
}

export default Banner;
