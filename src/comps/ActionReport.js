import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

const ActionReport = createReactClass({
    displayName: 'actionReport',
    propTypes: {
        action: PropTypes.shape({
            widget: PropTypes.string,
            source: PropTypes.string,
            time: PropTypes.string,
            value: PropTypes.number
        }).isRequired
    },
    getInitialState() {
        return {
            showTooltip: false
        }
    },
    handleMouseEnter() {
        this.setState({mouseHover: true})
    },
    handleMouseLeave() {
        this.setState({mouseHover: false})
    },
    isHovering() {
        return this.state.mouseHover
    },
    renderTooltip() {
        return (
            <div className="action-tooltip">this.props.action.time</div>
        )
    },
    componentDidUpdate() {

    },
    render() {
        return (
            <div className="action-report">
                <div className="action-content">
                    <span>Widget: {this.props.action.widget}</span>
                    <span>Source: {this.props.action.source}</span>
                    <span>New Value: {this.props.action.value}</span>
                </div>
                {this.state.mouseHover ? this.renderTooltip() : null}
            </div>
        )
    }
})

export default ActionReport