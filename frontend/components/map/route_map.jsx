import React from "react";
import mapStyle from "./google_maps_styling.js";
import MapControl from "./map_control";

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waypts: [],
      travelMode: "WALKING",
      map: null
    };
    this.clearRoute = this.clearRoute.bind(this);
    this.undoLeg = this.undoLeg.bind(this);
    this.toggleTravelMode = this.toggleTravelMode.bind(this);
  }

  componentDidMount() {
    this.initMap();
    this.setState({ map: this.map });
  }

  initMap() {
    const mapOptions = {
      center: { lat: 40.7128, lng: -73.98513 },
      zoom: 13,
      styles: mapStyle.tourmalet,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      bicyclingLayer: true,
      draggableCursor: "pointer"
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    google.maps.event.addListener(this.map, "click", e => {
      this.placeMarker(e.latLng);
    });
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     const initialLocation = new google.maps.LatLng(
    //       pos.coords.latitude,
    //       pos.coords.longitude
    //     );
    //     this.map.panTo(initialLocation);
    //   });
    // }
  }

  placeMarker(latLng) {
    const icon = {
      url: "https://image.flaticon.com/icons/svg/33/33622.svg",
      scaledSize: new google.maps.Size(40, 40)
    };

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: String(this.state.waypts.length + 1),
      icon
    });

    const updated = this.state.waypts.concat(marker);
    this.setState({ waypts: updated });

    if (this.state.waypts.length > 1) {
      this.setElevationGain();
      this.renderRoute();
    }
  }

  renderRoute() {
    const pts = this.state.waypts;

    const start = pts[0].position;
    const end = pts[pts.length - 1].position;

    const waypts = this.makeWayPts(this.state.waypts.slice(1, -1));
    const polylineOptions = new google.maps.Polyline({
      strokeColor: "#494442",
      strokeOpacity: 1.0,
      strokeWeight: 4
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      suppressBicyclingLayer: true,
      draggable: false,
      polylineOptions
    });

    this.directionsDisplay.setMap(this.map);

    this.directionsService.route(
      {
        origin: start,
        destination: end,
        waypoints: waypts,
        travelMode: this.state.travelMode
      },
      (payload, status) => {
        if (status === "OK") {
          this.poly = payload.routes[0].overview_polyline;
          this.clearWayPts();
          this.setTravelTime(payload);
          this.setDistance(payload);
          this.directionsDisplay.setDirections(payload);
        } else {
          alert("I goofed and " + status);
        }
      }
    );
  }

  makeWayPts(waypts) {
    let result = [];
    for (var i = 0; i < waypts.length; i++) {
      result.push({
        location: waypts[i].position,
        stopover: false
      });
    }
    return result;
  }

  clearWayPts() {
    const pts = this.state.waypts;
    for (var i = 1; i < pts.length - 1; i++) {
      pts[i].setMap(null);
    }
  }

  clearAllWayPts() {
    const pts = this.state.waypts;
    for (var i = 0; i < pts.length; i++) {
      pts[i].setMap(null);
    }
  }

  setElevationGain() {
    const elevator = new google.maps.ElevationService();

    elevator.getElevationAlongPath(
      {
        path: this.state.waypts.map(pt => pt.position),
        samples: 256
      },
      (els, response) => {
        if (response === "OK") {
          let totalElGain = 0;
          for (var i = 0; i < els.length - 1; i++) {
            if (els[i].elevation < els[i + 1].elevation) {
              totalElGain += els[i + 1].elevation - els[i].elevation;
            }
          }
          this.setState({ el: Math.round(totalElGain * 3.28084) });
        }
      }
    );
  }

  setTravelTime(payload) {
    this.legs = payload.routes[0].legs;
    let secs = 0;

    for (var i = 0; i < this.legs.length; i++) {
      secs += this.legs[i].duration.value;
    }
    if (this.state.travelMode === "WALKING") {
      secs = Math.floor(secs / 2);
    }

    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - hours * 3600) / 60);
    let seconds = secs - hours * 3600 - minutes * 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    if (minutes === "00" && hours === "00") {
      this.setState({ time: `${seconds} s` });
    } else if (hours === "00") {
      this.setState({ time: `${minutes}:${seconds}` });
    } else {
      this.setState({ time: `${hours}:${minutes}:${seconds}` });
    }
  }

  setDistance(payload) {
    let meters = 0;

    for (var i = 0; i < this.legs.length; i++) {
      meters += this.legs[i].distance.value;
    }
    this.setState({
      dist: parseFloat(Math.round(meters / 1609.344 * 100) / 100).toFixed(2)
    });
  }

  clearRoute() {
    this.directionsDisplay.setMap(null);
    this.directionsDisplay.setDirections({ routes: [] });
    // , this.initMap()
    this.clearAllWayPts();
    this.setState({
      waypts: [],
      dist: null,
      time: null,
      el: null
    });
  }

  undoLeg() {
    const last = this.legs.slice(-1);
    this.clearAllWayPts();
    const waypts = this.state.waypts.slice(0, -1);

    this.directionsDisplay.setMap(null);
    this.setState({ waypts });
  }

  toggleTravelMode(travelMode) {
    this.setState({ travelMode }, () => {
      if (this.state.waypts.length > 1) {
        this.directionsDisplay.setMap(null);
        this.renderRoute();
      }
    });
  }

  render() {
    return (
      <div>
        <MapControl
          map={this.map}
          el={this.state.el}
          time={this.state.time}
          dist={this.state.dist}
          clearRoute={this.clearRoute}
          undoLeg={this.undoLeg}
          toggleTravelMode={this.toggleTravelMode}
          poly={this.poly}
        />
        <div id="map-container" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}
