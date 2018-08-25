import React from 'react'


export default class MapFooter extends React.Component {

  render() {

    return (
      <div className="map-footer">
        <div className="totals">
          <div>
            <a className="foot-value">{this.props.type}</a>
            <a className="label">Route Type</a>
          </div>
          <div>
            <a className="foot-value">{this.props.dist || 0.00} mi</a>
            <a className="label">Distance</a>
          </div>
          <div>
            <a className="foot-value">{this.props.el || 0 } ft</a>
            <a className="label">Elevation Gain</a>
          </div>
          <div>
            <a className="foot-value">{this.props.time || '0s'}</a>
            <a className="label">Est. Moving Time</a>
          </div>
        </div>
      </div>
    )
  }
}
