import React, { Component } from 'react'
import Welcome from './shared/Welcome';
import '../style/register.css'


export default class Register_two extends Component {
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
                                    <label htmlFor="identificacion">Identificación</label>
                                    <input type="number" placeholder="Lorem ipsum" />
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="number" placeholder="3155555555"/>
                                </div>  
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="gender">Género</label>
                                    <select name="gender" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="nombre">Estado Civil</label>
                                    <select name="state" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="departamento">Departamento</label>
                                    <select name="apartment" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>
                                </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="city">Ciudad</label>
                                    <select name="city" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>                                    </div> 
                                <div className="login-field col-md-6 form-group">
                                    <label htmlFor="neighboard">Barrio</label>
                                    <select name="neighboard" id="">
                                    <option value="">Lorem ipsum</option>    
                                    </select>                                    
                                </div>  
                                <div className="login-field col-md-6 form-group ">
                                    <label htmlFor="address">Direccción</label>
                                    <input type="string" placeholder="Cra 00 #00-00"/>
                                </div>
                                <div className="checkbox-register col-12">
                                    <input type="checkbox" required/>
                                    <p>Autorizo tratamiento de datos</p>
                                </div>
                            </div>                 
                        </form> 
                        <Link to='/register_three'>
                            <img src={require('../icons/siguieteboton.png')} alt="next"/>
                        </Link>
                    </div>     
                </div>
            </div>
        </div>
        )
    }
}
