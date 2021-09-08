import React from 'react'

const WatchlistComponent = (props) => {
  return (
    <div class="social-btn">
      <button style = {{ background : "#691b25"}} onClick = {props.handleClick}>
        <i class="fas fa-play"></i> {props.heading}
      </button>

    </div>
  )

}
export default WatchlistComponent;
