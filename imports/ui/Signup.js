
import React from 'react';

import { Accounts } from 'meteor/accounts-base';

import { Link } from 'react-router';
import TitleBar from './../ui/TitleBar';


export default class Signup extends React.Component {

  constructor(props) {
    super(props);  //Ensures props are added into function
    this.state = {

      titlevar: 'Short Lnk App',
      subTitleVar: 'Created by:  Ralph Kuerbis',      
      error: ''
    };
  }

onSubmit(e) {
  e.preventDefault();
    // Keeps page from updating or openning new page
  let emaila = e.target.email.value;
  let passworda = e.target.password.value;

  let email = this.refs.email.value.trim();
  let password = this.refs.password.value.trim();

  if (password.length < 9) {
    return this.setState({error: 'Password must be more than 8 characters long'});
  }

//  Accounts.createUser({email: '', password: ''}, (err) => {
  Accounts.createUser({email, password}, (err) => {
    if (err) {
      this.setState({error: err.reason});
    } else {
      this.setState({error: ''});

    }

  console.log('Signup callback', err);

  });

  // this.setState({
  //   error: 'Something went wrong.'
  // });

  console.log(`email: ${emaila}  password: ${passworda}`)

}

  // increment() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }
  //
  // decrement() {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // }


  render() {

    let titlevar = this.state.titlevar; //'Short Lnk App';
    let subTitleVar = this.state.subTitleVar; //'Created by:  Ralph Kuerbis';

    console.log('Titles: ', titlevar, subTitleVar);

    return (

      <div>
        <TitleBar title={this.state.titlevar} subtitle={this.state.subTitleVar}>


        </TitleBar>



        <div className='boxedview'>
          <div className='boxedview__box'>
            <h1>Signup here:</h1>

            {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form onSubmit={this.onSubmit.bind(this)} noValidate className='boxed-view__form'>

              <input type='email' ref='email' name='email' placeholder='Email'/>
              <input type='password' ref='password' name='password' placeholder='Password'/>
              <button className='button'>Create Account</button>
            </form>

            <p>Goto login form from here:</p>
            <Link to="/">Login to an account?</Link>


          </div>
        </div>
      </div>
    );
  }
};


Signup.propTypes = {
//  score: React.PropTypes.number.isRequired
};
