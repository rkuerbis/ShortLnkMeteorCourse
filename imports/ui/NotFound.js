
import React from 'react';

import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';




const NotFound = () => {

  return (

    <div className='boxedview'>
      <div className='boxedview__box'>
        <h1>ERROR:  Page Not Found</h1>


        <p>Hmmm, unable to find that page.</p>

        <Link to="/" className='button button--link'>Go To Home Page</Link>

      </div>
    </div>
  );
};




NotFound.propTypes = {
//  score: React.PropTypes.number.isRequired
};



// For Stateless Function Version
export default NotFound;
