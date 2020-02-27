import React, { Component } from 'react'
import Profileinfo from './shared/Profileinfo'
import Sidebar from './shared/Sidebar'
import { Link } from 'react-router-dom'
import '../style/ticket.css'

export default class Ticket extends Component {
    render() {
        return (
            <div className="container">
            <div className="row-container">
                <div className="col-12 col-container">
                    <Profileinfo/>
                    <div className="col-xs-12 col-md-8 ticket-container">
                        <div className="ticket-profile">
                            <img src={require('../icons/tag1.png')} alt=""/>
                            <h2>Boletas</h2>
                        </div>
                        <div className="ticket-date-one">
                            <ul>
                                <li>
                                    <h2>Información de boletería</h2>
                                        <div className="general-information">
                                            <div className="general-information-item">
                                                <h3>Nombre</h3>
                                                <p>1787</p>
                                            </div>
                                            <div className="general-information-item">
                                                <h3>Almacén</h3>
                                                <p>lorem ipsum</p>
                                            </div>
                                            <div className="general-information-item general-information-item-two">
                                                <h3>Sorteo</h3>
                                                <p>TU PUEDES GANAR</p>
                                            </div>
                                            <div className="general-information-item ">
                                                <h3>Fecha emisión</h3>
                                                <p>lorem ipsum</p>
                                            </div>
                                            <div className="general-information-item general-information-item-two">
                                                <h3>Factura</h3>
                                                <p>TU PUEDES GANAR</p>
                                            </div>
                                            <div className="general-information-item">
                                                <h3>Clientes</h3>
                                                <p>lorem ipsum</p>
                                            </div>
                                            <div className="general-information-item">
                                                <h3>Descripción</h3>
                                                <p>Boleta No. 1787</p>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                        <Link to='' className="btn-link">
                            <button type="button" className="btn btn-ticket">Siguiente<img src={require('../icons/211607-24.png')} alt="siguiente"/></button>
                        </Link>
                    </div>  
                    <Sidebar/>
                </div>
            </div>
        </div>
        )
    }
}
