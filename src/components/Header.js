import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner text*/}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are  family owned Mediterraneran restaurant, focused on tradtional recipe served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                {/* banner images*/}
                <div className='banner-img'>
                    <img src={bannerImg} alt=""/>
                </div>
            </section>
        </header>
    );
};

export default Header;