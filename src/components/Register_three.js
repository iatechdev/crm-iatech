import React, { Component } from 'react';
import Welcome from './shared/Welcome';
import '../style/register.css';

export default class Register_three extends Component {
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
                                    <label htmlFor="Fecha">Fecha de nacimiento</label>
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="profession">Profesión</label>
                                    <select name="profession" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div>  
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="conveyance">Medio de transporte</label>
                                    <select name="conveyance" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="pet">Mascota</label>
                                    <select name="pet" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="type_pet">Tipo de mascota</label>
                                    <select name="type_pet" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="occupation">Ocupación</label>
                                    <select name="occupation" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>                                    </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="social_netword">Red social</label>
                                    <select name="social_netword" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>                                    </div>  
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="mall">Centro comercial</label>
                                    <select name="mall" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>  
                                </div>
                                <div className="checkbox-register col-12">
                                    <input type="checkbox" required/>
                                    <p>Acepto  <span>
                                    términos y condiciones</span> </p>
                                </div>
                            </div>                 
                        </form> 
                        <Link to='/customerinfo'>
                            <img src={require('../icons/entrarboton.png')} alt="next"/>
                        </Link>
                    </div>     
                </div>
            </div>
        </div>
        )
    }
}
