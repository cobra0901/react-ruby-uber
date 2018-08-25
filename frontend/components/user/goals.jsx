import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import WeeklyChart from "./weekly_goal_chart";

class Goals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1,
      form: false,
      weeklyCycling: this.props.currentUser.weeklyCyclingGoal,
      yearlyCycling: this.props.currentUser.yearlyCyclingGoal,
      weeklyRunning: this.props.currentUser.weeklyRunningGoal,
      yearlyRunning: this.props.currentUser.yearlyRunningGoal
    };
    this.updateGoals = this.updateGoals.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(field) {
    if (this.state.selected === 1) {
      field += "Cycling";
      return e => this.setState({ [field]: parseInt(e.target.value) });
    } else {
      field += "Running";
      return e => this.setState({ [field]: parseInt(e.target.value) });
    }
  }

  dayOfYear() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    return day;
  }

  updateGoals(e) {
    e.preventDefault;
    let data;
    if (this.state.selected === 1) {
      data = {
        weeklyCyclingGoal: this.state.weeklyCycling,
        yearlyCyclingGoal: this.state.yearlyCycling
      };
    } else {
      data = {
        weeklyRunningGoal: this.state.weeklyRunning,
        yearlyRunningGoal: this.state.yearlyRunning
      };
    }
    this.props
      .updateUser(this.props.currentUser.id, data)
      .then(() => this.setState({ form: false }));
  }

  render() {
    if (!this.props.currentUser.year_totals) return null;
    const user = this.props.currentUser;

    const type = this.state.selected === 1 ? "Ride" : "Run";

    let weekTotal;

    if (user.last_weeks_activities && user.last_weeks_activities[0]) {
      if (this.state.selected === 3) {
        weekTotal = Object.values(user.last_weeks_activities)[0]
          .map(act => parseInt(act.distance))
          .reduce((a, b) => a + b);
      } else {
        weekTotal = Object.values(user.last_weeks_activities)[0]
          .filter(act => act.type_of === type)
          .map(act => parseInt(act.distance))
          .reduce((a, b) => a + b);
      }
    }

    let goalImage, weeklyGoal, yearlyGoal;
    if (this.state.selected === 1) {
      weeklyGoal = this.state.weeklyCycling;
      yearlyGoal = this.state.yearlyCycling;
      goalImage = (
        <img
          className="goal-image"
          src="https://image.flaticon.com/icons/png/128/130/130276.png"
        />
      );
    } else if (this.state.selected === 2) {
      weeklyGoal = this.state.weeklyRunning;
      yearlyGoal = this.state.yearlyRunning;
      goalImage = (
        <img
          className="goal-image"
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"
        />
      );
    } else {
      weeklyGoal = this.state.weeklyRunning + this.state.weeklyCycling;
      yearlyGoal = this.state.yearlyRunning + this.state.yearlyCycling;
      goalImage = "";
    }

    const goalForm = (
      <div>
        <form className="goal-form">
          <div className="form-label">Edit Your Goals</div>
          <div>
            <div className="goal-circle">{goalImage}</div>
          </div>
          <div className="goal-form-inputs">
            <label>
              THIS WEEK <br />
              <input
                type="number"
                onChange={this.updateInput("weekly")}
                value={weeklyGoal || ""}
              />miles
            </label>
            <label>
              THIS YEAR <br />
              <input
                type="number"
                onChange={this.updateInput("yearly")}
                value={yearlyGoal || ""}
              />miles
            </label>
          </div>
          <div className="goal-form-buttons-box">
            <button onClick={this.updateGoals} className="goal-save-button">
              Save
            </button>
            <button
              className="goal-cancel-button"
              onClick={() => this.setState({ form: false })}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );

    const yearTotal =
      this.state.selected === 1
        ? user.year_totals.ride
        : this.state.selected === 2
          ? user.year_totals.run
          : user.year_totals.total;
    let statusWidth =
      yearTotal / yearlyGoal * 100 > 100 ? 100 : yearTotal / yearlyGoal * 100;
    const goalChart = (
      <div>
        <div className="goals-top-row">
          <div className="goals-edit-row">
            <div />
            <div className="this-week">
              <div>THIS WEEK</div>
              <div className="goal-num">
                {weekTotal || 0}
                {weeklyGoal ? ` / ${weeklyGoal} mi` : " mi"}
              </div>
            </div>
            {this.props.editable &&
            (this.state.selected === 1 || this.state.selected === 2) ? (
              <i
                className="material-icons"
                onClick={() => this.setState({ form: true })}
              >
                edit
              </i>
            ) : (
              <div style={{ height: "25px", width: "25px" }} />
            )}
          </div>

          <div>
            {this.state.selected === 1 || this.state.selected === 2 ? (
              <div className="goal-circle">{goalImage}</div>
            ) : (
              <div />
            )}
          </div>
          <WeeklyChart
            acts={user.last_weeks_activities}
            type={
              this.state.selected === 1
                ? "Ride"
                : this.state.selected === 2 ? "Run" : "Total"
            }
          />
        </div>

        <div className="this-year">
          <div>THIS YEAR</div>
          <div className="goal-num">
            {yearTotal || 0}
            {yearlyGoal ? ` / ${yearlyGoal} mi` : " mi"}
          </div>

          <div className="year-tracker">
            <div className="goal-status" style={{ width: statusWidth + "%" }} />
          </div>

          <div
            className="today-label"
            style={{ marginLeft: this.dayOfYear() / 365 * 200 - 120 }}
          >
            <span className="today-line" />
            <label>Today</label>
          </div>
        </div>
      </div>
    );

    return (
      <div className="goals-box">
        <ul className="goal-tabs">
          <li
            onClick={() => this.setState({ selected: 1 })}
            className={this.state.selected === 1 ? "selected" : ""}
          >
            <img
              className="goal-tab-image"
              src="https://image.flaticon.com/icons/png/128/130/130276.png"
            />
          </li>
          <li
            onClick={() => this.setState({ selected: 2 })}
            className={this.state.selected === 2 ? "selected" : ""}
          >
            <img
              className="goal-tab-image"
              src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"
            />
          </li>
          <li
            onClick={() => this.setState({ selected: 3 })}
            className={this.state.selected === 3 ? "selected" : ""}
          >
            <div className="goal-tab-total">Total</div>
          </li>
        </ul>
        {this.state.form ? goalForm : goalChart}
      </div>
    );
  }
}

const mdp = dispatch => ({
  updateUser: (userId, data) => dispatch(updateUser(userId, data))
});

export default connect(null, mdp)(Goals);

// <button onClick={() => this.setState({ form: false })} />
