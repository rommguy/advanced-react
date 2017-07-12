import React from 'react';
import PropTypes from 'prop-types';


const ReportArea = () => (
    <div className="report-area">
        This is the report area
    </div>
)

ReportArea.PropTypes = {
    userActions: PropTypes.array.isRequired
}

export default ReportArea;
