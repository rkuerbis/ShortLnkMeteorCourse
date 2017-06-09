
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';

import { browserHistory } from 'react-router';


export default class PrivateHeader extends React.Component {

  onLogout() {
    Accounts.logout();

  };



  render() {
    return (

      <div>

        <p>{this.props.title}</p>

        <form className='form' onSubmit={this.onLogout.bind(this)}>
          <button className='button'>Logout</button>
        </form>

     </div>

    );

   }
};



PrivateHeader.propTypes = {
title: React.PropTypes.string.isRequired

//  score: React.PropTypes.number.isRequired


};
