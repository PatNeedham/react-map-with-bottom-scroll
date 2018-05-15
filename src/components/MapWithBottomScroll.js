import React, {Component} from 'react'
import PropTypes from "prop-types"

class MapWithBottomScroll extends Component {
  render() {
    return (
      <div>
        <p>Map</p>
      </div>
    )
  }
}

MapWithBottomScroll.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  })),
  gMapsAPIKey: PropTypes.string.isRequired
}

export default MapWithBottomScroll