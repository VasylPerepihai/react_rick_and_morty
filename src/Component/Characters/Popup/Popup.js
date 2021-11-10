import React from 'react';

export class Popup extends React.Component {
  render() {
    const {closePopup, user} = this.props;
    return (
      <div className='popup'>
        <div className='popup_inner' onClick={closePopup}>
          {JSON.stringify(user, null, '\t')}
        </div>
      </div>
    );
  }
}