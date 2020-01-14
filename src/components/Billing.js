import React, { Component } from 'react';
import Profileinfo from '../components/shared/Profileinfo'
import Sidebar from '../components/shared/Sidebar'
import { Link } from 'react-router-dom'
import '../style/billing.css'

export default class Billing extends Component {
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
                            <ul>
                                <li>
                                    <h2>Registrar factura</h2>             
                                </li>
                            </ul>
                            <form className="form-billing">
                                        <div className="form-row">
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="name">Nombre de cliente</label>
                                                <input type="text" placeholder="Lorem ipsum" />
                                            </div> 
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="number_billing">Nro de factura</label>
                                                <input type="number" placeholder="Lorem ipsum" />
                                            </div>  
                                            <div className="billing-field col-md-6   form-group ">
                                                <label htmlFor="mall">Centro comercial</label>
                                                <input type="text" placeholder="Lorem ipsum" />
                                            </div> 
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="amount_billing">Monto de la factura</label>
                                                <input type="number" placeholder="Lorem ipsum" />
                                            </div> 
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="type_pet">Tipo de mascota</label>
                                                <select name="type_pet" id="">
                                                    <option value="">Lorem ipsum</option>    
                                                </select>
                                            </div> 
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="occupation">Ocupación</label>
                                                <select name="occupation" id="">
                                                    <option value="">Lorem ipsum</option>    
                                                </select> 
                                            </div> 
                                            <div className="billing-field billing-field-netword col-12 form-group">
                                                <select name="social_netword" id="">
                                                    <option value="">¿Cómo te enteraste de nuestro evento?</option>    
                                                </select>               
                                            </div>  
                                            <div className="container-files">
                                                <div className="saved-gallery col-5">
                                                    <div className="saved-gallery-img">
                                                        <img src={require('../icons/gallery.png')} alt=""/>
                                                    </div>
                                                    <div className="saved-gallery-file">
                                                        <span>
                                                        Seleccionar un archivo de la galería
                                                        </span>
                                                        <div className="saved-gallery-file-input">
                                                            <p>Subir factura <img src={require('../icons/arrow_right.png')}alt=""/></p>
                                                            <input type="file" className="saved-gallery-file-input-btn"  onChange={this.fileSelectedHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="saved-photo col-5">
                                                    <div className="saved-photo-img">
                                                        <img src={require('../icons/camicon.png')} alt=""/>
                                                    </div>
                                                    <div className="saved-photo-file">
                                                        <span>
                                                        Seleccionar un archivo de la galería
                                                        </span>
                                                        <div className="saved-photo-file-input">
                                                            <p>Tomar foto <img src={require('../icons/arrow_right.png')}alt=""/></p>
                                                            <input type="file" className="saved-photo-file-input-btn"onChange={this.fileSelectedHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                 
                                    </form> 
                        </div>
                        <Link to='/billing_two' className="btn-link-billing">
                                <button type="button" className="btn btn-billing-next">Registrar<img src={require('../icons/211607-24.png')} alt="siguiente"/></button>
                        </Link>
                    </div>  
                    <Sidebar/>
                </div>
            </div>
        </div>
        )
    }
}
