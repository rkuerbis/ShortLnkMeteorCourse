import { mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('linksPub', function () {


    return Links.find({userId: this.userId});
  });
}




Meteor.methods({


  ///////Add Mongo and other functions here if they are not functioning
  ///////properly or to avoid future timing problems


  'links.delete'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    console.log('linksDelete _id:', _id);

    Links.remove( { _id: _id } );

  },

  //////////////////////

  'links.insert'(url) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    console.log('url:', url);

  // try {

    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    // } catch (e) {
    //   throw new Meteor.Error(400, e.message);
    //   console.log(e);
    // }




    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    });
  },
//////////////////////////////////

'links.setVisibility'(_id, visible) {
  if (!this.userId) {
    throw new Meteor.Error('not-authorized');
  }

  new SimpleSchema({
    _id: {
    type: String,
    min: 1,
    },
    visible: {
      type: Boolean
    }
    }).validate({ _id, visible });



  Links.update({
      _id,
      userId: this.userId
    },

    {
      $set: { visible }
    });

  },

  'links.trackVisit'(_id) {

      new SimpleSchema({
        _id: {
        type: String,
        min: 1
        }
      }).validate({ _id });

      Links.update({ _id }, {
        $set: {
          lastVisitedAt: new Date().getTime()
        },
        $inc: {
          visitedCount: 1
        }
     });
  },



//////////////////////////////////

  greetUser(name = 'User') {
    console.log('greetUser is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }
    return `Hello ${name}!`;

  },


  greetUserClient(name = 'User') {
    console.log('greetUserClient is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }
    return `Hello ${name}!`;

  },

  greetUserServer(name = 'User') {
    console.log('greetUserServer is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }
    return `Hello ${name}!`;

  },

  addNumbers(a, b) {

    var aa = a;
    var bb = b;

    if (typeof aa === 'number' && typeof bb === 'number' ) {
      cc = aa + bb;
    } else {
      cc = 'undefined'
    }
    return cc;

  }
///////////////////////////////////////////
});
