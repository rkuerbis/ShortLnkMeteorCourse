
import React from 'react';

//import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import { Links } from '../api/links';


export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }


  componentDidMount() {

    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('linksPub');
      var links = Links.find().fetch();


      this.setState({ links });
      console.log('Links List', links);

    });

    console.log('componentDidMount LinksList');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    return this.state.links.map((link) => {
      return <p key={link._id}>{link.url}</p>;
    });

  }

  render() {
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
};
