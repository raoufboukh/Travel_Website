import { MdOutlineTravelExplore } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import {Link} from 'react-router-dom';
export function Navbar(){
    const [menu,setMenu] = useState(false);
    return(
        <header>
            <div className="container">
                <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
                <CgMenuGridO className="menu" onClick={() => setMenu(!menu)}/>
                <div className={menu ? 'links show' : 'links'}>
                    <IoClose className="close" onClick={() => setMenu(!menu)}/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Packages</Link></li>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Pages</Link></li>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <button className="btn white">Book Now</button>
                    </ul>
                </div>
            </div>
        </header>
    )
}