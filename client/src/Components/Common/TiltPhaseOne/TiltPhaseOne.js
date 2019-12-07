import React, { Component } from 'react';
import dogBackground from '../images/transparent.png';
import { findDOMNode } from 'react-dom';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  position: 'absolute',
  height: '250px',
  top: '-10px',
  zIndex: '1'
}
class TiltPhaseOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {}
        };
        const defaultSettings = {
            reverse: false,
            max: 35,
            perspective: 1000,
            easing: 'cubic-bezier(.03, .98, .52, .99)',
            scale: '1.1',
            speed: '1000',
            transition: true,
            axis: null,
            reset: true
        }
        this.element = null;
        this.width = null;
        this.height = null;
        this.left = null;
        this.top = null;
        this.right = null;
        this.bottom = null;
        this.transitionTimeout =  null;
        this.updateCall = null;
        this.element = null;
        this.settings=  {
            ...defaultSettings,
            ...this.props.options
        };
        this.reverse = this.settings.reverse ? -1 : 1;
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }
    componentDidMount() {
        this.element = findDOMNode(this);
    }
    componentWillMount() {
        clearTimeout(this.transitionTimeout);
        cancelAnimationFrame(this.updateCall);
    }
    handleMouseEnter(e, cb = () => {}) {
        this.updateElementPosition();
        this.setState(prevState => ({
            style: {
                ...prevState.style
            }
        }))
        this.setTransition();
        return cb(e);
    }
    reset() {
        window.requestAnimationFrame(() => {
            this.setState(prevState => ({
                style: {
                    ...prevState.style,
                    transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                }
            }))
        })
    }
    updateElementPosition() {
        const rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
        this.right = rect.right;
        this.bottom = rect.bottom;
    }
    handleMouseMove(e, cb = () => {}) {
        e.persist();
        if(this.updateCall !== null) {
            window.cancelAnimationFrame (this.updateCall);
        }
        this.event = e;
        this.updateCall = requestAnimationFrame(this.update.bind(this, e));
        return cb(e);
    }
    setTransition() {
        clearTimeout(this.transitionTimeout);
        this.setState(prevState => ({
            style: {
                ...prevState.style,
                transition: `${this.settings.speed}ms ${this.settings.easing}`,
            }
        }))
        this.transitionTimeout = setTimeout(() => {
            this.setState(prevState => ({
                style: {...prevState.style,
                    transition: '',
                }
            }))
        }, this.settings.speed)
    }
    handleMouseLeave(e, cb = () => {}) {
        this.setTransition();
        if (this.settings.reset) {
            this.reset()
        }
        return cb(e);
    }
    getValues(e) {
        const x = (e.nativeEvent.clientX - this.left);
        const y = (e.nativeEvent.clientY - this.top);
        const _x = Math.min(Math.max(x, 0), 1);
        const _y = Math.min(Math.max(y, 0), 1);
        const tiltX = (this.reverse * (this.settings.max / 2 - _x*this.settings.max)).toFixed(2);
        const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);
        const percentageX = _x * 100;
        const percentageY = _y * 100;
        return {
            tiltX,
            tiltY,
            percentageX,
            percentageY
        }
    }
    update(e) {
        let values = this.getValues(e);
        this.setState(prevState => ({
            style: {
                ...prevState.style,
                transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`
            }
        }));
        this.updateCall = null;
    }
  render() {
      const style = {
          ...this.props.style,
          ...this.state.style
      }
    return (
      <div style={styles}>
        <div
          style={style}
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        ><img src={dogBackground} alt="" />
        </div>
      </div>
    )
  }
}
export default TiltPhaseOne