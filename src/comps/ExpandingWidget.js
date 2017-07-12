import React from 'react';
import createReactClass from 'create-react-class';

const minWidth = 10;
const maxWidth = 200
const defaultWidth = (maxWidth - minWidth) / 2;

const ExpandingWidget = createReactClass({
    getInitialState() {
        return {
            width: defaultWidth
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
    updateWidth(width) {
        this.setState({width})
    },
    componentDidUpdate(prevProps, prevState) {
        if (this.state.mouseHover) {
            const delta = 10
            const currentWidth = this.state.width
            let currentDirection = Math.sign(currentWidth - prevState.width) || 1;
            const expectedNewWidth = currentWidth + delta * currentDirection
            if (expectedNewWidth > maxWidth || expectedNewWidth < minWidth) {
                currentDirection = currentDirection * -1;
            }
            const newWidth = currentWidth + delta * currentDirection

            setTimeout(() => {
                this.updateWidth(newWidth)
            }, 50)
        }
    },
    render() {
        return (
            <div className="expanding-widget">
                <div className="controls">
                    <input type="range"
                           list="tickmarks"
                           min={minWidth}
                           max={maxWidth}
                           value={this.state.width}
                           onChange={(e) => this.updateWidth(parseInt(e.target.value, 10))}/>
                    <datalist id="tickmarks">
                        <option value={minWidth} label="0%"/>
                        <option value={defaultWidth} label="50%"/>
                        <option value={maxWidth} label="100%"/>
                    </datalist>
                    <button onClick={() => this.setState({width: defaultWidth})}>Reset</button>
                </div>
                <div className="visual"
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}>
                    <div className="expanding-bar" style={{width: this.state.width}}/>
                </div>
            </div>
        )
    }
})

export default ExpandingWidget
