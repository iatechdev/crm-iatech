import React, { Component} from 'react';
import Profileinfo from '../components/shared/Profileinfo';
import Sidebar from '../components/shared/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import equal from 'deep-equal';
import '../style/billing.css'

export default class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mall: [],
            mall_name:'',
            data: {},
            id_mall: '',
            sorteos: [],
            sorteos_name:''
            
        }
    }

    onInputChange = (eventObject) => {
        const id_mall = this.searchId(this.state.mall,eventObject.target.value)
        this.setState({
            id_mall,
            [eventObject.target.name]: eventObject.target.value
        });
    }

    async componentDidMount() {
        //e.preventDefault();
        const typeMall = await axios.get('http://master.iatech.com.co:4000/api/billings/mall');
        //console.log(typeMall)
        this.setState({
            data: JSON.parse(localStorage.getItem('response')),
            mall: typeMall.data.mall,
            mall_name: typeMall.data.mall[0].name,
            id_mall: typeMall.data.mall[0].id
        });
    }
    

    searchId = (data, name) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                return data[i].id
            }
        }
    }

    async componentDidUpdate(prevState) {
        if (prevState.mall_name !== this.state.mall_name) {
            const typestore = await axios.get(`http://master.iatech.com.co:4000/api/billings/rafflemall?id_mall=${this.state.id_mall}`);
            //console.log(typestore);

            if (typestore.data.responde && !!typestore.data.responde.length) {
                //console.log(this.state.sorteos)

                this.setState({
                    sorteos: typestore.data.responde,
                    sorteo_name: typestore.data.responde[0].name  
                }) 
            }
        }

    }


    render() {
        const { data } = this.state;
        //console.log(data);
        return (
            <div className="container">
                <div className="row-container">
                    <div className="col-12 col-container">
                        <Profileinfo />
                        <div className="col-xs-12 col-md-8 customerinfo-billing-container">
                            <div className="billing-profile">
                                <img src={require('../icons/billing2.png')} alt="" />
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
                                            <input type="text" name="name_cliente" value={this.state.data.name_cliente} onChange={this.onInputChange} placeholder="Lorem ipsum" />
                                        </div>
                                        <div className="billing-field col-md-6 form-group">
                                            <label htmlFor="number_billing">Nro de factura</label>
                                            <input type="number" placeholder="Nro de factura" />
                                        </div>
                                        <div className="billing-field col-md-6 form-group">
                                            <label htmlFor="mall">Centro comercial</label>
                                            <input type="text" name="mall_cliente" value={this.state.data.mall_cliente} onChange={this.onInputChange} placeholder="Lorem ipsum" />
                                        </div>
                                        <div className="billing-field col-md-6 form-group ">
                                            <label htmlFor="amount_billing">Monto de la factura</label>
                                            <input type="number" placeholder="Monto de la factura" />
                                        </div>
                                        <div className="billing-field col-md-6 form-group">
                                            <label>Centro Comercial</label>
                                            <select name="mall_name "value={this.state.value} onChange={this.onInputChange} >
                                                {this.state.mall.map(mall_name =>
                                                    <option key={mall_name.name} value={mall_name.name}>
                                                        {mall_name.name}
                                                    </option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="billing-field col-md-6 form-group">
                                            <label htmlFor="occupation">Sorteo</label>
                                            <select name="sorteos_name" value={this.state.value} onChange={this.onInputChange} >
                                                {this.state.sorteos.map(sorteos_name =>
                                                    <option key={sorteos_name.name} value={sorteos_name.name}>
                                                    {sorteos_name.name}     
                                                    </option>
                                                )
                                                }
                                            </select>
                                        </div>
                                        <div className="billing-field billing-field-netword col-12 form-group">
                                        <label htmlFor="occupation">¿Cómo te enteraste de nuestro evento?</label>
                                            <select name="social_netword" id="" placeholder="">
                                                <option>La marca me lo comunicó</option>
                                                <option>Radio</option>
                                                <option>Redes Sociales</option>
                                                <option>Volantes</option>
                                                <option>Mail</option>

                                            </select>
                                        </div>
                                        <div className="container-files">
                                            <div className="saved-gallery col-xs-12 col-md-5">
                                                <div className="saved-gallery-img">
                                                    <img src={require('../icons/gallery.png')} alt="" />
                                                </div>
                                                <div className="saved-gallery-file">
                                                    <span>
                                                        Seleccionar un archivo de la galería
                                                        </span>
                                                    <div className="saved-gallery-file-input">
                                                        <p>Subir factura <img src={require('../icons/arrow_right.png')} alt="" /></p>
                                                        <input type="file" className="saved-gallery-file-input-btn" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="saved-photo col-xs-12 col-md-5">
                                                <div className="saved-photo-img">
                                                    <img src={require('../icons/camicon.png')} alt="" />
                                                </div>
                                                <div className="saved-photo-file">
                                                    <span>
                                                        Seleccionar un archivo de la galería
                                                        </span>
                                                    <div className="saved-photo-file-input">
                                                        <Link to="/camera">
                                                        <p>Tomar foto <img src={require('../icons/arrow_right.png')} alt="" /></p>
                                                        </Link>
                                                        {/* <input type="file" className="saved-photo-file-input-btn" onChange={this.fileSelectedHandler} />*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <Link to='/billing_two' className="btn-link-billing">
                                <button type="button" className="btn btn-billing-next">Registrar<img src={require('../icons/211607-24.png')} alt="siguiente" /></button>
                            </Link>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
}
