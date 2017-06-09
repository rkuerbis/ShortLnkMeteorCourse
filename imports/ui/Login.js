
import React from 'react';

import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';
import TitleBar from './../ui/TitleBar';
import PrivateHeader from './PrivateHeader';


export default class Login extends React.Component {

  constructor(props) {
    super(props);  //Ensures props are added into function
    this.state = {

      titlevar: 'Short Lnk App',
      subTitleVar: 'Created by:  Ralph Kuerbis',
      error: ''
    };




  }


  //
  // componentWillMount() {
  //   console.log('Titles: ', this.state);
  //   this.setState({titlevar: 'Short Lnk App'});
  //   this.setState({subTitleVar: 'Created by:  Ralph Kuerbis'});
  //   console.log('Titles: ', this.state);
  //
  // };
  //






onSubmit(e) {
  e.preventDefault();
    // Keeps page from updating or openning new page
  let emaila = e.target.email.value;
  let passworda = e.target.password.value;

  let email = this.refs.email.value.trim();
  let password = this.refs.password.value.trim();


//  Accounts.createUser({email: '', password: ''}, (err) => {
//  Accounts.createUser({email, password}, (err) => {

  Meteor.loginWithPassword({email}, password, (err) => {

    if (err) {
      this.setState({error: 'Unable to login.  Check email and password.'});
    } else {
      this.setState({error: ''});

    }



    console.log( 'Login callback', err );
  });


  // this.setState({
  //   error: 'Something went wrong.'
  // });

  console.log(`email: ${emaila}  password: ${passworda}`)

}


  render() {



    let titlevar = this.state.titlevar; //'Short Lnk App';
    let subTitleVar = this.state.subTitleVar; //'Created by:  Ralph Kuerbis';

    console.log('Titles: ', titlevar, subTitleVar);

    return (

      <div>
        <TitleBar title={titlevar} subtitle={subTitleVar}>


        </TitleBar>


        <div className='boxedview'>
          <div className='boxedview__box'>
            <h1>Login to Short Lnk App</h1>
            <p>login form</p>

            {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form onSubmit={this.onSubmit.bind(this)} noValidate className='boxed-view__form'>

              <input type='email' ref='email' name='email' placeholder='Email'/>
              <input type='password' ref='password' name='password' placeholder='Password'/>
              <button className='button'>Sign Into Account</button>
            </form>



            <Link to="/app/signup">No account? Sign-up here:</Link>


          </div>

        </div>

      </div>
    );
  }
};


Login.propTypes = {
//  score: React.PropTypes.number.isRequired
};
