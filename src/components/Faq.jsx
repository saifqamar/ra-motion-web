import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Faq = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    console.log(props.id)

    const content = document.getElementsByClassName('c-content');

    const collapse = () => {
        setIsOpen(!isOpen); 
        console.log(isOpen);

    }
    return(
        <div className="faq border-t-2">
            <div onClick={collapse} className="py-8 flex justify-between items-center faq-body">
                <h3 className="text-2xl font-bold">What is B2B branding?</h3>
                <FontAwesomeIcon className="" icon={icon({name: 'plus', style: 'solid', size:'2x'})} />
            </div>

            <div className="c-content">
                <div className="c-inner mb-3.5">
                    <p className="text-2xl">B2B branding is a process managed by agencies like ours, aiming to establish unique, resonant brands within the business-to-business market. It's about setting your product or service apart from competitors, and creating a strong reputation that appeals specifically to other businesses</p>
                </div>

            </div>

        </div>
    )
}

export default Faq;