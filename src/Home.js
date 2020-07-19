import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            {/* Product */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Logitech G935 Wireless Gaming RGB Headset, 7.1 Surround Sound, DTS Headphone:X 2.0, 50 mm Pro-G Drivers, 2.4 GHz Wireless , Flip-to-Mute Mic, PC/Mac/Xbox One/PS4/Nintendo Switch - Black"
                    price={104.40}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71FkbQzfOYL._AC_SL1500_.jpg" />
                <Product
                    id="23423562342"
                    title="MSI GF75 9SC 252UK Thin 17.3 - Core i5 9300H - 8 GB RAM - 256 GB SSD"
                    price={913.50}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71YGqMW6rBL._AC_SL1500_.jpg" />
            </div>
            <div className="home__row">
                <Product
                    id="23423423"
                    title="LED Strip Lights with Remote, 6M USB LED Lights 2x3M SHINELINE RGB SMD 5050 Color Changing with 24 Key Remote Control Dimmer TV Backlight Mood Light for Home Kitchen Christmas Party Decoration [Energy Class A+]"
                    price={11.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fbKx8YLwL._AC_SL1500_.jpg" />
                <Product
                    id="2342352342"
                    title="Suplong Expandable Garden Hose 3 Times Expandable Flexible Hose Pipe With Hose Gun Spray/Brass Hose Connector Fittings/Hose Storage Bag (Black-50)"
                    price={14.41}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81BUDX2nq5L._AC_SL1500_.jpg" />
                <Product
                    id="2342352342"
                    title="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark"
                    price={7.47}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_SL1500_.jpg" />
            </div>
            <div className="home__row">
                <Product
                    id="2342352342"
                    title="Samsung 50 TU7110 Crystal UHD 4K HDR Smart TV - 2020 model [Amazon Exclusive] [Energy Class A]"
                    price={399.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81pizRn9ieL._AC_SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home