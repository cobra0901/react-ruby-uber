import React from "react";
import mapStyle from "../map/google_maps_styling";
import ElevationChart from "./elevation_chart";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.elevator = new google.maps.ElevationService();
    this.showPinpoint = this.showPinpoint.bind(this);
    this.hidePinpoint = this.hidePinpoint.bind(this);
    this.handleBarHover = this.handleBarHover.bind(this);
  }

  componentDidMount() {
    this.path = new google.maps.geometry.encoding.decodePath(
      this.props.polyline
    );

    const mapOpts = {
      center: this.path[Math.round(this.path.length / 2)],
      zoom: 13,
      styles: mapStyle.tourmalet,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      bicyclingLayer: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOpts);

    this.pinpoint = new google.maps.Marker({
      visible: false,
      clickable: false,
      zIndex: 1000,
      icon: {
        url: window.green_pinpoint,
        scaledSize: new google.maps.Size(28, 28)
      }
    });
    this.polyline = new google.maps.Polyline({
      strokeColor: "red",
      strokeOpacity: 1.0,
      strokeWeight: 4,
      path: this.path
    });

    this.polyline.setMap(this.map);
    this.pinpoint.setMap(this.map);
    // this.placeMarkers();
  }

  // placeMarkers(latLng1, latLng2) {
  //   const marker1 = new google.maps.Marker({
  //     position: this.path[0],
  //     map: this.map,
  //     icon: {
  //       url: window.green_pinpoint,
  //       scaledSize: new google.maps.Size(28, 28)
  //     }
  //   });
  //
  //   const marker2 = new google.maps.Marker({
  //     position: this.path[this.path.length - 1],
  //     map: this.map,
  //     icon: {
  //       url: "https://image.flaticon.com/icons/svg/33/33622.svg",
  //       scaledSize: new google.maps.Size(28, 28)
  //     }
  //   });
  // }

  showPinpoint(location) {
    this.pinpoint.setPosition(location);
    this.pinpoint.setVisible(true);
  }

  hidePinpoint() {
    this.pinpoint.setVisible(false);
  }

  handleBarHover(location) {
    if (location) {
      this.showPinpoint(location);
    } else {
      this.hidePinpoint();
    }
  }

  render() {
    return (
      <div>
        <div id="map-show-container" ref={map => (this.mapNode = map)} />
        <ElevationChart
          polyline={this.props.polyline}
          height={100}
          width={900}
          onMouseEnter={this.handleBarHover}
          onMouseLeave={this.handleBarHover}
        />
      </div>
    );
  }
}

export default Map;
