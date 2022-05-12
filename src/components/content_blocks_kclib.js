import * as React from 'react';
import CompostHeroLogo from "../images/kclibrary_icons.png";
import Arrow from "../images/svg/arrow.svg";
import BackgroundImage from "../images/kclibrary_icons.png" // Tell webpack this JS file uses this image


const ContentBlocksKclib = () => {
    return (
        <section className="kclibrary" id="kclibrary" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div class="lib-content flex items-center justify-center">
                <div class="grid grid-cols-5 gap-4 max-w-screen-md self-center text-white">
                    <div class="col-span-2 flex">
                        <h1 class="font-thin text-5xl leading-[5rem] mb-20 font-['latohairline'] my-auto">THE KANSAS CITY PUBLIC LIBRARY</h1>
                    </div>

                    <div class="col-span-3">
                        <h2 class="uppercase text-3xl font-bold font-body mb-6">Website redesign & Drupal migration.</h2>
                        <p class="font-body text-md mb-6 font-light">The upgrade of the website was an opportunity to create a more flexible and
                            responsive user interface. Library services were organized into a more appropriate and
                            understandable
                            interface. The new <a class="white underline-text" href="http://kclibrary.org">kclibrary.org</a>
                            site is now fully responsive.
                        </p>
                        <p class="lighter font-body text-md mb-6 font-light"><strong>Usability and User Interface Design Management</strong><br/>
                            Extensive user testing was done after the site was designed and was widely regarded as
                            understandable and easy to use by all focus groups.
                        </p>
                    </div>
                </div>

            </div>
            <div className="pager"><a className="scroll" href="js4/src/components/content_blocks#kclibrary">
                <div className="arrow"><span><img src={Arrow}/></span></div>
            </a></div>
        </section>
    )
}

export default ContentBlocksKclib
