import React from "react"
import { slide as Menu } from 'react-burger-menu'
import './HamburgerMenu.scss'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
class HamburgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }


    
 
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return ( 
      <Menu styles={styles} className="menu" >
        <div className="menu-div">
          <Link><a id="home" className="menu-div-item" href="About">About</a></Link>
          <a id="about" className="menu-div-item" href="Work">Work</a>
          <Link to="Contact" spy={true} smooth={true} offset={-100} duration={1400}><a id="contact" className="menu-div-item" href="Contact">Contact</a></Link>
        </div>
      </Menu >
    );
  }
}

export default HamburgerMenu

var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: 'black'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
  }
