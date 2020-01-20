import React from "react";
import "../../style/modal.css";

export default class EditProfile extends React.Component {
    render() {
        if (this.props.show) {
          return null;
        }
        return (
            <div className="EditOne">
                <div className="EditTwo">
                    <div className="EditThree">
                        <div  className="EditThree_one">
                            <div className="btn btn-close" onClick={this.props.onClose}>
                                <img src={require('../../icons/close1.png')}  alt=""/>
                            </div>
                        </div>
                        <div className="EditThree_two">
                            <div className="EditThree_two_item">
                                <label htmlFor="">Nombre</label>
                                <input type="text" placeholder="Karen Lorena Ochoa Pineda"/>
                            </div>
                            <div className="EditThree_two_item">
                                <label htmlFor="">Identificación</label>
                                <input type="number" placeholder="1140868529"/>
                            </div>
                            <div className="EditThree_two_item">
                                <label htmlFor="">Celular</label>
                                <input type="number" placeholder="3123452671"/>
                            </div>
                            <button><img src={require('../../icons/guardar.png')}  alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>

        );
      }
  }
