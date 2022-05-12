import * as React from 'react';
import CompostHeroLogo from "../images/compost_hero_logo.png" // Tell webpack this JS file uses this image
import Arrow from "../images/svg/arrow.svg" // Tell webpack this JS file uses this image
import BackgroundImage from "../images/sun-graphic-compost-hero-full.png" // Tell webpack this JS file uses this image



const ContentBlocksCompost = () => {
    return (
        <section className="section compost-hero" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="callout max-w-screen-lg">
                <div className="margin-bottom">
                    <img src={CompostHeroLogo} alt="Compost Hero Logo" />
                </div>
                <div>
                    <h2 className="font-extrabold text-3xl text-zinc-900 uppercase my-8">There is no better way to improve the health of your soil than leaf compost.</h2>
                    <div className="half-space"><p className="font-light text-2xl text-zinc-500 my-8">The Compost Hero project seeks to show how easy it is to
                        create a great garden by using the Compost Hero system to turn your fall leaves into high quality
                        leaf compost mulch.
                    </p></div>
                </div>
            </div>
            <div className="pager"><a className="scroll" href="js4/src/components/content_blocks#kclibrary">
                <div className="arrow"><span><img src={Arrow} /></span></div>
            </a></div>
        </section>
    )
}
export default ContentBlocksCompost
