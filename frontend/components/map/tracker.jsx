import React from "react";
import mapStyle from "./google_maps_styling.js";

const mapOptions = {
  center: { lat: 0, lng: 0 },
  zoom: 13,
  styles: mapStyle.tourmalet,
  disableDefaultUI: true,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_TOP
  },
  bicyclingLayer: false
};

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      map: null
    };
    this.startTracking = this.startTracking.bind(this);
    this.stopTracking = this.stopTracking.bind(this);
  }

  componentDidMount() {
    this.path = [];

    this.latLngBounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.polyline = new google.maps.Polyline({
      map: this.map,
      path: this.path,
      strokeColor: "red",
      strokeWeight: 1,
      strokeOpacity: 0.7
    });
    this.centerMap();
  }

  geoSuccess(coords) {
    const initialLocation = new google.maps.LatLng(
      coords.latitude,
      coords.longitude
    );

    this.map.panTo(initialLocation);
  }

  centerMap() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const newCoords = JSON.stringify(pos.coords);
        localStorage.setItem("coords", newCoords);
        this.geoSuccess(newCoords);
      },
      err => console.log(err),
      {
        maximumAge: 6000,
        timeout: 5000,
        enableHighAccuracy: false
      }
    );
  }

  startTracking() {
    this.watchToken = navigator.geolocation.watchPosition(position => {
      this.path.push(
        new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
      );
      console.log(this.path);
      this.polyline.setPath(this.path);
    });
    this.setState({ recording: true });
    this.adjustBounds();
  }

  stopTracking() {
    navigator.geolocation.clearWatch(this.watchToken);
    this.setState({ recording: false });
  }

  adjustBounds() {
    for (var i = 0; i < this.path.length; i++) {
      this.latLngBounds.extend(this.path[i]);
    }
    this.map.fitBounds(this.latLngBounds);
  }

  render() {
    const recordButton = this.state.recording ? (
      <button id="tracker-record-button" onClick={this.stopTracking}>
        End
      </button>
    ) : (
      <button id="tracker-record-button" onClick={this.startTracking}>
        Record
      </button>
    );
    return (
      <div className="tracker-container">
        <div id="tracker-map" ref={map => (this.mapNode = map)} />
        {recordButton}
      </div>
    );
  }
}

export default Tracker;
