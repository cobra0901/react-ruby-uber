import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchActivities } from "../../actions/activity_actions";

class FourWeekChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchActivities();
  }

  // calculateTotals(activities) {
  //   let run = 0;
  //   let ride = 0;
  //
  //   for (var i = 0; i < activities.length; i++) {
  //     const monthAgo = moment().subtract(28, "days")
  //     if (moment(activities[i].date, "MM DD YYYY").isBefore(monthAgo)) continue;
  //     if (activities[i].type_of === "Ride") {
  //       if (activities[i].est_moving_time)
  //       ride +=
  //     }
  //   }
  // }

  render() {
    if (!this.props.activities) return null;
    const RideBarStyle = {
      borderLeftWidth: this
    };

    const RunBarStyle = {
      borderLeftWidth: this
    };
    const chartStyle = {
      height: 150,
      width: 250
    };

    return (
      <div className="4-week-chart-box">
        <div style={chartStyle} className="4-week-chart" />
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
  fetchActivities: () => Object.values(dispatch(fetchActivities()))
});

export default connect(msp, mdp)(FourWeekChart);
