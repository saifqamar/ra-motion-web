import React from "react";
import PortCard from "./PortCard";


const B2bPortfoli = () => {
    return(
        <div className="bg-neutral-950">
            <div className="container">
                <div className="column b2b-card-body pt-32 pb-32">
                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1637936818-salesforce-cover-800x600.jpg'} 
                        cardLink="Salesforce" 
                        cardDet="Developing micro-interactions for the Lightning Design System" 
                    />

                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1703792875-citrix-work-cover-1.jpeg'} 
                        cardLink="Citrix" 
                        cardDet="Iconography for a secure workspace software company with over 16 million cloud users" 
                    />

                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1587567011-cellebrite.jpg'} 
                        cardLink="Cellebrite" 
                        cardDet="Iconography guidelines, assets and web design for a digital forensics solution company" 
                    />

                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1587567011-cellebrite.jpg'} 
                        cardLink="Proemion" 
                        cardDet="Iconography guidelines, assets and web design for a digital forensics solution company" 
                    />

                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1587567011-cellebrite.jpg'} 
                        cardLink="Proemion" 
                        cardDet="Iconography guidelines, assets and web design for a digital forensics solution company" 
                    />

                    <PortCard 
                        link="" 
                        cardImg={'https://www.datocms-assets.com/22695/1587567011-cellebrite.jpg'} 
                        cardLink="Proemion" 
                        cardDet="Iconography guidelines, assets and web design for a digital forensics solution company" 
                    />


                        
                </div>
            </div>
        </div>
    )
}

export default B2bPortfoli;