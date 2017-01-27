import React from 'react'
import {Link} from 'react-router';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <body style={bodyStyle}>
                {this.props.bodyChildren}
            </body>
            </div>
        );
    }
}

let bodyStyle = {
    display: 'flex',
    flex: '100vh',
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textDecoration: 'none',
    alignItems: 'centered',
    display: 'inline-block',
    fontFamily: 'Raleway',
    justifyContent: 'space-around',
    color: 'black',
    backgroundColor: 'gray',
    fontSize: 20,
    position: 'fixed',
    top: 40,
    bottom: 300,
    left: 0,
    width: '100%',
    height: '85%',
    margin: 0,
    marginBottom: -142
}
