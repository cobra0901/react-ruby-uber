import React from "react";

class WeeklyChart extends React.Component {
  render() {
    const dailyTotals = {
      sun: 0.05,
      mon: 0.05,
      tues: 0.05,
      wed: 0.05,
      thurs: 0.05,
      fri: 0.05,
      sat: 0.05
    };
    debugger;
    ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"].forEach((day, idx) => {
      const acts = this.props.acts[day];
      const type = this.props.type;

      if (acts) {
        // skip over if  activity type does not match current selection
        for (var i = 0; i < acts.length; i++) {
          if (type === "Ride" && acts[i].type_of === "Run") {
            continue;
          } else if (type === "Run" && acts[i].type_of === "Ride") {
            continue;
          } else {
            debugger;
            dailyTotals[day] += parseInt(acts[i].distance);
          }
        }
      }
    });

    const maxDailyMiles = Math.max(...Object.values(dailyTotals));

    const bars = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"].map(
      (day, idx) => {
        // math to find % of container bar should fill
        const barHeight =
          maxDailyMiles === 0.05 ? 4 : 115 * (dailyTotals[day] / maxDailyMiles);
        return (
          <div
            style={{ borderBottomWidth: barHeight }}
            key={`${day}`}
            className={`bar ${day}`}
          >
            <span>{day[0].toUpperCase()}</span>
          </div>
        );
      }
    );
    return <div className="goal-chart">{bars}</div>;
  }
}

export default WeeklyChart;
