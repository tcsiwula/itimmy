import React from 'react'

function DemoPage(props) {
    return (
        <center style={centerStyle}>
            <big>The Blockchain as an API</big>
            <small>Ethereum Smart Contracts Made Easy</small>
            <signup 
            	style={signupStyle}
            	onClick={props.signup}>
            		Get your free API key
            </signup>
        

                    
 {/*  LIVE DEMO: Users can write to the blockchain with a single click
        <liveDemo style={demoStyle}>
            <feed style={demoStyle.feed}>
                feed content
            </feed>
            <demoButton style={demoStyle.button}>
                Click to write to Blockchain
            </demoButton>
        </liveDemo>
    */}

    </center>
    )
}

let centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 40
}
let signupStyle = {
    height: 100,
    width: 250,
    marginTop: 50,
    backgroundColor: 'darkorchid',
    fontSize: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
}
let demoStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'stretch',
    bottom: 50,
    height: 150,
    width: 600,
    feed: {
        flexGrow: 3,
        maxWidth: 350,
        overflow: 'auto'
    },
    button: {
        backgroundColor: 'grey',
        fontSize: 18,
        flexGrow: 1,
        maxWidth: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
}

export default DemoPage