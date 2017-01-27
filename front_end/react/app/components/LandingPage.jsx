/* @flow */
import React from 'react'
import DemoPage from './pages/DemoPage.jsx'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
        this.login = this.login.bind(this)
        this.state = {
            loginView: 0
        }
    }

    render() {
        return (
            <div>
                <video style={videoStyle} autoPlay loop muted
                       src="https://d3hjue7omxs01q.cloudfront.net/Video/homepage/background-header-v1.mp4"
                       type="video/mp4"/>
                <pageFront style={topStyle}>
                    <logo style={logoStyle} onClick={() => this.setState({loginView:0})}>
                        <img style={{height:40, width:45, marginRight: 5}} src="happychainWhite.png" />
                        <titties style={{top: -5}}>HappyChain</titties>
                    </logo>
                    <tabs style={tabsStyle}>
                        <docs style={tabButtonStyle}>Docs</docs>
                        <signin style={tabButtonStyle} onClick={this.login}>Sign In</signin>
                    </tabs>


                    <SignupLogic
                        loginView={this.state.loginView}
                        login={this.login}
                        signupButton={this.signup}
                        submitSignupData={this.submitSignupData} />

                </pageFront>
            </div>
        )
    }

    signup() {
        this.setState({loginView: 2})
    }

    login() {
        this.setState({loginView: 1})
    }

    submitSignupData(formData) {
        //TODO: Jquery to submit signup data
        console.log('submitSignupData')
        console.log(formData)
    }

}

function SignupLogic(props) {
    if (props.loginView === 0) {
        return (
            <LandingPage
                signup={props.signupButton} />
        )
    } else {
        return (
            <LandingPage
                signup={props.signupButton} />
        )
    }
}

let videoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    alignSelf: 'stretch'
}
let topStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    color: 'white',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    fontFamily: 'sans-serif'
}
let logoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
    fontSize: 40,
    cursor: 'pointer'
}
let tabsStyle = {
    position: 'absolute',
    top: 25,
    right: 25,
    margin: 10
}
let tabButtonStyle = {
    height: 22,
    width: 50,
    margin: 10,
    padding: 2,
    fontSize: 18,
    color: 'white',
    backgroundColor: 'dark-grey',
    cursor: 'pointer'
}

export default LandingPage
