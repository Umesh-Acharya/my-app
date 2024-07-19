import React from 'react';
import img1 from '../img/img1.png';

function Textbox() {
    return (
        <div className='TEXTBOX'>

            <div className="circle"></div>
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
        </div>

    )
}

export default Textbox;