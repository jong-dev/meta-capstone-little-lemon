import './Footer.css'

function Footer () {
    return (
        <>
            <footer>
                <div className='footer-img'></div>
                <div className='footer-txt'>
                    <div className='footer-nav'>
                        <h5>Doormat Navigation</h5>
                        <ul>
                            <li><a href="/home">Homepage</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Menu</a></li>
                            <li><a href="/blog">Reservations</a></li>
                            <li><a href="/blog">Order Online</a></li>
                            <li><a href="/blog">Login</a></li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <h5>Contact</h5>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                        </div>
                    <div className='footer-contact'>
                        <h5>Social Media Links</h5>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;