import * as React from "react"
import { useEffect } from "react"
import {Helmet} from 'react-helmet'

import TitleHero from "../components/TitleHero"
import StructuredData from "../components/StructuredData"
import ContentBlocksKclib from "../components/content_blocks_kclib"
import ContentBlocksPurple from "../components/content_blocks_purple"
import ContentBlocksCoupaSucks from "../components/content_blocks_coupasucks"

import Footer from "../components/Footer"
import Arrow from "../images/svg/arrow.svg";
import { Link, Element, scroller } from 'react-scroll';

// markup
const IndexPage = () => {
    useEffect(() => {
        // Check if IntersectionObserver is supported
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            // Set up Intersection Observer to add animation class when sections come into view
            // rootMargin follows CSS margin syntax: top right bottom left
            // - Positive values expand the intersection area (trigger earlier)
            // - Negative values shrink the intersection area (trigger later)
            // - For bottom margin: negative value means trigger X pixels before reaching viewport bottom
            const observerOptions = {
                root: null, // Use the viewport as the root
                rootMargin: '0px 0px -400px 0px', // Negative bottom margin to trigger when bottom of section passes 200px above the bottom of viewport
                threshold: 0 // Trigger as soon as any part of the element is visible
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    // Check if the section is entering the viewport
                    if (entry.isIntersecting) {
                        // Find the first div child of the section
                        // Use ':scope > div' selector to get only direct children
                        const firstDiv = entry.target.querySelector(':scope > div');
                        if (firstDiv) {
                            // Add the animation class
                            firstDiv.classList.add('fade-in-visible');
                        }
                        // Unobserve the section after animation is triggered to prevent repeats
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all section elements
            document.querySelectorAll('section').forEach(section => {
                sectionObserver.observe(section);
            });

            // Clean up function to disconnect the observer when component unmounts
            return () => {
                sectionObserver.disconnect();
            };
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            // Just add the animation class to all section > div elements immediately
            document.querySelectorAll('section > div').forEach(div => {
                div.classList.add('fade-in-visible');
            });
        }
    }, []);

    return (
        <div className="js-outer font-body">
            <Helmet>
                <html lang="en"/>
                <title>Juniper Studio Design and Development</title>
                <meta name="description" content="Helmet application"/>
            </Helmet>
            <StructuredData>More Helmet Data</StructuredData>
            <header className="js-header-wrapper">
                <div className="container">
                    <TitleHero>
                        Logo and intro text
                    </TitleHero>
                </div>
            </header>
            <div className="js-main-wrapper ">
                <div className="container mt-10 md:mt-20 pb-10 md:pb-20 ">
                    <div className="md:flex gap-12">
                        <div className="md:w-1/3 slide-in delay-100">

                            <div className="text-2xl md:text-3xl xl:text-6xl text-theme-comp-dark font-bold align-baseline mb-[28px] leading-10 md:leading-14">Build<br/> Design<br/> Develop<br/> Deploy<br/> Consult<br/> Create.</div>
                          <h1 className="brand-statement text-md md:text-lg font-extralight text-zinc-700 leading-8 md:leading-11"><b>Twenty years of experience</b> and a team of helpful professionals, we have solutions to elevate your organization.
                              If you're in need of <span className="text-black">engineering solutions, design
                    management</span> or <span className="text-black">software development</span> get in touch and let us
                                    know what problems we can solve.<br/>
                                <span className="text-black">We Do That.</span></h1>
                            <div><p className="contact-us text-pink-500 my-10"><strong><Link to="contact" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="text-pink-500 react-scroll-link" style={{cursor: 'pointer'}}>Contact
                                us.</Link></strong></p></div>

                        </div>
                        <div className="md:w-1/3 md:text-md font-light text-zinc-500 slide-in delay-200">

                            <div className="text-lg md:text-xl text-zinc-700 font-semibold align-baseline pt-3 mb-[4px]">Currently...</div>
                            <h2 className="mb-10 text-zinc-900 leading-8">We are partnering with <b>Ash & Hickory Co.,</b> an executive office space manufacturer, retailer and exhibitor. We are creating an exceptional user experience and technology stack to bring this e-commerce site to life.
                            </h2>
                          <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Recently...</div>
                          <h4 className="font-bold text-zinc-900">Purple</h4>
                          <h3 className="mb-10 text-zinc-900 leading-8">We engineered and executed solutions for Purple.com. We contributed to much of the site and completed a complete overhaul of the blog. <Link to="PURPLE" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>purple.com.</Link>
                          </h3>
                            <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Previously...</div>
                          <h4 className="font-bold text-zinc-900">Coupa</h4>
                          <h3 className="mb-10 text-zinc-900 leading-8"> We engineered the corporate website for Coupa, a premier silicon valley SaaS company. We migrated their flat-code site to a modern CMS, We project managed and engineered a multilingual site architecture. Deployed Drupal, completed development and
                            containerized Docker and Kubernetes DevOps engineering for <Link to="COUPA" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>coupa.com.</Link>
                          </h3>
                          <h4 className="font-bold text-zinc-900">The Kansas City Public Library</h4>
                            <p className="text-zinc-500 leading-8 mb-10">
                              <a href="https://kclibrary.org" target="_blank" rel="noreferrer">The Kansas City Public Library</a> We overhauled the Kansas City Public Library Website. We designed a mega-menu interface and passed usability testing.</p>
                          <p className="text-zinc-500 leading-8 mb-10">
                            <a href="http://pendergastkc.org" target="_blank" rel="noreferrer">The Pendergast Years | Kansas City
                              in the Jazz Age & Great Depression.</a> A Kansas City Public Library American History Project. Tom Pendergast was a Democrat and Kansas City political
                            boss whose corruption was legendary. This American history site explores the decade.</p><p className="text-zinc-400 leading-8 mb-8">
                        </p>

                        </div>
                        <div className="md:w-1/3 slide-in delay-300">
                            <div className="project-folder font-thin text-zinc-500 text-base leading-8">
                                <div className="text-lg md:text-3xl text-theme-comp-dark font-thin pt-1">Projects Folder</div>
                              <br/>
                                <div>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><Link to="CPH" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>Sub70</Link></span> -
                                    E-commerce Shopify site for a luxury golf apparel company.</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><Link to="CPH" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>ToyWatch</Link></span> -
                                    E-commerce site for a luxury watch brand.</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><Link to="CPH" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>Westport Spice</Link></span> -
                                    E-commerce Magento site for spice blend manufacturer.</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><Link to="CPH" smooth={true} duration={500} spy={true} ignoreCancelEvents={true} className="react-scroll-link" style={{cursor: 'pointer'}}>Morgenthal Frederics</Link></span> -
                                    Marketing site for luxury eye-ware retailer.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="pager hidden md:block"><button onClick={() => scroller.scrollTo('PURPLE', {
                    smooth: true,
                    offset: 0,
                    duration: 500
                })} aria-label="Scroll to Purple section">
                    <div className="arrow"><span><img src={Arrow} alt="Arrow Icon"/></span></div>
                </button></div>
            </div>
          <ContentBlocksPurple>
            Purple
          </ContentBlocksPurple>
          <ContentBlocksCoupaSucks>
            Coupa
          </ContentBlocksCoupaSucks>
          <ContentBlocksKclib>
              Compost Hero
          </ContentBlocksKclib>
          <Footer>
              footer
          </Footer>
        </div>
    )
}

export default IndexPage
