import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="bg"></div>
            <div className="content">
                <h1>Your Help Matters.</h1>
                <p>Together we help victims of floods around the world</p>
                <p>100% of your donations go to the victims</p>
                <p><a href="/hiw">How It Works →</a></p>
                <p><a href="/help">Help With Our Campaigns →</a></p>
                <div>
                    <button className='donate-btn'>Make Donation</button>
                </div>
            </div>

        </header>
    );
}

export default Header;