import React, { Component } from 'react';
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
        console.log(props)
        super(props);
        const id = JSON.parse(localStorage.getItem('response'))
        console.log(id)
        this.state = {
            id_user: id.id_user,
            name: id.name_cliente,
            mall_id:id.ia_mall_id_c,
            data: {},
            stores: [],
            store_name: '',
            store_id:'',
            amount_billing: '',
            billing_number: '',
            sorteos: [],
            sorteo_name: '',
            sorteo_id: '',
            image: null,
            showCamera: false,
            dataUri: '',
            error: false,

        }
        this.handleOnFileChange = this.handleOnFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    onInputChange = (eventObject) => {
        this.setState({
          [eventObject.target.name]: eventObject.target.value
        });
      }

      handleOnFileChange = (e) => {
        this.setState({
            image: e.target.files[0] 
        })
    }

    async componentDidMount() {
        //e.preventDefault();
        const typeMall = await axios.get('https://master.iatech.com.co:4000/api/billings/rafflemallstate');
        console.log(typeMall.data)
        this.setState({
            sorteos: typeMall.data.responde,
            // mall_name: typeMall.responde.mall[0].name,
            // mall_id: typeMall.data.mall[0].id
        });

        const store= await axios.get(`https://master.iatech.com.co:4000/api/billings/store`);
        console.log(store.data)   
        this.setState({
            stores: store.data.responde,
        }); 
    }




    handleSubmit = () => {
        // e.preventDefault();
        if (this.state.billing_number === "" || this.state.amount_billing === "" || this.state.mall_id === "" || this.state.sorteo_name === "" || this.state.store_name === "" || this.state.image === "") {
            this.setState({
                error: true,
            })
        } else {
            const formData = new FormData();
            formData.append('id_user', this.state.id_user);
            formData.append('billing_number', this.state.billing_number);
            formData.append('amount_billing', this.state.amount_billing);
            formData.append('mall_id', this.state.mall_id);
            formData.append('sorteo_id', this.state.sorteo_name);
            formData.append('store_id', this.state.store_name);
            formData.append('image',this.state.image ); 
              axios({
                url: 'https://master.iatech.com.co:4000/api/billings/billing_register',
                method: 'POST',
                data: formData,
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data',
                },
              }).then((response) => {
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


    render() {
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
                                    <form className="form-billing">
                                        <div className="form-row">
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="name">Nombre de cliente</label>
                                                <input type="text" name="name_cliente" value={this.state.name || ''} onChange={this.onInputChange} placeholder="Lorem ipsum" />
                                            </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label htmlFor="number_billing">Nro de factura</label>
                                                <input type="text" name="billing_number" value={this.state.value} onChange={this.onInputChange} placeholder="Nro de factura" />
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null}

                                            </div>
                                            <div className="billing-field col-md-6 form-group ">
                                                <label htmlFor="amount_billing">Monto de la factura</label>
                                                <input type="number" name="amount_billing" value={this.state.value} onChangeCapture={this.onInputChange} placeholder="Monto de la factura" />
                                                {this.state.error ? <div className="error-data"> Campo Obligatorio</div> : null}
                                            </div>
                                            <div className="billing-field col-md-6 form-group">
                                                <label>Almacen</label>
                                                <select name="store_name" value={this.state.value} onChange={this.onInputChange} >
                                                <option value=''>-</option>
                                                    {this.state.stores.map(store_name =>
                                                        <option key={store_name.name} value={store_name.id}>
                                                            {store_name.name.substr(0, 20)}
                                                        </option>)
                                                    }
                                                </select>
                                                {this.state.error ? <div className="error-data"> campo obligatorio</div> : null}
                                            </div>
                                            <div className="billing-field col-md-12 form-group">
                                                <label htmlFor="occupation">Sorteo</label>
                                                <select name="sorteo_name" className="w-98" value={this.state.value} onChange={this.onInputChange} >
                                                <option value=''>-</option>
                                                    {this.state.sorteos.map(sorteo_name =>
                                                        <option key={sorteo_name.name} value={sorteo_name.id}>
                                                            {sorteo_name.name.substr(0, 20)}
                                                        </option>
                                                    )
                                                    }
                                                </select>
                                                {this.state.error ? <div className="error-data"> campo obligatorio</div> : null}
                                            </div>
                                            <div className="container-files col-md-12">
                                                <div className="saved-gallery col-xs-12 col-md-12">
                                                    <div className="saved-gallery-img">
                                                        <img src={require('../icons/gallery.png')} alt="" />
                                                    </div>
                                                    <div className="saved-gallery-file">
                                                        <span>
                                                            Seleccionar un archivo de la galería
                                                            </span>
                                                        <div className="saved-gallery-file-input">
                                                            <p>Subir factura <img src={require('../icons/arrow_right.png')} alt="" /></p>
                                                            <input type="file" name="image" onChange={this.handleOnFileChange} className="saved-gallery-file-input-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {this.state.error ? <div className="error-data"> campo obligatorio</div> : null}
                                                {/* <div className="saved-photo col-xs-12 col-md-5">
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
                                                </div> */}
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-billing-next" onClick={this.handleSubmit}>Registrar<img src={require('../icons/211607-24.png')} alt="siguiente" /></button>
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
