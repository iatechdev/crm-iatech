import React, { Component } from 'react'
import '../../style/welcome.css'
import { Link } from "react-router-dom";


export default class Welcome extends Component {

    render() {
        return (
            <div className=" col-xs-12 col-md-4 container-welcome">
            <div className="back2">
                <div className="row-icons-logo">
                    <img src={require('../../icons/logo_AVENTURA.png')} alt=""/>
                    <div className="row-link">
                    <Link to="/">
                    <button
                    className="register-link-login"
                    >
                    <h2>Ingresar</h2>
                  </button>
                    </Link>
                    <Link to="/register">
                    <button
                    className="register-link-register"
                    >
                    <h2>Registrarse</h2>
                  </button>
                    </Link>
                </div>
                </div>
                <div className="row row-title-welcome">
                    <h1>Bienvenido</h1>
                    <hr/>
                    <p>Ingresa para disfrutar Nuestros beneficios</p>
                    <div className="social-networks" >
                        <a href="https://www.facebook.com/">
                        <img src={require('../../icons/facebook.png')} alt=""/>     
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

