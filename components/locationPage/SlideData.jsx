// SlideData.jsx
import React from 'react';
import Slides from './Slides';
import locationData from '../../location.json';

const SlideData = () => {
    return (
        <div>
            {locationData.map(item => (
                <Slides key={item.id} pictures={item.pictures} />
            ))}
        </div>
    );
};

export default SlideData;
