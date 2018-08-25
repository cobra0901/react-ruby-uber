import React from "react";
import { Link, withRouter } from "react-router-dom";
import MapSearch from "./map_search";
import MapFooter from "./map_footer";
import MapSaveModal from "./map_save_modal";

class MapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sel: "Run",
      modalOpen: false
    };
    this.updateSel = this.updateSel.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  updateSel(e) {
    e.preventDefault();
    const sel = this.state.sel === "Ride" ? "Run" : "Ride";
    const mode = this.state.sel === "Ride" ? "WALKING" : "BICYCLING";

    this.props.toggleTravelMode(mode);
    this.setState({ sel });
  }

  openModal(e) {
    e.preventDefault();

    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const modal = this.state.modalOpen ? (
      <MapSaveModal
        close={this.closeModal}
        poly={this.props.poly}
        el={this.props.el}
        time={this.props.time}
        dist={this.props.dist}
        type={this.state.sel}
      />
    ) : null;

    return (
      <div>
        {modal}

        <div className="main-header">
          <div className="header-left">
            <h1 className="logo" onClick={() => this.props.history.push("/")}>
              Tourmalet
            </h1>
          </div>
          <div className="header-right">
            <Link className="exit-link" to="/dashboard">
              Exit Builder
            </Link>
          </div>
        </div>

        <div className="control-head">
          <div className="search-bar">
            <MapSearch map={this.props.map} />
          </div>

          <div className="route-tools">
            <div className="undo-redo-cont">
              <button onClick={this.props.clearRoute} className="clear">
                <i className="material-icons">close</i>
                <a>Clear</a>
              </button>
            </div>

            <div className="ride-run-cont">
              <button
                className={this.state.sel === "Ride" ? "ride selected" : "ride"}
                onClick={this.updateSel}
              >
                <img src="https://image.flaticon.com/icons/png/128/130/130276.png" />
                <a>Ride</a>
              </button>

              <button
                className={this.state.sel === "Run" ? "run selected" : "run"}
                onClick={this.updateSel}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png" />
                <a>Run</a>
              </button>
            </div>
          </div>
          <div className="save-button-cont">
            <button onClick={this.openModal} className="save-button">
              Save
            </button>
          </div>
        </div>

        <MapFooter
          el={this.props.el}
          type={this.state.sel}
          time={this.props.time}
          dist={this.props.dist}
        />
      </div>
    );
  }
}

import { connect } from "react-redux";
import { saveActivity } from "../../actions/activity_actions";

const mdp = dispatch => ({
  saveActivity: activity => dispatch(saveActivity(activity))
});

export default withRouter(connect(null, mdp)(MapControl));

// <button onClick={this.props.undoLeg} className="undo">
//   <i className="material-icons">undo</i>
//   <a>Undo</a>
// </button>
//
