import React from 'react';
import PropTypes from 'prop-types';
import ActionReport from './ActionReport'
import CustomScroll from 'react-custom-scroll';

const ReportArea = (props) => (
    <div className="report-area">
        <CustomScroll>
            <div className="actions-container">
                {props.userActions.map((action, index) => (<ActionReport action={action} key={index}/>))}
            </div>
        </CustomScroll>
    </div>

)

ReportArea.PropTypes = {
    userActions: PropTypes.array.isRequired
}

export default ReportArea;
