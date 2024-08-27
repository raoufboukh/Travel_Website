import { useState } from 'react';
import video from '../../assets/video.mp4';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { RiApps2AddLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
export function Home(){
    const [price,setPrice] = useState(0);
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} autoPlay muted loop type='video.mp4'></video>
            <div className="container trans">
                <p className='trans white'>Our Packages</p>
                <h2 className='trans white'>Search your <span className='trans span'>Holiday</span></h2>
                <div className="filters">
                    <div>
                        <label htmlFor="dest">Search Your Destination:</label>
                        <input type="text" id='dest' placeholder='Enter Name Here...'/>
                        <FaMapMarkerAlt className='map trans'/>
                    </div>
                    <div>
                        <label htmlFor="date">Select Your Date:</label>
                        <input type="date" id='date'/>
                    </div>
                    <div>
                        <label htmlFor="range">Max Price: <span>{price}$/5000$</span></label>
                        <div className='range'> 
                            <input type="range" id='range' max={5000} min={0} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button className='btn white'><MdFilterListAlt className='icon-filter trans'/> More Filters</button>
                <div className="icons trans white" data-aos="fade-up">
                    <div className='trans'>
                        <FiFacebook className='icon-container trans'/>
                        <FaInstagram className='icon-container trans'/>
                        <RiTwitterLine className='icon-container  trans'/>
                    </div>
                    <div className='trans'>
                        <RiApps2AddLine className='icon-container  trans'/>
                        <AiOutlineBars className='icon-container  trans'/>
                    </div>
                </div>
            </div>
        </section>
    )
}