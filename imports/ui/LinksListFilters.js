import React from 'react';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';


export default class LinksListFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showVisible: true
    };
  }


  componentDidMount() {

    this.visibleTracker = Tracker.autorun(() => {

      this.setState({ showVisible: Session.get('showVisible') });

    });

    console.log('componentDidMount showVisible:');
  }


  componentWillUnmount() {
    console.log('componentWillUnmount showVisible:');
    this.visibleTracker.stop();
  }





  render() {
    return (
      <div>
        <lable className='checkbox'>
          <input className='checkbox__box' type='CheckBox' checked={!this.state.showVisible} onChange={(e) => {

            Session.set('showVisible', !e.target.checked);
    //          console.log('showVisible:', !e.target.checked);

          }}/> Show Hidden Links

        </lable>
      </div>
    );

  }

};
