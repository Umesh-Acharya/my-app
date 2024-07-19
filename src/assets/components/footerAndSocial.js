import React from 'react';
import thumb1 from '../img/thumb1.png';
import thumb2 from '../img/thumb2.png';
import thumb3 from '../img/thumb3.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';

function FooterAndSocial() {
    return (
        <div className='Footer-And-Social'>

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
        </div>
    )
}

export default FooterAndSocial;