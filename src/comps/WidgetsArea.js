import React from 'react';
import PropTypes from 'prop-types';
import RotatingWidget from './RotatingWidget';
import ExpandingWidget from './ExpandingWidget';


const WidgetsArea = () => (
    <div className="widgets-area">
        <RotatingWidget/>
        <ExpandingWidget/>
    </div>
)


WidgetsArea.PropTypes = {
    userActions: PropTypes.array.isRequired
}

export default WidgetsArea;
