import React from 'react';
import logo from '../img/logo.png';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import thumb1 from '../img/thumb1.png';
import thumb2 from '../img/thumb2.png';
import thumb3 from '../img/thumb3.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import '../css/nav.css';




function Landingpage() {
    return (
        <div className="body">
            {/* ///////////////////////////////////////////////////////////////// */}
            <section>
                <div className="circle"></div>
                <header>
                    <a href="#">
                        <img src={logo} alt="Starbuck" className="logo" />
                    </a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>
                {/* ////////////////////////////////////////////////////////////////////////////////// */}

                <div className="content">


                    <div className="textBox">
                        <h2>It's not just Coffee<br />It's <span>Starbucks</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div className="imgBox">
                        <img src={img1} className="starbucks" />
                    </div>
                </div>
                <ul className="thumb">
                    <li>
                        <img src={thumb1} />
                    </li>
                    <li>
                        <img src={thumb2} alt="thumb2" />
                    </li>
                    <li>
                        <img src={thumb3} alt="thumb3" />
                    </li>
                </ul>

                <ul className="sci">
                    <li key="facebook"><a href="#"><img src={facebook} alt="facebook" /></a></li>
                    <li k4ey="twitter"><a href="#"><img src={twitter} alt="twitter" /></a></li>
                    <li key="instagram"><a href="#"><img src={instagram} alt="instagram" /></a></li>
                </ul>
            </section>
        </div>
    );
}

export default Landingpage;
