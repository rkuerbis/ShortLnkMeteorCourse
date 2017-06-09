import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup


  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;
    console.log('this is the user', user);


    // try {

      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
          }
        }).validate({ email });

      // } catch (e) {
      //   throw new Meteor.Error(400, e.message);
      //   console.log(e);
      // }


      return true;

    });
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
