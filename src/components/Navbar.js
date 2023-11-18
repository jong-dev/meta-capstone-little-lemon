import Logo from '../assets/Logo.jpg';
import './Navbar.css';

function Navbar () {
    return (
        <>
            <nav className='navBar'>
                <img src={Logo} className='imgLogo'/>
                <ul>
                    <li><a href="/home">Homepage</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Menu</a></li>
                    <li><a href="/blog">Reservations</a></li>
                    <li><a href="/blog">Order Online</a></li>
                    <li><a href="/blog">Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;