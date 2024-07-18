import React, { useState } from 'react';
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

function Nav() {
    const [mainImage, setMainImage] = useState(img1);
    /*
       const [mainImage, setMainImage] = useState(img1);
        Here mainImage is a state variable which value is image1 which is initial value for our website
        but setMainImage is a function to change the initial image which is currently displaying
        
         */

    function imgSlider(imgPath) {
        //    // Purpose of this imgSlider is to change  the mainImage it dose so by calling another function called setMainImage
        setMainImage(imgPath);
        // This is not regual function it is used because i use the hook name useState
        // useState is a way to mange and update data

    }



    return (
        <div className="Nav">
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

                <div className="content">
                    <div className="textBox">
                        <h2>It's not just Coffee<br />It's <span>Starbucks</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div className="imgBox">
                        <img src={mainImage} alt="main" className="starbucks" />
                    </div>
                </div>
                <ul className="thumb">
                    <li key="thumb1">
                        <img src={thumb1} alt="thumb1" onClick={function () { imgSlider(img1); }} />

                        {/* 
        on click ले ठ्याक एउटा event occor भयो है भनेर थाहा पाँउछ अनि त्यसले एउटा function run गर्छ जुन function को
        काम चाँहि imageSlider function run गर्नु हुन्छ if i am not wrong उसके बाद imageSlider को काम हो setMainImage
        function run गर्नु

        setMainImage functioin initial image change गर्न react ले दिएको tool हो
        यो पनि If I am not wrong
        
        */}
                    </li>
                    <li key="thumb2">
                        <img src={thumb2} alt="thumb2" onClick={function () { imgSlider(img2); }} />
                    </li>
                    <li key="thumb3">
                        <img src={thumb3} alt="thumb3" onClick={function () { imgSlider(img3); }} />
                    </li>
                </ul>




                <ul className="sci">
                    <li key="facebook"><a href="#"><img src={facebook} alt="facebook" /></a></li>
                    <li key="twitter"><a href="#"><img src={twitter} alt="twitter" /></a></li>
                    <li key="instagram"><a href="#"><img src={instagram} alt="instagram" /></a></li>
                </ul>
            </section>
        </div>
    );
}

export default Nav;
