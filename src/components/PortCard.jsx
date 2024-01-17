import React from "react";


const PortCard = (props)=> {
    return(
        <a href={props.link}>
            <div className="port-card port-card-1">
                <div className="port-img pb-6 w-full rounded-lg overflow-hidden">
                    <img className="object-contain" src={props.cardImg} alt="card image" />
                </div>
                <span className="text-white text-4xl mb-2 font-extrabold card-link">{props.cardLink}</span>
                <p className="text-white text-xl port-card-det">{props.cardDet}</p>
            </div>
        </a>
    )
}

export default PortCard;