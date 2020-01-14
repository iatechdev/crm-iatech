import React, { Component } from 'react'
import Welcome from './shared/Welcome';
import '../style/register.css';

export default class Register extends Component {
    render() {
        return (
            <div className="container">
            <div className="row-container">
                <div className="col-container">
                    <Welcome/>
                    <div className="col-8 login-container">
                        <div className="register-login">
                            <button><h2>Ingresar</h2></button>
                            <button><h2>Register</h2></button>
                        </div>
                        <form className="form-login">
                            <div className="form-row">
                                <h1>Registrarse</h1>
                                <p>Regístrate con tu correo o red social</p>
                                <div className="icons-reds form-group">
                                    <a href={`#`}>
                                        <img src={require('../icons/google.png')} alt=""/>
                                    </a>
                                    <a href={`#`}>
                                        <img src={require('../icons/facebook1.png')} alt=""/>
                                    </a>
                                    <a href={`#`}>
                                        <img src={require('../icons/twitter1.png')} alt=""/>
                                    </a>
                                </div>
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" placeholder="Lorem ipsum"  />
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input type="text" placeholder="Lorem ipsum"  />
                                </div> 
                                <div className="login-field col-12 form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" placeholder="email@informacion.com"  />
                                </div>  
                                <div className="login-field col-12 form-group ">
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" placeholder="Lorem ipsum"/>
                                </div> 
                            </div>                 
                        </form> 
                        <a href={'/register_two'} className="btn-login">
                            <img src={require('../icons/siguieteboton.png')} alt="next"/>
                        </a>
                    </div>     
                </div>
            </div>
        </div>
        )
    }
}
