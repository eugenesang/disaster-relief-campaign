import React from 'react';
import { places } from '../assets/data';

const Place = ({ country, img, excerpt }) => {
    return (
        <div className="place-card">
            <article className='place-card'>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="content">
                    <h4><i className="fas fa-location-dot"></i> {country}</h4>
                    <p>{excerpt}</p>
                </div>
                <div>
                    <button className="donate-btn">Make Donation</button>
                </div>
            </article>
        </div>
    )
}
const Gallery = () => {
    return (<section id="gallery">
        {
            places.map(({ country, img, excerpt }, index) => {
                return <Place key={index} country={country} img={img} excerpt={excerpt} />
            })
        }
    </section>);
}

export default Gallery;