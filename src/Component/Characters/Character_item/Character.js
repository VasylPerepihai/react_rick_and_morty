import React from 'react';
import { Popup } from '../Popup/Popup';

export class Character extends React.Component {
  state = {
    shopPopup: false,
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup})
  }

  render() {
    const {name, status, species, gender, image} = this.props.character;
    const {showPopup} = this.state;

    return (
      <div className="character-card" onClick={this.togglePopup}>
        <div classname="character-text">
          <div>
            name - {name}
          </div>
          <div>
            status - {status}
          </div>
          <div>
            species - {species}
          </div>
          <div>
            gender - {gender}
          </div>
        </div>
        <img src={image} alt="character" className="character-image"/>
        {showPopup &&
          <Popup user={this.props.character} closePopup={this.togglePopup}/>
        }
      </div>
      
    )
  }
}