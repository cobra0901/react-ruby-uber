import React from "react";
import { Chart } from "react-google-charts";

class ElevationGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          type: "string",
          label: "Sample"
        },
        {
          type: "number",
          label: "elevation (ft)"
        }
      ],
      options: {
        height: 175,
        width: 900,
        legend: "none",
        titleY: "Elevation (ft)"
      }
    };
  }

  componentDidMount() {
    this.elevator = new google.maps.ElevationService();
    const path = new google.maps.geometry.encoding.decodePath(
      this.props.polyline
    );

    let that = this;

    this.elevator.getElevationAlongPath(
      {
        path,
        samples: 256
      },
      elevations => that.configData(elevations)
    );
  }

  configData(elevations) {
    const rows = [];
    for (var i = 0; i < elevations.length; i++) {
      rows.push(["", Math.round(elevations[i].elevation * 3.28)]);
    }
    this.setState({ rows });
  }

  render() {
    if (this.state.rows) {
      return (
        <div className="chart-cont">
          <Chart
            chartType="ColumnChart"
            rows={this.state.rows}
            columns={this.state.columns}
            options={this.state.options}
            graph_id="ColumnChart"
            width="100%"
            height="400px"
          />
        </div>
      );
    }
    return null;
  }
}

export default ElevationGraph;
