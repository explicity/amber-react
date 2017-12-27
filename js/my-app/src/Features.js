import React, { Component } from 'react';

class Features extends Component {
  render() {
    return (
       <section className="features d-flex justify-content-center align-items-center">
        <div className="container">
            <header className="text-center">
                <h3 className="title-section">Superb features</h3>
            </header>

            <ul className="row">
                <li className="col-12 col-md-6 features-list-item icon-star">
                    <h4>Brilliant creative design</h4>
                    <p>Ah, well! It means much the same thing, said the Duchess, digging her sharp little chin into Alice's
                    shoulder as she added, and the moral of that is m-dash.</p>
                </li>
                <li className="col-12 col-md-6 features-list-item icon-winner">
                    <h4>On mouse over title</h4>
                    <p>Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that
                    she had to run back into the wood for fear of their hearing her.</p>
                </li>
                <li className="col-12 col-md-6 features-list-item icon-stick">
                    <h4>Incredible documentation</h4>
                    <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman,
                    'and that for two reasons.</p>
                </li>
                <li className="col-12 col-md-6 features-list-item icon-cloud">
                    <h4>Responsive & retina ready</h4>
                    <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman,
                    'and that for two reasons. First, because I'm on the same side.</p>
                </li>
            </ul>
        </div>
    </section>
    );
  }
}

export default Features;
