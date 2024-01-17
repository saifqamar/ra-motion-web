import React from "react";
import BrandingClientsCard from "./BrandingClientsCards";


const BrandingClients = (props) => {
    return(
        <div className="column container">
            <div className="b2b-body pb-32">
                <h1 className="text-4xl font-extrabold pb-8 max-w-4xl">Our B2B branding clients</h1>
                <div className=" bg-neutral-100 grid auto-rows-auto grid-cols-4 bc-whole-sec">
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    <BrandingClientsCard imgLink={"https://www.datocms-assets.com/22695/1582115813-logosalesforce.svg"} />
                    
                </div>
            </div>
        </div>
    )
}

export default BrandingClients;