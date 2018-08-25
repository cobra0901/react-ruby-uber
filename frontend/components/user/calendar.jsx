import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchActivities } from "../../actions/activity_actions";

class ActivityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchActivities();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
    }
  }

  dayIcon(day) {
    const activities = Object.values(this.props.activities);
    for (var i = 0; i < activities.length; i++) {
      if (day.format("MMMM Do, YYYY") === activities[i].date) {
        return activities[i].type_of === "Ride" ? (
          <i className="material-icons act">directions_bike</i>
        ) : (
          <i className="material-icons act">directions_run</i>
        );
      } else {
        return <i className="material-icons dot">brightness_1</i>;
      }
    }
  }

  makeRows() {
    let k = 28;
    const month = [];
    for (var i = 0; i < 4; i++) {
      let week = [];
      for (var j = 0; j < 7; j++) {
        let day = moment().subtract(k, "days");
        week.push(day);
        k -= 1;
      }

      month.push(
        <tr key={`week-${i}`}>
          {week.map((day, idx) => (
            <td className="day-wrapper" key={`day-${idx}`}>
              <span className="day">
                <div>{day.format("D")}</div>
              </span>
              <span className="activity-indicator">{this.dayIcon(day)}</span>
            </td>
          ))}
        </tr>
      );
      week = [];
    }
    return month;
  }

  render() {
    if (!this.props.activities) return <div />;
    const header = "MTWTFSS".split("").map((day, idx) => (
      <th key={`weeks-${idx}`}>
        <div key={`weeks-${idx}`}>{day}</div>
      </th>
    ));
    const rows = this.makeRows();
    return (
      <div className="activity-calendar">
        <table>
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const msp = state => {
  return {
    activities: state.entities.activities
  };
};

const mdp = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
});

export default connect(msp, mdp)(ActivityCalendar);
