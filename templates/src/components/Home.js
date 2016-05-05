import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.title}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Home)