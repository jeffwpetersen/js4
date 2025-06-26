import * as React from 'react';
import PurpleLogo from "../images/svg/purple-logo.svg" // Tell webpack this JS file uses this image
import Arrow from "../images/svg/arrow.svg" // Tell webpack this JS file uses this image
import BackgroundImage from "../images/purple-grid.jpg"
import { scroller } from "react-scroll"; // Tell webpack this JS file uses this image



const ContentBlocksPurple = () => {
  return (
    <section className="section purple-site py-4 sm:py-8" style={{backgroundImage: `url(${BackgroundImage})`}} id="PURPLE">
      <div className="w-full bg-white bg-opacity-90">
        <div className="callout max-w-screen-lg px-2 sm:px-4">
          <div className="margin-bottom w-full sm:w-3/4 md:w-1/2 mx-auto">
            <img src={PurpleLogo} alt="Purple Logo" />
          </div>
          <div>
            <h2 className="font-extrabold text-xl sm:text-4xl text-zinc-900 uppercase my-4 sm:my-8">Less pain. Better sleep.</h2>
            <div className="half-space"><p className="font-light text-md sm:text-2xl text-zinc-500 my-4 sm:my-8">We helped Purple make their Path to Premium initiative a reality by creating smooth, functional navigation and giving their blog a complete overhaul. We improved site performance, worked on their React based components and managed Drupal development.
            </p>
            <a href="http://purple.com" target="_blank" rel="noreferrer" className="text-purple-purple font-extrabold sm:text-2xl">Purple.com</a>
              </div>
          </div>
        </div>
        <div className="pager">
          <button onClick={() => scroller.scrollTo('CPH', {
            smooth: true,
            offset: 0,
            duration: 500
          })}>
          <div className="arrow hidden sm:block"><span><img src={Arrow} alt="Arrow Icon" /></span></div>
          <div className="sm:hidden text-center mt-4 text-pink-500 font-bold"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
export default ContentBlocksPurple
