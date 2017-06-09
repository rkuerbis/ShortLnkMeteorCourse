
import React from 'react';

//import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';


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
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();


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
    console.log('Links Length: ', this.state.links.length)
    if (this.state.links.length === 0) {
      return <div className='item'><p className='item__status-message'>No Links Found!</p></div>

    } else {
      return this.state.links.map((link) => {
        const shortUrl = Meteor.absoluteUrl(link._id);
        var obj = [...link];
        console.log(`renderLinksListItems: ${link._id}, ${shortUrl}, ${obj}`);

        //return <p key={link._id}>{link.url}</p>
        return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
      });


    }


  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          <p>Links List</p>
          <div>
            {this.renderLinksListItems()}
          </div>
        </FlipMove>
      </div>
    );
  }
};
