import React from 'react'
import {Link} from 'react-router'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <Header/>
                <Body
                  bodyChildren={this.props.children}
                />

                <Footer
                  footerChildren={this.props.children}
                />

                {/* <body>
                    Body div {this.props.children}
                </body>
                <footer>
                  Our Footer
                </footer> */}
                {/* <div style={footerStyle}>
                  <footer>
                    Our Footer
                  </footer>
                  </div> */}

            </div>
        )
    }
}
