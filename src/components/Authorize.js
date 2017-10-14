/*
    author: Alexander Zolotov
*/

import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'

class Authorize extends React.Component {
  constructor(props) {
    super(props);
    console.log('Authorize');
    this.redirectRequired = false;
  }

  componentWillMount () {
      console.log("Authorize componentWillMount: ");
      console.dir(this.props);
      
    const search = this.props.location.search;
    const params = new URLSearchParams(search);

    let query = {
        linkedInID: '',
        facebookID: ''
    };

    query.linkedInID = params.get('linkedInID');
    query.facebookID = params.get('facebookID');

    if (query.linkedInID) {
        this.props.onAuthorizeLinkedIn(query.linkedInID);
    }
    else if(query.facebookID) {
        this.props.onAuthorizeFaceBook(query.facebookID);
    }

    this.redirectRequired = true;
  }

  render() {
    console.log("render: ");
    let RedirectTo = null;
    
    if (this.redirectRequired) {
        this.redirectRequired = false;

        RedirectTo = <Redirect to="/" push />;
    }

    return RedirectTo;
  }

}

export default Authorize;