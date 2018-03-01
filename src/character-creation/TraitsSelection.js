import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import {Icon} from 'react-fa'

import {getPopupParentElement} from "~/src/common/PopupUtils.js"

import "./common.css"
import "./traitsSelection.css"

class TraitsSelection extends React.Component {
    constructor(props) {
      super(props);
      this.modalDefaultStyles = {};
    }

    componentWillMount() {
      this.modalDefaultStyles = Modal.defaultStyles;

      Modal.defaultStyles.content.background = "white";
      Modal.defaultStyles.content.color = 'initial';
      Modal.defaultStyles.content["height"] = '85%';
      Modal.defaultStyles.content["width"] = '75%';
      Modal.defaultStyles.content["minWidth"] = 'initial';
      Modal.defaultStyles.content["maxWidth"] = 'initial';
      Modal.defaultStyles.content["overflowX"] = "hidden";
      Modal.defaultStyles.content["overflowY"] = "scroll";
      Modal.defaultStyles.content["marginLeft"] = 'auto';
      Modal.defaultStyles.content["marginRight"] = 'auto';
      Modal.defaultStyles.content["left"] = '0';
      Modal.defaultStyles.content["right"] = '0';
    }
      
    componentWillUnmount() {
      Modal.defaultStyles = this.modalDefaultStyles;
    }

    handleClickOutside() {
       /* () => this.handleClose();*/
    }

    handleClose() {
      this.props.onClose();
    }

    render() {
        return (
          <Modal isOpen={true} onRequestClose={() => {}} contentLabel={"Traits Selection"} 
            parentSelector={getPopupParentElement}>
            <div id="traits-selection-container">
              <Icon onClick={()=>this.handleClose()} className="character-creation-popup-close-icon" 
                name="times" aria-hidden="true"></Icon>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center" id="character-seelection-header">
                      <h3 className="text-uppercase">Select Your Traits</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
      )
    }
  }

  TraitsSelection.propTypes = {
  }
 
  export default require('react-click-outside')(TraitsSelection);