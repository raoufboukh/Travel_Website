import { useEffect, useState } from "react";
import image1 from "../../assets/bora-bora.jpg";
import image2 from "../../assets/machu-picchu.jpg";
import image3 from "../../assets/great-barrier-reef.jpg";
import image4 from "../../assets/cappadocia.jpg";
import image5 from "../../assets/guanajuato.jpg";
import image6 from "../../assets/cinque-terre.jpg";
import image7 from "../../assets/angkor-wat.jpg";
import image8 from "../../assets/taj-mahal.jpg";
import image9 from "../../assets/bali-island.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
export const destination = [
        {
            id:1,
            name:"Bora Bora",
            capital:"New Zealand",
            description:"The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities",
            image: image1,
            price:700
        },
        {
            id:2,
            name:"Machu Picchu",
            capital:"Peru",
            description:"Huayana Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular",
            image: image2,
            price:600
        },
        {
            id:3,
            name:"Great Barrier Reef",
            capital:"Australia",
            description:"One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place",
            image: image3,
            price:700
        },
        {
            id:4,
            name:"Cappadocia",
            capital:"Turkey",
            description:"According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities",
            image: image4,
            price:800
        },
        {
            id:5,
            name:"Guanajuato",
            capital:"Mexico",
            description:"A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome",
            image: image5,
            price:1100
        },
        {
            id:6,
            name:"Cinque Terre",
            capital:"Italy",
            description:"The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilrated with the choice you are about to get here, Happy exploring great food!",
            image: image6,
            price:840
        },
        {
            id:7,
            name:"Angkor Wat",
            capital:"Cambodia",
            description:"Angkor wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities",
            image: image7,
            price:790
        },
        {
            id:8,
            name:"Taj Mahal",
            capital:"India",
            description:"An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities",
            image: image8,
            price:900
        },
        {
            id:9,
            name:"Bali Island",
            capital:"Indonesia",
            description:"Bali is an Indonesian island and one of the best holiday destination in the Indonesian archipelago. Bali if known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches",
            image: image9,
            price:500
        }
]



function Destination(){
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        setPlaces(destination);
    },[])
    return(
        <section className="destination">
            <h2 className="textColor" data-aos='fade-right'>Most Visited <span className="span">Destination</span></h2>
            <div className="container">
                {
                    places.map(place => {
                        return(
                            <div key={place.id} data-aos="fade-up" className="card" style={{borderRadius:'10px',boxShadow:'0 0 1px black'}} >
                                <div style={{overflow:'hidden',height:'250px',borderRadius:'10px 10px 0 0'}}>
                                    <img className="img-card" src={place.image} alt={place.name} style={{width:'100%',height:'250px',borderRadius:'10px 10px 0 0'}}/>
                                </div>
                                <div className="card-content pad">
                                    <h3 className="card-title">{place.name}</h3>
                                    <p><FaMapMarkerAlt/> {place.capital}</p>
                                </div>
                                <div className="info pad">
                                    <p className="textColor" style={{textTransform:'uppercase',flexBasis:'20%'}}>cultural relax <span className="btn white">+1</span></p>
                                    <h4 style={{flexBasis:'20%',fontSize:'24px'}}>{place.price}$</h4>
                                </div>
                                <div className="description pad">
                                    <p className="textColor" style={{fontSize:'13px',flexBasis:'85%'}}>{place.description}</p>
                                    <Link to={`/details/${place.id}`} style={{alignSelf: 'flex-start',flexBasis:'10%'}} className="btn white">Details <FcViewDetails style={{transform:'translate(0,12%)'}} className="trans white svg"/></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Destination;