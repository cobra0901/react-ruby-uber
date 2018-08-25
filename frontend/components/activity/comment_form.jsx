import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/activity_actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      activityId: this.props.activityId,
      authorId: this.props.currentUser.id,
      content: this.state.content
    };
    this.props.createComment(comment);
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="comment-form-cont">
        <div className="comment-form-profile">
          <img src={this.props.currentUser.avatar_url} />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
            />

            <button>Post</button>
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
  createComment: comment => dispatch(createComment(comment))
});

export default connect(msp, mdp)(CommentForm);
