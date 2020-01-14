import React, { Component } from 'react'
import '../../style/welcome.css'

export default class Welcome extends Component {
    render() {
        return (
            <div className="col-4 container-welcome">
            <div className="back2">
                <div className="row-icons-logo">
                    <img src={require('../../icons/logo.png')} alt=""/>
                </div>
                <div className="row row-title-welcome">
                    <h1>Bienvenido</h1>
                    <hr/>
                    <p>Ingresa para disfrutar Nuestros beneficios</p>
                    <div className="social-networks" >
                        <a href="https://www.facebook.com/">
                        <img src={require('../../icons/facebook.png')} alt=""/>     
                        </a>
                        <a href="https://twitter.com/">
                        <img src={require('../../icons/twitter.png')} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/">
                        <img src={require('../../icons/linkedin.png')} alt=""/>           
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

