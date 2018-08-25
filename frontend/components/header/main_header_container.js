import MainHeader from "./main_header";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const msp = ({ session }) => ({
  currentUser: session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(MainHeader));
