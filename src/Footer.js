import React from 'react';
import createReactClass from 'create-react-class';
import ContactUs from './ContactUs';

const Footer = createReactClass({
    getInitialState() {
        return {};
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
    render() {
        return (
            <div className={`Footer ${this.state.mouseHover ? 'mouse-over-footer' : ''}`}>
                <div className="footer-content"><span>My cool footer content</span></div>
                {this.state.mouseHover ? <ContactUs/> : null}
            </div>
        );
    }
})

export default Footer;
