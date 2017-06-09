import React from 'react';
import PrivateHeader from './PrivateHeader';



export default class TitleBarLink extends React.Component {



  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3 className='title-bar__subtitle'>{this.props.subtitle}</h3>;
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <PrivateHeader className='logoutHeader' title="Your Links"/>
          <h1>{this.props.title}</h1>


          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
};


TitleBarLink.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

TitleBarLink.defaultProps = {
//  title: 'Default Title'
};
