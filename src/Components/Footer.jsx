import React from 'react'
import envelop from '../assets/envelope-solid.svg'
import Location from '../assets/location-dot.svg'
import Phone from '../assets/phone.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import arrow from '../assets/arrow-right.svg'

export default function() {
    return (
        <div className='Section'>
            <div className='Footer'>

                <div className="contact">
                    <h3>CONTACT US</h3> <br />
                    <img src={Location} alt="" />
                    <label htmlFor="">Kigali-Rwanda kk120</label> <br />
                    <img src={Phone} alt="" />
                    <label htmlFor="">+250 780901598</label> <br />
                    <img src={envelop} alt="" />
                    <label htmlFor="">aimefils225@gmail.com</label>

                </div>
                <div className="weekly">
                    <h3>OPENING TIME</h3> <br />
                    <h6 htmlFor="">Mon</h6>
                    <span>  8 AM- 16 PM</span> <br />
                    <h6 htmlFor="">Tues</h6>
                    <span> 8 AM- 16 PM</span> <br />
                    <h6 htmlFor="">Wedn</h6>
                    <span> 8 AM- 16 PM</span> <br />
                    <h6 htmlFor="">Thur</h6>
                    <span> 8 AM - 16 PM</span> <br />
                    <h6 htmlFor="">Fri</h6>
                    <span> 9 AM- 17 PM</span>
                </div>
                <div className="location ">
                    <h3>FOLLOW US</h3> <br /> 
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <div className="SUB">
                    <h3>Subscrition</h3> <br />
                    <input type="text"  placeholder='Email'/> <br /> <br />
                    <button>Subscribe <img src={arrow} id='arrow'/></button>
                </div>
            </div>
            <div className="Small-footer">
                 <p>2023-2024.All Right</p>
                </div>
        </div>
    )
}
