import React from 'react'

export default class MapSearch extends React.Component {

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.initSearchBox()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.map && nextProps.map) {
      nextProps.map.addListener('bounds_changed', () => {
        this.search.setBounds(this.props.map.getBounds());
    })}
  }

  initSearchBox() {

    this.search = new google.maps.places.SearchBox(this.input)
    this.search.addListener('places_changed', () => {
      const places = this.search.getPlaces()

      places[0] ? this.props.map.panTo(places[0].geometry.location)
      : alert(this.input.value + ' is not a valid location my dude.')
    })
  }

  handleClick(e) {
    e.preventDefault()
    const pos = new google.maps.LatLng(this.input.value)
    this.props.map.panTo(pos)
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-div">
          <input className="search"
             type="text" placeholder="Enter a Location"
             ref={(input) => this.input = input }/>
          <button
            onClick={ this.handleClick }
          ><i className="material-icons">search</i></button>
        </div>
      </div>
      )
    }
  }
