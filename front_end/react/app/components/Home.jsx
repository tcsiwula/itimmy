import React from 'react'
import {Link} from 'react-router';

export default class Home extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
        return (
            <div>
              <p>Welcome to your <h1>Dashboard</h1>.</p>
            </div>
        );
    }
}
