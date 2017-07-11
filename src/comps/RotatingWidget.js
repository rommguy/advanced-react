import React from 'react';
import createReactClass from 'create-react-class';


const RotatingWidget = createReactClass({
    getInitialState() {
        return {
            angle: 0
        };
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
    updateAngle(angle) {
        this.setState({angle})
    },
    componentDidUpdate(prevState) {
        if (this.state.mouseHover) {
            let currentAngle = this.state.angle
            setTimeout(() => {
                this.updateAngle((currentAngle + 5) % 360)
            }, 50)
        }
    },
    render() {
        return (
            <div className="rotating-widget">
                <div className="controls">
                    <input type="number"
                           step="5"
                           min="0"
                           max="360"
                           value={this.state.angle}
                           onChange={(e) => this.updateAngle(parseInt(e.target.value))}/>
                </div>
                <div className="visual"
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}
                     style={{transform: `rotate(${this.state.angle}deg)`}}>
                    <div className="first wing"/>
                    <div className="second wing"/>
                    <div className="third wing"/>
                </div>
            </div>
        );
    }
})

export default RotatingWidget;
