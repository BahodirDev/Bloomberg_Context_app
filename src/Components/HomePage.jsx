import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function HomePage(props) {
    return (
        <div className='home'>
            <div className='home_text'>
                <Link to={'/lists'}>
                <h2>Bloomberg Market</h2>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;