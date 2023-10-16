import React from 'react'

function Header() {
    return(
        <div>
          <header className="px-8 py-4">
            <nav className="grid grid-cols-2 ">
                <div className="flex items-center">
                    <div className="flex">
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="logo" className="w-36"></img>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green">Everything</li>
                            <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green">Groceries</li>
                            <li className="px-5 cursor-pointer transition ease-in-out delay-75 hover:text-nature-green">Juice</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <div>
                        <ul className="flex">
                            <li className="px-5 transition ease-in-out delay-75 hover:text-nature-green cursor-pointer">About</li>
                            <li className="px-5 transition ease-in-out delay-75 hover:text-nature-green cursor-pointer">Contact</li>
                            <li className="px-5"><a href="#shopping-cart"><img src={require("../shopping-basket.png")} className="h-5 w-5"></img></a></li>
                            <li className="px-5"><a href="#login"><img src={require("../user.png")} className = "h-5 w-5" ></img></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
          </header>  
        </div>
    )
}

export default Header;