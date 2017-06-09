import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
var {mongoose} = require('./db/mongoose');
import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simpleschemaconfiguration.js';
import moment from 'moment';



Meteor.startup(() => {
  let now = new Date();
  console.log(now);

  let momentNow = moment();
  console.log(momentNow.format('MMM Do, YYYY, h:mm:ss a'));

  let momentNow1 = moment(0);
  console.log(momentNow1.fromNow());



  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);


    } else {
      next();
    }

    //console.log('This is from my custom middleware!');
    //console.log(req.url, req.method, req.headers, req.query);
    // Set HTTP status code
    //res.statusCode = 302;
    // Set HTTP headers
    //res.setHeader('Location', 'http://www.google.com');
    // Set HTTP body
    //res.write('<h1>This is my middleware at work!</h1>');
    // End HTTP request
    //res.end();

    //next();
  });

  //
  // WebApp.connectHandlers.use((req, res, next) => {
  //   console.log('This is from my custom middleware!');
  //   console.log(req.url, req.method, req.headers, req.query);
  //   // Set HTTP status code
  //   //res.statusCode = 404;
  //   // Set HTTP headers
  //   //res.setHeader('my-custom-header', 'Andrew was here!');
  //   // Set HTTP body
  //   //res.write('<h1>This is my middleware at work!</h1>');
  //   // End HTTP request
  //   //res.end();
  //
  //   next();
  // });

  Meteor.call('greetUser', 'Server', (err, res) => {
    console.log('GreetUser Arguments Server Side', err, res);
  });



  Meteor.call('greetUserServer', 'Server', (err, res) => {
    console.log('GreetUserServer Arguments Server Side', err, res);
  });



  // code to run on server at startup


    //
    // try {
    //   throw new Meteor.Error(400, e.message);
    // } catch (e) {
    //   console.log(e);
    // }


  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //
  //   }
  //
  // });
  //
  //
  // petSchema.validate({
  //   name: 'Try',
  //   age: 21,
  //   contactNumber: '6042243783'
  // });
  //
  // const employee = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: false
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //
  //   },
  //   contactEmail: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Email
  //
  //   }
  //
  // });
  //
  //
  // employee.validate({
  //   name: 'Andrew Mead',
  //   age: 21,
  //   hourlyWage: 25.54,
  //   contactNumber: '6042243783',
  //   contactEmail: 'rkuerbis@hotmail.com'
  // });
  //

 });
