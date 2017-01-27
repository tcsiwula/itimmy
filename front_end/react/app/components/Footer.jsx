import React from 'react'
import {Link} from 'react-router';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <footer style={footerStyle}>
                    Happy footer
                    {/* {this.props.footerChildren} */}
                </footer>
            </div>
        );
    }
}

let footerStyle = {
    display: 'flex',
    minHeight: '10vh',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    alignItems: 'centered',
    fontFamily: 'Raleway',
    color: 'white',
    background: 'black',
    fontSize: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    margin: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
}
