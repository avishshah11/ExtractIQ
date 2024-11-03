import '../../styles/header.css';

const Header = () => {
    return (
        <header className="header" style={{
            transform: "translate(0, 0) rotate(0deg) scale(1)",
            backgroundColor: "rgba(255, 255, 255, 0)"
        }} >
            <nav className="nav nav--desk nav--primary">
                <div className='nav__events'>
                    <ul role='list'>
                        <li>
                            <a href='/explore'>Explore</a>
                        </li>
                        <li>
                            <a href='/events'>Events</a>
                        </li>
                        <li>
                            <a href='/venue'>Venue</a>
                        </li>
                        <li>
                            <a href='/artist'>Artist</a>
                        </li>
                    </ul>
                </div>
                <div className='nav_logo'>
                    <a href='/'> </a>
                </div>
                <div className='nav__cta'>
                    <div className='nav__ctabox'>
                        <ul role='list'>
                            <li>
                                <a href='/explore'>About</a>
                            </li>
                            <li>
                                <a href='/events'>Help</a>
                            </li>
                        </ul>
                        <button type='button' className="button button--base false false button--primary">
                            <span>
                                <span>
                                    Sign Up
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='nav_hamburger_group'>
                    <a href='/'> </a>
                </div>
            </nav>
        </header>
    )
};


export default Header;