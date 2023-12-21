import React from 'react'
import CardTemplate from './CardTemplate'

function CardHome() {
    return(
        <section className=" bg-black ">
            <div className="flex justify-around m-auto max-w-[1200px] py-10">
                <CardTemplate head="Free Shipping" para="Above $5 Only"  image={require("../images/cargo-truck.png")}/>
                <CardTemplate head="Certified Organic" para="100% Guarantee" image={require("../images/high-quality.png")}/>
                <CardTemplate head="Huge Savings" para="At Lowest Price" image={require("../images/money.png")}/>
                <CardTemplate head="Easy Returns" para="No Questions Asked" image={require("../images/return-box.png")}/>
            </div>
        </section>
    )
}

export default CardHome; 