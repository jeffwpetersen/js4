import * as React from 'react';
import CoupaLogo from "../images/svg/coupa-logo.svg" // Tell webpack this JS file uses this image
import Arrow from "../images/svg/arrow.svg" // Tell webpack this JS file uses this image
import { scroller } from "react-scroll"; // Tell webpack this JS file uses this image

const ContentBlocksCoupa = () => {
  return (
    <section className="section coupa-site py-4 sm:py-8" id="COUPA">
      <div className="w-full bg-white bg-opacity-90">
        <div className="callout max-w-screen-lg px-2 sm:px-4 flex flex-col md:flex-row md:gap-20">
          <div className="margin-bottom w-full sm:w-3/4 md:w-1/2 mx-auto flex">
            <img src={CoupaLogo} alt="Coupa Logo" />
          </div>
          <div className="md:w-2/3">
            <h3 className="font-extrabold text-lg sm:text-2xl text-zinc-900 uppercase my-4 sm:my-8">Coupa is a Leading SaaS Business Management Platform</h3>
            <div className="half-space"><p className="font-light text-md sm:text-lg text-zinc-500 my-4 sm:my-8">We engineered the Coupa corporate website on the Drupal platform. Using the translation API we brought the site to 5 international markets.
            </p>
              <a href="http://coupa.com" target="_blank" rel="noreferrer" className="text-purple-purple font-extrabold sm:text-xl">Coupa.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pager">
        <button onClick={() => scroller.scrollTo('kclibrary', {
          smooth: true,
          offset: 0,
          duration: 500
        })}>
          <div className="arrow hidden sm:block"><span><img src={Arrow} alt="Arrow Icon" /></span></div>
          <div className="sm:hidden text-center mt-4 text-pink-500 font-bold"></div>
        </button>
      </div>
    </section>
  )
}
export default ContentBlocksCoupa
