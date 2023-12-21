import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-footer-blue">
                <div className="grid py-20 grid-cols-3 max-w-[1200px] m-auto">
                    <div>
                        <div className="mb-10">
                            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" className="w-36" alt='logo'></img>
                        </div>
                        <div className="flex mb-10">
                            <p className="text-white/60 max-w-xs">Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white mb-11 text-3xl font-bold">Quick Links</h1>
                        <div className="mb-11">
                            <ul>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">About</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">Cart</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">Checkout</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">Contact</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">Home</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">My account</li>
                                <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white">Shop</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-white mb-4 text-3xl font-bold">Site Links</h1>
                            <div>
                                <ul>
                                    <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white"><a href='/'>Privacy Policy</a></li>
                                    <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white"><a href='/'>Shipping Details</a></li>
                                    <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white"><a href='/'>Offers Coupons</a></li>
                                    <li className="text-white/60 transition ease-in-out delay-75 cursor-pointer hover:text-white"><a href='/'>Terms & Conditions</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-11">
                            <h1 className="text-white text-3xl font-bold mb-4">Download Our Mobile App</h1>
                            <div>
                                <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-3xl font-bold mb-4">Quick Links</h1>
                            <div className="mb-7">
                                <ul>
                                    <li className="text-nature-green transition ease-in-out delay-100 cursor-pointer hover:text-nature-green/50">Know More About Us</li>
                                    <li className="text-nature-green transition ease-in-out delay-100 cursor-pointer hover:text-nature-green/50">Visit Store</li>
                                    <li className="text-nature-green transition ease-in-out delay-100 cursor-pointer hover:text-nature-green/50">Let's Connect</li>
                                    <li className="text-nature-green transition ease-in-out delay-100 cursor-pointer hover:text-nature-green/50">Locate Stores</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex justify-between w-72">
                                    <li><a href='/'><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" className="h-10" alt='play-store' ></img></a></li>
                                    <li><a href='/'><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" className="h-10" alt='app-store' ></img></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-0 h-px bg-white/10"></hr>
                <div className="grid py-7 max-w-[1200px] m-auto">
                    <div className="flex items-center justify-center gap-2">
                        <div>
                            <p className="text-white/60">Copyright © 2023 | Organic Store</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;