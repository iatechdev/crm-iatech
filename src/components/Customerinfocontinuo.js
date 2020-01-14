import React, { Component } from 'react'
import Profileinfo from '../components/shared/Profileinfo'
import Sidebar from '../components/shared/Sidebar'
import { Link } from 'react-router-dom'
import '../style/customerinfo.css'

export default class Customerinfocontinuo extends Component {
    render() {
        return (
            <div className="container">
            <div className="row row-container">
                <div className="col-container">
                    <Profileinfo/>
                    <div className="col-8 customerinfo-container-more">
                        <div className="customerinfo-profile">
                        <img src={require('../icons/perfil.png')} alt=""/>
                            <h2>Perfil</h2>
                        </div>
                        <div className="customerinfo-date">
                            <ul>
                                <li>
                                    <h2>Más Informacíon</h2>
                                        <div className="personal-information-more">
                                            <div className="more-information-item">
                                                <h3>Fecha de nacimiento</h3>
                                                <p>18/03/1988</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Profesión</h3>
                                                <p>Ingeniero de sistemas</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Medio de transporte</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Mascota</h3>
                                                <p>Ninguna</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Ocupación</h3>
                                                <p>Desarrollador de software</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Tipo de mascota</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Otra profesión</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Red social</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Centro comercial</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                            <div className="more-information-item">
                                                <h3>Asignado a</h3>
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                
                        <Link to='/billing' className="btn-link-more">
                            <button type="button" className="btn btn-customerinfo-more">Guardar</button>
                        </Link>
                    </div>  
                    <Sidebar/>
                </div>
            </div>
     
        </div>
        )
    }
}
