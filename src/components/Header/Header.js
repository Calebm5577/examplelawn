import React from 'react';
import "./Header.scss";
import img from '../../images/main-small.jpg'
import img2 from '../../images/main-large.jpg'
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import arrow from '../../images/icons/up-arrow.png'
import { Scroll } from 'react-fns';
import handleViewport from 'react-in-viewport';


const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';
  return (
    <div className="viewport-block" ref={forwardedRef}>
      {/* <h3>{ text }</h3>
      <div style={{ width: '400px', height: '300px', background: color }} /> */}
      <Link to="Header" spy={true} smooth={true} offset={-100} duration={1400}><img src={arrow} alt="arrow" className={inViewport ? 'hidden' : 'Header-div2-mainnav-arrow' } /></Link>
    </div>
    
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);


export const Header = () => ({

    componentDidMount: function() {
        Events.scrollEvent.register('begin', function(to, element) {
          console.log('begin', arguments);
        });
     
        Events.scrollEvent.register('end', function(to, element) {
          console.log('end', arguments);
        });
     
        scrollSpy.update();
      },
      componentWillUnmount: function() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      },

      scrollToBottom: function() {
        scroll.scrollToBottom();
      },
      handleSetActive: function(to) {
        console.log(to);
      },

       
      render: function() {

    return (
        <div className="Header">
            
            <div className="Header-div1">
                {/* background image */}
                <h1 className="Header-div1-number">910-910-910</h1>
                <h2 className="Header-div1-email">larryslawn@gmail.com</h2>
            </div>
            <div className="Header-div2">
                <h1 className="Header-div2-h1"><span className="Header-div2-span">Larry's </span>Lawn Mowing</h1>
                <p className="Header-div2-p">No job too big or too small, we do it all </p>
                <div className="Header-div2-mainnav">
                    <Link to="Services" spy={true} smooth={true} offset={-100} duration={1200}><p className="Header-div2-mainnav-p">Services</p></Link>
                    <Link to="Pricing" spy={true} smooth={true} offset={-50} duration={1200}><p>Pricing</p></Link>
                    <Link to="Contact" spy={true} smooth={true} offset={-100} duration={1400}><p>Contact</p></Link>
                </div>
                
                <ViewportBlock />
            </div>
           
        </div>
    )
      }
})
