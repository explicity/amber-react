import React, { Component } from 'react';
import TitleFooter from './TitleFooter.js';
import AddressItem from './AddressItem.js';

import map from './../../styles/img/map.png';

const AddressList = [
  {
    icon: 'icon-address',
    name: 'Address: ',
    text: '321 Street Name, United Kingdom, London',
  },

  {
    icon: 'icon-phone',
    name: 'Phone: ',
    text: '+7 998 71 150 30 20',
  },

  {
    icon: 'icon-email',
    name: 'Email: ',
    text: 'info@ambertheme.com',
  }
]

class AddressSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-violet">
          <TitleFooter name='Get in touch' />
          <address>
            <AddressItem obj={AddressList} />
          </address>
          <a href="">
              <img src={map} alt="map" style={{width: 210, height: 150}} />
          </a>
      </section>
    );
  }
}

export default AddressSection;
