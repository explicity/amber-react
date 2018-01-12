import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import FeaturesItem from './features-section/FeaturesItem.js';

class Features extends Component {
    render() {
        const FeaturesList = [
        {
            title: 'Brilliant creative design',
            text: 'Ah, well! It means much the same thing, said the Duchess, digging her sharp little chin into Alice\'s shoulder as she added, and the moral of that is m-dash.',
            cls: 'icon-star',
        },

        {
            title: 'On mouse over title',
            text: 'Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her.',
            cls: 'icon-winner',
        },

        {
            title: 'Incredible documentation',
            text: 'Alice went timidly up to the door, and knocked. \'There\'s no sort of use in knocking,\' said the Footman, \'and that for two reasons.',   
            cls: 'icon-stick',
        },

        {
            title: 'Responsive & retina ready',
            text: 'Alice went timidly up to the door, and knocked. \'There\'s no sort of use in knocking,\' said the Footman,\'and that for two reasons. First, because I\'m on the same side.',
            cls: 'icon-cloud',
        }
    ];
    
    return (
       <section className="features d-flex justify-content-center align-items-center">
        <div className="container">
            <header className="text-center">
                <TitleSection name='Superb features' />
            </header>

            <FeaturesItem obj={FeaturesList} />

        </div>
    </section>
    );
  }
}

export default Features;
