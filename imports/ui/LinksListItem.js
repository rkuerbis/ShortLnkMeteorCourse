import { Meteor } from 'meteor/meteor';

import React from 'react';
import Clipboard from 'clipboard';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';
import {Tracker} from 'meteor/tracker';
import { browserHistory } from 'react-router';
import moment from 'moment';

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);

//  setting state makes all instances use the same changing parameter,
//  unlike if a prop is passed, which will probably end up not changing
//  if upgraded in another function call

    this.state = {
      justCopied: false
    };

  }


componentDidMount() {
  this.clipboard = new Clipboard(this.refs.copy);

  this.clipboard.on('success', () => {
    this.setState({justCopied: true});
    setTimeout(() => this.setState({justCopied: false}), 2000);

//    alert('It worked!');

  }).on('error', () => {
    alert('Unable to copy. Please manually copy the link.');
  });

};


componentWillUnmount() {
  this.clipboard.destroy();

};


renderStats(linkprops) {
  const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
  let visitedMessage = null;

  let momentNow1 = 0;
  let timeElapse = '';

  if (typeof this.props.lastVisitedAt === 'number') {
    momentNow1 = moment(this.props.lastVisitedAt);
    timeElapse = momentNow1.fromNow();
    console.log(timeElapse);

    visitedMessage = `(visited ${timeElapse})`;
  }

  return(
    <p className='item__message'>{linkprops.visitedCount} {visitMessage} {visitedMessage}</p>

  );

};


//////////////////////////
//
// app.delete('/todos/:id', (req, res) => {
//   console.log(req.params.id);
//   var id = req.params.id;
//   console.log(id);
//   if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
//     return res.status(404).send();
//   };
//
//   console.log('ID valid');
//
//   Todo.findByIdAndRemove(id).then((todo) => {
//      console.log(todo);
//      if (!todo) {
//       console.log('\nId not found\n');
//       return res.status(404).send();
//     }
//     console.log('\nRemoved Todo By Id:\n', todo);
//     res.send({todo});
//   }).catch((e) => {
//     console.log(e); // use to find by id
//     res.status(400).send();
//   });
// });
//


//////////////////////////

  deleteLink() {

    Meteor.call('links.delete', this.props._id, (err, res) => {
      if ( !err ) {


      } else {
        this.setState({
          error: err.reason

        });

      }
    });

  };


  render() {

    var linkprops = {...this.props, justCopied: false};

    console.log(`LinksListItem: `, linkprops);


    return (
      <div className='item'>
        <div key={linkprops._id}>

          <h2><strong>{linkprops.url}</strong></h2>
          <p className='item__message'>{linkprops.shortUrl}</p>
          {/* <p>{linkprops.visible.toString()}</p> */}
          {this.renderStats(linkprops)}

        </div>
        <a className='button button--link button--pill' href={this.props.shortUrl} target='_blank'>
          Visit
        </a>
        <button className='button button--pill' ref="copy" data-clipboard-text={linkprops.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy'}</button>

        <button className='button button--pill' onClick={() => {
          Meteor.call('links.setVisibility', linkprops._id, !linkprops.visible);
        }}>
          {linkprops.visible ? 'Hide' : 'Unhide'}
        </button>

        <button className='button button--pill' onClick={this.deleteLink.bind(this)}>Delete</button>


      </div>
    );
  }
};


LinksListItem.propTypes = {

  _id: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
};
