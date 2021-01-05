import React from 'react'
import emojipedia from '../emojipedia.js'

class Entry extends React.Component{
  render(){
    return(
      <div className="term">
        <div className="dt">
          <span>{this.props.icon}</span>
          <span className="emoji">{this.props.name}</span>
        </div>
        <div className="dd">
          <p>{this.props.meaning}</p>
        </div>
      </div>
    )
  }
}

export default Entry