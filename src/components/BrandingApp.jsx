import React from "react";


const BrandingApp = (props) => {
    return(
        <div className="column container">
            <div className="pt-32 pb-16 b2b-body">
                <h1 className="text-4xl font-extrabold pb-8 max-w-4xl brandinapp-heading">{props.heading}</h1>
                <p className="pb-6 text-2xl max-w-4xl brandingapp-para">
                    {props.para1}
                </p>

                <p className="pb-10 text-2xl max-w-4xl brandingapp-para brandingapp-para2 ">
                    {props.para2}
                </p>
            </div>
        </div>
    )
}

export default BrandingApp;