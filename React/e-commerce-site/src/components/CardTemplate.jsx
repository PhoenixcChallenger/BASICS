import React from 'react'

function CardTemplate(props) {
    return (
        <section className="w-1/4">
            <div className="flex bg-[#333333] p-9 m-2 rounded-sm">
                <div>
                    <img src={props.image} className="w-8 h-8 mr-3" alt='' ></img>
                </div>
                <div>
                    <h1 className="font-bold text-xl text-white">{props.head}</h1>
                    <p className="text-white">{props.para}</p>
                </div>
            </div>
        </section>
    )
}

export default CardTemplate; 