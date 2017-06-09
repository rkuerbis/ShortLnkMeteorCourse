//AddLink

import React from 'react';
import Modal from 'react-modal';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';


import { browserHistory } from 'react-router';


export default class AddLink extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        url: "http://www.",
        isOpen: false,
        error: ''
      };
    }

    onSubmit(e) {
      const {url} = this.state;
      var alreadyThere = 0;
      var links = Links.find().fetch();
      console.log(`alreadyThere: false = ${alreadyThere}`);
      console.log(`links = ${links}`);

      e.preventDefault();
        // Keeps page from updating or openning new page

      // let emaila = e.target.email.value;
      // let passworda = e.target.password.value;
      //
      // let email = this.refs.email.value.trim();
      // let password = this.refs.password.value.trim();
      //
      //
    //  Accounts.createUser({email: '', password: ''}, (err) => {
    //  Accounts.createUser({email, password}, (err) => {

      // Meteor.loginWithPassword({email}, password, (err) => {
      //
      //   if (err) {
      //     this.setState({error: 'Unable to login.  Check email and password.'});
      //   } else {
      //     this.setState({error: ''});
      //
      //   }
      //
      //

        if (url) {
          console.log('url:', url);


          links.map((link) => {
            if ( url === link.url ) {
            console.log(`alreadyThere: true = ${alreadyThere}`);

            alreadyThere = 1;
            this.setState({
              error: 'URL already exists.'

            });
            }
          });
          console.log(`alreadyThere: false = ${alreadyThere}`);
          if ( alreadyThere === 0 ) {
            console.log(`alreadyThere: false = ${alreadyThere}`);
            Meteor.call('links.insert', url, (err, res) => {
              if ( !err ) {

                this.handleModalClose();


              } else {
                this.setState({
                  error: err.reason

                });

              }
            });
          }
          //Links.insert({ url, userId: Meteor.userId() });
          //this.refs.url.value = '';
        }

        this.setState({

          });


  //      console.log( 'Login callback', err );

        };


  onChange(e) {
    this.setState({
      url: e.target.value

    });

  }

  handleModalClose() {
    this.setState({
      isOpen: false,
      url: 'http://www.',
      error: ''
    });
  }

  render() {

    return (
      <div>

        <button className='button' onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLable="AddLink"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className='boxedview__box'
          overlayClassName='boxedview boxedview--modal'>

          <h1>Add Link</h1>
          {this.state.error ? <p>Error:  {this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} className='boxedview__form'>
            <input
               type="text"
               placeholder="URL  http://www.google.com"
               ref='url'
               value={this.state.url}
               onChange={this.onChange.bind(this)}
            />
            <button className='button'>Add Link</button>
          </form>

          <button className='button button--secondary' onClick={this.handleModalClose.bind(this)}>Cancel</button>

        </Modal>


      </div>


    );


  };

};


AddLink.propTypes = {
//title: React.PropTypes.string.isRequired

//  score: React.PropTypes.number.isRequired


};
