import React from "react";



const BrandingClientsCard = (props) => {
   
    return(
        <div className="b-client-img flex justify-center">
            <img src={props.imgLink} alt="" />
        </div>
    )
}

export default BrandingClientsCard;
