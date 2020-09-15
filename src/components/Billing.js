import React, { Component} from 'react';
import Profileinfo from '../components/shared/Profileinfo';
import Sidebar from '../components/shared/Sidebar';
import { Link } from 'react-router-dom';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';
import equal from 'deep-equal';

import '../style/billing.css'

export default class Billing extends Component {
    constructor(props) {
        super(props);
        const id = JSON.parse(localStorage.getItem('response'))
        console.log(id.id_user)
        this.state = {
            id_user:id.id_user,
            data:{},
            mall: [],
            mall_name:'',
            amount_billing:'',
            billing_number:'',
            mall_id: '',
            sorteos: [],
            sorteo_name:'',
            sorteo_id:'',
            event_information:'',
            showCamera: false,
            dataUri:'',
            error: false,
           
        }
        // this.sorteoRequest = this.sorteoRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchId = (data, name) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                return data[i].id
            }
        }
    }
    searchId_sorteo = (data, name) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                return data[i].id
            }
        }
    }

    onInputChange = (eventObject) => {
        const mall_id = this.searchId(this.state.mall , eventObject.target.value)
        console.log(mall_id)
        this.setState({
            mall_id: mall_id,
            [eventObject.target.name]: eventObject.target.value
        }, );
    }

    async componentDidMount() {
        //e.preventDefault();
        const typeMall = await axios.get('https://master.iatech.com.co:4000/api/billings/mall');
        console.log(typeMall.data)
        this.setState({
            data: JSON.parse(localStorage.getItem('response')),
            mall: typeMall.data.mall,
            mall_name: typeMall.data.mall[0].name,
            mall_id: typeMall.data.mall[0].id
        });

            await axios.get(`https://master.iatech.com.co:4000/api/billings/rafflemall?id_mall=${this.state.mall_id}`).then((response) => {
                    if (response.data.responde && response.data.responde.length >= 1) {
                        this.setState({
                            sorteos: response.data.responde,
                            sorteo_name: response.data.responde[0].name,
                            sorteo_id: response.data.responde[0].id   
                        }) 
                    }
        
                }).catch((error) => {
                    console.log(error);
                });
    }
    
    onSorteoChange = (eventObject) => {
        const sorteo_id = this.searchId_sorteo(this.state.sorteos , eventObject.target.value)
        console.log(eventObject.target.value)
        this.setState({
            sorteo_id: sorteo_id,
            sorteo_name: eventObject.target.value
        });
    }

    OnEventChange = (eventObject) => {
        this.setState({
            event_information: eventObject.target.value
        })

    }

   handleSubmit = e => {
    e.preventDefault();
        if( this.state.billing_number === "" || this.state.amount_billing === "" || this.state.mall_id === "" || this.state.sorteo_id === "" || this.state.event_information === "")
        {
           this.setState({
               error: true, 
           })
        } else {
            console.log(this.state)
           axios.post(`https://master.iatech.com.co:4000/api/billings/billing_register`,
            {
                id_user: this.state.id_user,
                billing_number: this.state.billing_number,
                amount_billing: this.state.amount_billing,
                mall_id: this.state.mall[0].id,
                sorteo_id: this.state.sorteo_id,
                event_information: this.state.event_information 
            })
            .then((response) => {
                console.log(response)
                this.props.history.push('/billing_two')
            }).catch((error) => {
              console.log(error);
            });
        }
       
      }

    // handleTakePhotoAnimationDone = (dataUri) =>{
    //     // Do stuff with the photo...
    //     this.setState(
    //         {dataUri, showCamera:false}
    //     )

        
    //   }

    // renderCamera= () =>{
    //     return (
    //         <Camera
    //     onTakePhotoAnimationDone = { (dataUri) => { this.handleTakePhotoAnimationDone(dataUri); } }
    //     idealFacingMode = {FACING_MODES.ENVIRONMENT}
    //     idealResolution = {{width: 640, height: 480}}
    //     imageType = {IMAGE_TYPES.JPG}
    //     imageCompression = {0.97}
    //     isMaxResolution = {true}
    //     isImageMirror = {true}
    //     isSilentMode = {false}
    //     isDisplayStartCameraError = {true}
    //     isFullscreen = {true}
    //     sizeFactor = {1}

    //   />
    //     )
    // }

    
    render(){
        // const { data,showCamera} = this.state;
        return (
            <div>
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
                                    <form className="form-billing" >
                                        <div className="form-row">
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="name">Nombre de cliente</label>
                                                <input type="text" name="name_cliente" value={this.state.data.name_cliente || ''} onChange={this.onInputChange} placeholder="Lorem ipsum" />
                                            </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="number_billing">Nro de factura</label>
                                                <input type="number" name="billing_number" value={this.state.value} onChange={this.onInputChange} placeholder="Nro de factura" />
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                                   
                                        </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="mall">Centro comercial</label>
                                                <input type="text" name="mall_cliente" value={this.state.data.mall_cliente || ''} onChange={this.onInputChange} placeholder="Lorem ipsum" />
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                            </div>
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="amount_billing">Monto de la factura</label>
                                                <input type="number" name="amount_billing" value={this.state.value} onChangeCapture={this.onInputChange} placeholder="Monto de la factura" />
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                            </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label>Centro Comercial</label>
                                                <select name="mall_name" value={this.state.value} onChange={this.onInputChange} >
                                                    {this.state.mall.map(mall_name =>
                                                        <option key={mall_name.name} value={mall_name.name}>
                                                            {mall_name.name}
                                                        </option>)
                                                    }
                                                </select>
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                            </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="occupation">Sorteo</label>
                                                <select name="sorteo_name" value={this.state.value} onChange={this.onSorteoChange} >
                                                    {this.state.sorteos.map(sorteo_name =>
                                                        <option key={sorteo_name.name} value={sorteo_name.name}>
                                                        {sorteo_name.name}     
                                                        </option>
                                                    )
                                                    }
                                                </select>
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                            </div>
                                            <div className="billing-field billing-field-netword col-12 form-group">
                                            <label htmlFor="event_information">¿Cómo te enteraste de nuestro evento?</label>
                                                <select name="event_information" onChange={this.OnEventChange} id="" placeholder="">
                                                <option value="">-</option>
                                                    <option value={"La marca me lo comunicó"}>La marca me lo comunicó</option>
                                                    <option value={"radio"}>Radio</option>
                                                    <option value={"volante"}>Volante</option>
                                                    <option value={"registro_factura"}>Registro Factura</option>
                                                    <option value={"e_mail"}>E-mail</option>
    
                                                </select>
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null }
                                            </div>
                                            {/* <div className="container-files">
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
                                                            <button onClick={()=> this.setState({showCamera:true})}>
                                                            <p>Tomar foto <img src={require('../icons/arrow_right.png')} alt="" /></p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                            <button type="button" className="btn btn-billing-next" onClick={this.handleSubmit}>Registrar<img src={require('../icons/211607-24.png')} alt="siguiente"/></button>
                                    </form>
                                </div>
                               
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                {/* {
                    showCamera && this.renderCamera()
                } */}
            </div>
           )
    }
}
