
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import { browserHistory } from 'react-router';
import LinksListFilters from './LinksListFilters';
import TitleBarLink from './../ui/TitleBarLink';


// Stateless Functional Component Replacement
export default class Link extends React.Component {

//const Link = () => {

  constructor(props) {
    super(props);  //Ensures props are added into function
    this.state = {

      titlevar: 'Short Lnk App',
      subTitleVar: 'Created by:  Ralph Kuerbis',
      error: ''
    };
  }

  render() {

    let titlevar = this.state.titlevar; //'Short Lnk App';
    let subTitleVar = this.state.subTitleVar; //'Created by:  Ralph Kuerbis';

    console.log('Titles: ', titlevar, subTitleVar);

    return (

      <div>
        <TitleBarLink title={titlevar} subtitle={subTitleVar}>


        </TitleBarLink>
        <div className='page-content'>



          <LinksListFilters/>
          <AddLink/>
          <LinksList/>

        </div>

      </div>

    );

  };
}



//
//
// export default class Link extends React.Component {
//
//
//   // onLogout() {
//   //   Accounts.logout();
//   //
//   // };
//
//
//
//   // handleSubmit(e) {
//   //   // console.log("Input Value = ", e.target.playerName, 'Player Input = ', e);
//   //   // console.log("Input Value = ", e.target.playerName.value, 'Player Input = ', e);
//   //
//   //   e.preventDefault();
//   //     // Keeps page from updating or openning new page
//   // //  return browserHistory.push('/');
//   // //  debugger;
//   //
//   // };
//
//
// //
// //   onSubmit(e) {
// //     const url = this.refs.url.value.trim();
// //     var alreadyThere = 0;
// //     var links = Links.find().fetch();
// //     console.log(`alreadyThere: false = ${alreadyThere}`);
// //     console.log(`links = ${links}`);
// //
// //     e.preventDefault();
// //       // Keeps page from updating or openning new page
// //
// //     // let emaila = e.target.email.value;
// //     // let passworda = e.target.password.value;
// //     //
// //     // let email = this.refs.email.value.trim();
// //     // let password = this.refs.password.value.trim();
// //     //
// //     //
// //   //  Accounts.createUser({email: '', password: ''}, (err) => {
// //   //  Accounts.createUser({email, password}, (err) => {
// //
// //     // Meteor.loginWithPassword({email}, password, (err) => {
// //     //
// //     //   if (err) {
// //     //     this.setState({error: 'Unable to login.  Check email and password.'});
// //     //   } else {
// //     //     this.setState({error: ''});
// //     //
// //     //   }
// //     //
// //     //
// //
// //       if (url) {
// //         console.log('url:', url);
// //
// //
// //         links.map((link) => {
// //           if ( url === link.url ) {
// //           console.log(`alreadyThere: true = ${alreadyThere}`);
// //
// //           alreadyThere = 1;
// //
// //           }
// //         });
// //         console.log(`alreadyThere: false = ${alreadyThere}`);
// //         if ( alreadyThere === 0 ) {
// //           console.log(`alreadyThere: false = ${alreadyThere}`);
// //           Meteor.call('links.insert', url);
// //         }
// //         //Links.insert({ url, userId: Meteor.userId() });
// //         this.refs.url.value = '';
// //       }
// //
// //
// //
// // //      console.log( 'Login callback', err );
// //
// //       };
//
//
//
//
//
//
//
//
//   render() {
//     return (
//
//       <div>
//         {/*
//           <p>Link component here</p>
//
//
//           <form className='form' onSubmit={this.onLogout.bind(this)}>
//             <button className='button'>Logout</button>
//           </form>
//         */}
//
//         <PrivateHeader title="Your Links"/>
//         <LinksList/>
//         <AddLink/>
//         {/*
//           <p>Add Link</p>
//           <form onSubmit={this.onSubmit.bind(this)}>
//             <input type="text" ref="url" placeholder="URL  http://www.google.com"/>
//             <button>Add Link</button>
//           </form>
//
//         */}
//
//       </div>
//
//     );
//
//   }
// };
//

Link.propTypes = {
//  PrivateHeader: React.PropTypes.string.isRequired

//  score: React.PropTypes.number.isRequired
};


//export default Link;
