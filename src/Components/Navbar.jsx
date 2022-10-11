import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar" >
            <nav className='#283593 indigo darken-1' style={{padding:'0px 50px'}}>
                <div className="nav-wrapper">
                    <a href="https://www.bloomberg.com/europe" target={'_blank'} className="brand-logo">Bloomberg</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;