import './Specials.css'

function Specials () {
    return (
        <>
            <div className='special-container'>
                <div className='special-top'>
                    <h1>This week's Specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div className='special-bottom-container'>
                    <div className='special-bottom'>
                        <div className='special-menu'>
                            <div className='special-img-1'></div>
                            <div className='special-name-price'>
                                <h3>Greek Salad</h3>
                                <p>$14.95</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipiscing elit, sed do<br></br>
                            eiusmod tempor incididunt ut<br></br>
                            labore et dolore magna aliqua.</p>
                            <h5>Order a delivery</h5>
                        </div>
                    </div>
                    <div className='special-bottom'>
                        <div className='special-menu'>
                            <div className='special-img-2'></div>
                            <div className='special-name-price'>
                                <h3>Bruchetta</h3>
                                <p>$6.95</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipiscing elit, sed do<br></br>
                            eiusmod tempor incididunt ut<br></br>
                            labore et dolore magna aliqua.</p>
                            <h5>Order a delivery</h5>
                        </div>
                    </div>
                    <div className='special-bottom'>
                        <div className='special-menu'>
                            <div className='special-img-3'></div>
                            <div className='special-name-price'>
                                <h3>Lemon Dessert</h3>
                                <p>$6.35</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipiscing elit, sed do<br></br>
                            eiusmod tempor incididunt ut<br></br>
                            labore et dolore magna aliqua.</p>
                            <h5>Order a delivery</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specials;