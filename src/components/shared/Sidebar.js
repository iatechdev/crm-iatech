import React, { Component } from "react";
import "../../style/sidebar.css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-1 container-sidebar">
        <div className="container-sidebar-menu">
          <Link to="/">
            <div className="container-sidebar-logo">
              <img src={require("../../icons/logo.png")} alt="" />
            </div>
          </Link>
          <button className="btn-menu" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={require("../../icons/menuicons.png")} alt="" />
          </button>
        </div>
        
        <div className="container-sidebar-icons collapse" id="navbarToggleExternalContent">
          <Link to="/customerinfo">
            <div className="container-sidebar-item">
              <img
                src={require("../../icons/user.png")}
                alt=""
                data-toggle="tooltip"
                data-placement="right"
                title="Perfil"
              />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
          </Link>
          <Link to="/billing_two">
            <div className="container-sidebar-item">
              <img
                src={require("../../icons/register.png")}
                alt=""
                data-toggle="tooltip"
                data-placement="right"
                title="Facturas"
              />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
          </Link>
            <div className="container-sidebar-item">
              <img src={require("../../icons/anuncios.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
            <div className="container-sidebar-item">
              <img src={require("../../icons/historial.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>

            <div className="container-sidebar-item">
              <img src={require("../../icons/estadisitics.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
            <div className="container-sidebar-item">
              <img src={require("../../icons/comments.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>

            <div className="container-sidebar-item">
              <img src={require("../../icons/wallet.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
            <div className="container-sidebar-item">
              <img src={require("../../icons/checklist.png")} alt="" />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
          <Link to="/ticket">
            <div className="container-sidebar-item">
              <img
                src={require("../../icons/tag.png")}
                alt=""
                data-toggle="tooltip"
                data-placement="right"
                title="Boletas"
              />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
          </Link>
          <Link to="/">
            <div className="container-sidebar-item">
              <img
                src={require("../../icons/logout.png")}
                alt=""
                data-toggle="tooltip"
                data-placement="right"
                title="Cerrar sesión"
              />
            </div>
            <div className="container-sidebar-item-circle">
              <img src={require("../../icons/circle.png")} alt="" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
