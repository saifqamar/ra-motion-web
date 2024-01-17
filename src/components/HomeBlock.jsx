import React from "react";


const HomeBlock = () => {

    return(
        <div className="container column">

            <div className="home-block">
                {/* Section 1 */}
                <div className="hb-sec1">
                    <h1>For startups</h1>
                    <p className="hb-det">Since 2009 we’ve been helping startups design their product and brands. 
                        With more than <b>$3.5B in exits</b> and <b>$750M+</b> raised by our startup clients,
                        our design services have become an inseparable part of their success.
                    </p>

                    <div className="link link-1">
                        <a href="#">Branding</a>
                        
                    </div>

                    <div className="link link-1">
                        <a href="#">Marketing Websites</a>
                    
                    </div>

                    <div className="link link-1">
                        <a href="#">UI/UX</a>
                    </div>

                    

                </div>

                {/* Section 2 */}

                <div className="hb-sec2">
                    <div className="blocks">
                        <div className="block-img img1">
                            <img src="https://www.datocms-assets.com/22695/1582115762-logodescript.svg" alt="" />
                        </div>

                        <div className="block-img img2">
                            <img src="https://www.datocms-assets.com/22695/1628084534-truebill.svg" alt="" />
                        </div>

                        <div className="block-img img3">
                            <img src="https://www.datocms-assets.com/22695/1608381009-transcend.svg" alt="" />
                        </div>

                        <div className="block-img img4">
                            <img src="https://www.datocms-assets.com/22695/1608380895-letter.svg" alt="" />
                        </div>

                        <div className="block-img img5">
                            <img src="https://www.datocms-assets.com/22695/1582115820-logostreamlit.svg" alt="" />
                        </div>

                        <div className="block-img img6">
                            <img src="https://www.datocms-assets.com/22695/1582115753-logocafex.svg" alt="" />
                        </div>

                        <div className="block-img img7">
                            <img src="https://www.datocms-assets.com/22695/1657896395-nextmv.svg" alt="" />
                        </div>

                        <div className="block-img img8">
                            <img src="https://www.datocms-assets.com/22695/1608380684-cypress.svg" alt="" />
                        </div>

                        <div className="block-img img9">
                            <img src="https://www.datocms-assets.com/22695/1582115752-logobitmoji.svg" alt="" />
                        </div>      
                        <div className="block-img img10">
                            <img src="https://www.datocms-assets.com/22695/1582115786-logojune.svg" alt="" />
                        </div>

                        <div className="block-img img11">
                            <img src="https://www.datocms-assets.com/22695/1582115766-logofilecoin.svg" alt="" />
                        </div>

                        <div className="block-img img12">
                            <img src="https://www.datocms-assets.com/22695/1582115790-logokyber-network.svg" alt="" />
                        </div>

                        <div className="block-img img13">
                            <img src="https://www.datocms-assets.com/22695/1582115832-logowyre.svg" alt="" />
                        </div>

                        <div className="block-img last build">
                            <a href="">Build with us</a>
                        </div>
                    </div>
                </div>

                {/* section 3 */}
                <div className="hb-sec3">
                    <div className="top-img">
                        <img src="https://www.datocms-assets.com/22695/1670580137-truebill2.svg" alt="" />
                    </div>

                    <h2>$1.27B</h2>

                    <h3>Acquisition of Truebill</h3>

                    <p>Brand identity design for a platform that manages recurring bills.</p>
                    
                    <div className="link link-true">
                        <a href="#">Case Study</a>
                    </div>
                </div>

                {/* section 4 */}
                <div className="hb-sec3">
                    <div className="top-img">
                        <img src="https://www.datocms-assets.com/22695/1670594315-cellebrite2.svg" alt="" />
                    </div>

                    <h2>$2.4B</h2>

                    <h3>IPO for Cellebrite</h3>

                    <p>Ongoing design partner for the forensics solutions company.</p>
                    
                    <div className="link link-true">
                        <a href="#">Case Study</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default HomeBlock;