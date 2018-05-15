import React, {Component} from 'react'
import PropTypes from "prop-types"

export default class MapWithBottomScroll extends Component {
  render() {
    return (
      <div>
        <p>Map</p>
      </div>
    )
  }
}

MapWithBottomScroll.propTypes = {
  data: PropTypes.array
}