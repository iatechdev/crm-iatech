import React, { Component } from 'react'
import Profileinfo from '../components/shared/Profileinfo'
import Sidebar from '../components/shared/Sidebar'
import { Link } from 'react-router-dom'
import '../style/billing.css'

export default class Billing_two extends Component {
    render() {
        return (
        <div className="container">
            <div className="row-container">
                <div className="col-container">
                    <Profileinfo/>
                    <div className="col-8 customerinfo-billing-container">
                        <div className="billing-profile">
                            <img src={require('../icons/billing2.png')} alt=""/>
                            <h2>Facturas</h2>
                        </div>
                        <div className="customerinfo-billing">
                            <div className="add-billing">
                                <Link to="/billing">
                                    <img src={require('../icons/Agregar.png')} alt=""/>
                                </Link>
                                <h2>Agregar factura</h2>
                            </div>
                            <ul>
                                <li>
                                    <h2>Facturas registradas</h2>             
                                </li>
                            </ul>
                            <div className="list-billing">
                                <div className="list-billing-items-general">
                                    <div className="list-billing-items col-9">
                                        <img src={require('../icons/billing2.png')} alt=""/>
                                        <p>Lorem ipsum</p>
                                        <p>Nro de factura</p><p>0872</p>
                                    </div>
                                    <button className="btn col-3"><p>Ver más <img src={require('../icons/arrow_right.png')} alt=""/></p></button>                 
                                </div>
                                <div className="list-billing-items-general">
                                    <div className="list-billing-items col-9">
                                        <img src={require('../icons/billing2.png')} alt=""/>
                                        <p>Lorem ipsum</p>
                                        <p>Nro de factura</p><p>0872</p>
                                    </div>
                                    <button className="btn col-3"><p>Ver más <img src={require('../icons/arrow_right.png')} alt=""/></p></button>                 
                                </div>
                                <div className="list-billing-items-general">
                                    <div className="list-billing-items col-9">
                                        <img src={require('../icons/billing2.png')} alt=""/>
                                        <p>Lorem ipsum</p>
                                        <p>Nro de factura</p><p>0872</p>
                                    </div>
                                    <button className="btn col-3"><p>Ver más <img src={require('../icons/arrow_right.png')} alt=""/></p></button>                 
                                </div>
                                <div className="list-billing-items-general">
                                    <div className="list-billing-items col-9">
                                        <img src={require('../icons/billing2.png')} alt=""/>
                                        <p>Lorem ipsum</p>
                                        <p>Nro de factura</p><p>0872</p>
                                    </div>
                                    <button className="btn col-3"><p>Ver más <img src={require('../icons/arrow_right.png')} alt=""/></p></button>                 
                                </div>
                                <div className="list-billing-items-general">
                                    <div className="list-billing-items col-9">
                                        <img src={require('../icons/billing2.png')} alt=""/>
                                        <p>Lorem ipsum</p>
                                        <p>Nro de factura</p><p>0872</p>
                                    </div>
                                    <button className="btn col-3"><p>Ver más <img src={require('../icons/arrow_right.png')} alt=""/></p></button>                 
                                </div>
                            </div> 
                        </div>
                        <Link to='/' className="btn-link-billing2">
                                <button type="submit" className="btn btn-billing2-next"><img src={require('../icons/botonregistrar.png')} alt="siguiente"/></button>
                        </Link>
                    </div>  
                    <Sidebar/>
                </div>
            </div>
        </div>
        )
    }
}
