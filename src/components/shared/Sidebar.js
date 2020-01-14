import React, { Component } from 'react'
import '../../style/sidebar.css'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <div className=" col col-1 container-sidebar">
            <Link to='/'>
                <div className="container-sidebar-logo">
                    <img src={require('../../icons/logo.png')} alt=""/>
                </div>
            </Link>
            <Link to='/customerinfo'>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/user.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to='/billing_two'>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/register.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/anuncios.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/historial.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/estadisitics.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/comments.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/wallet.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/checklist.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to='/ticket'>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/tag.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle">
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div>
            </Link>
            <Link to=''>
                <div className="container-sidebar-item">
                    <img src={require('../../icons/logout.png')} alt=""/>
                </div>
                <div className="container-sidebar-item-circle" >
                    <img src={require('../../icons/circle.png')} alt=""/>
                </div> 
            </Link>    
        </div>
        )
    }
}
