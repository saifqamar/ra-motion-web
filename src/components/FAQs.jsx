import React, { useState } from "react";
import Faq from "./Faq";


const FAQs = () => {
    


    return(
        <div className="column container">
            <div className="b2b-body pb-16">
                <h1 className="text-4xl font-extrabold pb-8 max-w-4xl">FAQs</h1>
                <div className="all-faqs">
                    <Faq id={0}/>
                    <Faq id={1}/>
                    <Faq id={2}/>
                </div>
                
                
                {/* <p className="pb-6 text-2xl max-w-4xl">
                    {props.para1}
                </p>

                <p className="pb-10 text-2xl max-w-4xl">
                    {props.para2}
                </p> */}
            </div>
        </div>
    )
}


export default FAQs;