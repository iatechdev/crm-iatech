import React, { Component } from 'react'
import Welcome from './shared/Welcome';
import '../style/login.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
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
                        <div className="form-login">
                            <h1>Ingresar</h1>
                            <p>ingesar con tu correo o red social</p>
                            <div className="icons-reds">
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
                            <div className="login-field">
                                <label htmlFor="email">Cedúla de Ciudadania</label>
                                <input type="email" placeholder="3145668965" />
                            </div> 
                            <div className="login-field">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" placeholder="Lorem ipsum"  />
                            </div>
                            <div className="password-forget">
                                <Link to="">
                                    <p>¿Olvidó su contraseña?</p>
                                </Link>
                            </div>    
                            <div className="checkbox-login">
                                <input type="checkbox"/>
                                <p>Mantener activo</p>
                            </div>  
                            <div className="login-register">
                                <p>¿No tienes una cuenta? <span>
                                Regístrate</span> </p>
                            </div>    
                                                      
                        </div> 
                        <Link to='/register'className="btn-login">
                            <img src={require('../icons/entrarboton.png')} alt="siguiente"/>
                        </Link>
                    </div>     
                </div>
            </div>
        </div>
        )
    }
}
