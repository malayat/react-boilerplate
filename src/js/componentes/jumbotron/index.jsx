import React from 'react'

export default class Jumbotron extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <p>This is a simple jumbotron-style component built with ReactJS</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    )
    }
}
