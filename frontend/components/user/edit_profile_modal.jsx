import React from "react";
import updateUser from "../../actions/user_actions";

class EditProfileModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

mdp = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});
