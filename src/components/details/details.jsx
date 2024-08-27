import { useParams } from "react-router-dom";
import { destination } from "../Destination/destination";
import { useEffect, useState } from "react";

export function Details(){
    const params = useParams();
    const [pro,setPro] = useState('');
    useEffect(() => {
        let arr = destination.filter(des => des.id == params.id);
        setPro(arr.pop());
    },[])
    return(
        <section className="details">
            <div className="container">
                <div>
                    <img src={pro.image} alt="" />
                </div>
                <div className="details-place">
                    <h2>{pro.capital}</h2>
                    <h3>{pro.name}</h3>
                    <h5>{pro.price}$</h5>
                    <p>{pro.description}</p>
                    <button className="btn white">Travel Now</button>
                </div>
            </div>
        </section>
    )
}