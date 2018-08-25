import React from "react";
import { connect } from "react-redux";
import { saveActivity } from "../../actions/activity_actions";
import { saveImage } from "../../actions/image_actions";
import { withRouter } from "react-router";

class MapSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      image: null
    };
    this.handleSave = this.handleSave.bind(this);
    this.close = this.close.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }

  handleSave(e) {
    e.preventDefault();
    const activity = {
      polyline: this.props.poly,
      title: this.state.title,
      description: this.state.description,
      athlete_id: this.props.currentUser.id,
      elevation: this.props.el,
      est_moving_time: this.props.time,
      distance: this.props.dist,
      type: this.props.type
    };

    let that = this;
    this.props.saveActivity(activity, this.props.currentUser).then(payload => {
      if (this.state.image) {
        const image = {
          userId: that.props.currentUser.id,
          activityId: payload.activity.id,
          image: that.state.image
        };
        that.props.saveImage(image);
      }
      that.props.history.push(`/activities/${payload.activity.id}`);
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  close(e) {
    e.preventDefault();
    this.props.close();
  }

  saveImage() {
    this.setState({ image: e.target.value });
  }

  render() {
    return (
      <div className="modal-background">
        <div className="form-container">
          <div className="save-header">
            <h2>Save</h2>
          </div>
          <form className="save-form" onSubmit={this.handleSave}>
            <p>Enter a title and description for your route below.</p>
            <label>
              Route Title (required)
              <input
                type="text"
                className="route-title-input"
                onChange={this.update("title")}
                value={this.state.title || ""}
              />
            </label>
            <label>
              Description
              <textarea
                className="route-description-input"
                onChange={this.update("description")}
                value={this.state.description || ""}
              />
            </label>

            <div className="buttons">
              <button className="save" onClick={this.handleSave}>
                Save
              </button>
              <button className="close" onClick={this.close}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  saveActivity: (activity, currentUser) =>
    dispatch(saveActivity(activity, currentUser)),
  saveImage: image => dispatch(saveImage(image))
});

export default withRouter(connect(msp, mdp)(MapSaveModal));
