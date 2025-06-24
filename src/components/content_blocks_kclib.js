import * as React from 'react';
import Arrow from "../images/svg/arrow.svg";
import BackgroundImage from "../images/kclibrary_icons.png"
import scrollTo from "gatsby-plugin-smoothscroll"; // Tell webpack this JS file uses this image


const ContentBlocksKclib = () => {
    return (
        <section className="section kclibrary" id="kclibrary" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="lib-content flex items-center justify-center">
                <div className="grid md:grid-cols-5 gap-4 max-w-screen-md self-center text-white">
                    <div className="col-span-2 flex">
                        <h1 className="font-thin text-3xl md:text-5xl leading-[5rem] mb:10 md:mb-20 font-['latohairline'] my-auto">THE KANSAS CITY PUBLIC LIBRARY</h1>
                    </div>

                    <div className="col-span-3">
                        <h2 className="uppercase text-xl md:text-3xl font-bold font-body mb-6">Website redesign & Drupal migration.</h2>
                        <p className="font-body text-md mb-3 md:mb-6 font-light">The upgrade of the website was an opportunity to create a more flexible and
                            responsive user interface. Library services were organized into a more appropriate and
                            understandable
                            interface. The new <a className="white underline-text" href="http://kclibrary.org" target="_blank" rel="noreferrer">kclibrary.org</a> site is now fully responsive.
                        </p>
                        <p className="lighter font-body text-md mb-6 font-light"><strong>Usability and User Interface Design Management</strong><br/>
                            Extensive user testing was done after the site was designed and was widely regarded as
                            understandable and easy to use by all focus groups.
                        </p>
                    </div>
                </div>

            </div>
            <div className="pager"><button onClick={() => scrollTo('#contact')}>
                <div className="arrow"><span><img src={Arrow} alt="Arrow Icon"/></span></div>
            </button></div>
        </section>
    )
}

export default ContentBlocksKclib
