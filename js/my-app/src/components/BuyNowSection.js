import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class BuyNowSection extends Component {
  render() {
    return (
	    <section className="buy-now">
	        <div className="container d-flex justify-content-between align-items-center">
	            <h3>Amber is the most metrolly WordPress theme ever created.</h3>
	            <Link to='' className="btn btn-lg btn-primary hvr-icon-forward ">Purchase now</Link>
	        </div>
	    </section>
    );
  }
}

export default BuyNowSection;