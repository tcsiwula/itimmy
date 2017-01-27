import React from 'react'
import {Link} from 'react-router';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={headerStyle}>
                <logo style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src='happychainBlack.png' style={logoStyle}/>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>HappyCha.in</Link>
                </logo>



                <rightNav style={navStyle}>
                    <Link to='/features' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}activeStyle={{ color: 'red' }}>Features</Link>
                    <Link to='/pricing' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}activeStyle={{ color: 'red' }}>Pricing</Link>
                    <Link to='/docs' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}activeStyle={{ color: 'red' }}>Docs</Link>
                    <Link to='/account' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}activeStyle={{ color: 'red' }}>Account</Link>
                </rightNav>
            </div>
        );
    }
}

{/* if css, convert to json with camel case -- no dashes */
}

let navStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}

let headerStyle = {
    fontFamily: 'Raleway',
    display: 'flex',
    backgroundColor: 'rgb(78, 195, 205)',
    fontSize: 20,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 40
}
let logoStyle = {
    top: 0,
    alignItems: 'centered',
    margin: 5,
    height: 25,
    width: 30
}
