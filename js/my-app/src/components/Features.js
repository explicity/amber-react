import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import FeaturesItem from './features-section/FeaturesItem.js';

const FeaturesList1 = {
    title: 'Brilliant creative design',
    text: 'Ah, well! It means much the same thing, said the Duchess, digging her sharp little chin into Alice\'s shoulder as she added, and the moral of that is m-dash.',
}

const FeaturesList2 = {
    title: 'On mouse over title',
    text: 'Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her.',
}

const FeaturesList3 = {
    title: 'Incredible documentation',
    text: 'Alice went timidly up to the door, and knocked. \'There\'s no sort of use in knocking,\' said the Footman, \'and that for two reasons.',
}

const FeaturesList4 = {
    title: 'Responsive & retina ready',
    text: 'Alice went timidly up to the door, and knocked. \'There\'s no sort of use in knocking,\' said the Footman,\'and that for two reasons. First, because I\'m on the same side.',
}

class Features extends Component {
  render() {
    return (
       <section className="features d-flex justify-content-center align-items-center">
        <div className="container">
            <header className="text-center">
                <TitleSection name='Superb features' />
            </header>

            <ul className="row">
                <li className="col-12 col-md-6 features-list-item icon-star">
                    <FeaturesItem 
                        title={FeaturesList1.title}
                        text={FeaturesList1.text}
                    />
                </li>
                <li className="col-12 col-md-6 features-list-item icon-winner">
                    <FeaturesItem 
                        title={FeaturesList2.title}
                        text={FeaturesList2.text}
                    />
                </li>
                <li className="col-12 col-md-6 features-list-item icon-stick">
                    <FeaturesItem 
                        title={FeaturesList3.title}
                        text={FeaturesList3.text}
                    />
                </li>
                <li className="col-12 col-md-6 features-list-item icon-cloud">
                    <FeaturesItem 
                        title={FeaturesList4.title}
                        text={FeaturesList4.text}
                    />
                </li>
            </ul>
        </div>
    </section>
    );
  }
}

export default Features;
