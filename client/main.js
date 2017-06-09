import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {onAuthChange} from '../imports/routes/routes';
import {routes} from '../imports/routes/routes';
import { Session } from 'meteor/session';
import { Links } from '../imports/api/links';
import '../imports/startup/simpleschemaconfiguration.js';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// Stateless functional components
//import React from 'react';
// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>MyComponent is here! {props.name}</h1>
//     </div>
//   );
// };

Tracker.autorun(() => {
  const name = Session.get('name');

  console.log('Name: ', name);
});

Session.set('name', 'Andrew Mead');



Meteor.startup(() => {

  Session.set('showVisible', true);


  Meteor.call('links.insert', 'www.google.com');

  Meteor.call('greetUser', 'MikeClient', (err, res) => {
    console.log('GreetUser Arguments Client Side', err, res);
  });


  Meteor.call('greetUserClient', 'MikeClient', (err, res) => {
    console.log('GreetUserClient Arguments Client Side', err, res);
  });

  var aa = 'a';
  var bb = 8;

  Meteor.call('addNumbers', aa, bb, (err, res) => {
    console.log(`${aa} + ${bb} = ${cc} Arguments Client Side`, err, res);
  });




  Tracker.autorun(() => {

    ReactDOM.render(routes, document.getElementById('app'));
  });
});


//
//   Tracker.autorun(() => {
//
//     ReactDOM.render(<MyComponent name="Mike"/>, document.getElementById('app'));
//   });
// });
