import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>
                Title!!!
            </h1>
            <nav>
                <ul>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <button>FI</button>
                    <button>EN</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;