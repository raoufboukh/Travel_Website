import { MdOutlineTravelExplore } from 'react-icons/md';
import video from '../../assets/sea-waves.mp4';
import { FiSend } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { AiFillInstagram } from 'react-icons/ai';

const uls = [
    {
        id: 1,
        title: "our agency",
        li1: 'Services',
        li2: 'Insurance',
        li3: 'Agency',
        li4: 'Tourism',
        li5: 'Payment'
    },
    {
        id: 2,
        title: "parteners",
        li1: 'Booking',
        li2: 'RentalCar',
        li3: 'HostelWorld',
        li4: 'Trivago',
        li5: 'TripAdvisor'
    },
    {
        id: 3,
        title: "last minute",
        li1: 'London',
        li2: 'California',
        li3: 'Indonesia',
        li4: 'Europe',
        li5: 'Oceania'
    }
]

export function Footer(){
    return(
        <footer className="footer">
            <video src={video} type='sea-waves.mp4' autoPlay loop muted></video>
            <div className="container trans">
                <div className="email trans white">
                    <div className='trans'>
                        <p className='trans' data-aos="fade-up" style={{textTransform:'uppercase',fontSize:'14px'}}>keep in touch</p>
                        <h3  data-aos="fade-up" style={{fontSize:'24px'}} className='trans'>Travel With Us</h3>
                    </div>
                    <div className='trans' data-aos="fade-up">
                        <form className='trans'>
                            <input className='trans' type="email" placeholder='Enter Email Adresse'/>
                            <button className='btn white' type='submit'>Send <FiSend className='trans'/></button>
                        </form>
                    </div>
                </div>
                <div className="information">
                    <div className="text">
                        <h3 data-aos="fade-up" style={{fontSize:'24px'}}><MdOutlineTravelExplore className='icon'/> Travel.</h3>
                        <div data-aos="fade-up">
                            <p style={{padding:"10px 0"}}>Thank you for visiting our travel page and exploring the world with us! We hope you found inspiration and valuable information to plan your next adventure. Whether you're a seasoned traveler or embarking on your first journey, our mission is to provide you with unforgettable experiences and help you create memories that last a lifetime. From breathtaking landscapes to vibrant cultures, we strive to showcase the beauty and diversity of our planet. Join us as we continue to share the wonders of travel and make your dreams come true. Bon voyage!</p>
                            <FaTwitter className='social'/>
                            <FaYoutube  className='social'/>
                            <AiFillInstagram className='social'/>
                            <FaLinkedin className='social'/>
                        </div>
                    </div>
                    <div className="links">
                        {uls.map(ul => {
                            return(
                                <ul data-aos="fade-up" key={ul.id} style={{position:'relative',zIndex:9}}>
                                    <h4 style={{textTransform:'uppercase',fontWeight:'700px'}}>{ul.title}</h4>
                                    <li><IoChevronForward /> {ul.li1}</li>
                                    <li><IoChevronForward /> {ul.li2}</li>
                                    <li><IoChevronForward /> {ul.li3}</li>
                                    <li><IoChevronForward /> {ul.li4}</li>
                                    <li><IoChevronForward /> {ul.li5}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="end">
                    <p className='trans'>Best travel website theme</p>
                    <p className='trans'>copyrights reserved-isratech 2022</p>
                </div>
            </div>
        </footer>
    )
}