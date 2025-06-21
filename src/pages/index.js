import * as React from "react"
import {Helmet} from 'react-helmet'

import TitleHero from "../components/TitleHero"
import StructuredData from "../components/StructuredData"
import ContentBlocksCompost from "../components/content_blocks_compost"
import ContentBlocksKclib from "../components/content_blocks_kclib"
import Footer from "../components/Footer"
import ReactVersion from "../components/ReactVersion"
import Arrow from "../images/svg/arrow.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';

// markup
const IndexPage = () => {
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
                        <div className="md:w-1/3">

                            <div className="text-2xl md:text-3xl xl:text-6xl text-theme-comp-dark font-bold align-baseline mb-[28px] leading-10 md:leading-14">Design<br/> Develop<br/> Build<br/> Deploy<br/> Consult<br/> Create.</div>
                          <h1 className="brand-statement text-md md:text-lg font-extralight text-zinc-400 leading-8 md:leading-11"><b>Twenty years of experience</b> and a team of helpful professionals, we have solutions to elevate your organization.
                              If you're in need of <span className="text-black">engineering solutions, design
                    management</span> or <span className="text-black">software development</span> get in touch and let us
                                    know what problems we can solve.<br/>
                                <span className="text-black">We Do That.</span></h1>
                            <div><p className="contact-us text-pink-500 my-10"><strong><a href="#contact" className="scroll text-pink-500">Contact
                                us.</a></strong></p></div>

                        </div>
                        <div className="md:w-1/3 md:text-md font-light text-zinc-500">

                            <div className="text-lg md:text-xl text-zinc-700 font-semibold align-baseline pt-3 mb-[4px]">Currently...</div>
                            <h2 className="mb-10 text-zinc-900 leading-8">We are partnering with <b>Ash & Hickory Co.,</b> an executive office space manufacturer, retailer and exhibitor. We are creating an exceptional user experience and technology stack to bring this e-commerce site to life.
                            </h2>
                          <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Recently...</div>
                          <h4>Purple</h4>
                          <h3 className="mb-10 text-zinc-900 leading-8">We executed and engineered solutions for Purple.com the matress manufacturer. We contributed to much of the site and completed a complete overhaul of the blog. <a href="https://purple.com/blog" target="_blank" rel="noreferrer">purple.com.</a>
                          </h3>
                            <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Previously...</div>
                          <h4>Coupa</h4>
                          <h3 className="mb-10 text-zinc-900 leading-8"> We project managed and engineered site architecture. Deployed Drupal, completed development and
                            DevOps for <a href="http://www.coupa.com" target="_blank" rel="noreferrer">coupa.com.</a> The site is multilingual.
                          </h3>
                          <h4>The Kansas City Public Library</h4>
                            <p className="text-zinc-400 leading-8 mb-10"><a href="https://kclibrary.org" target="_blank" rel="noreferrer">The Kansas City Public Library</a> &  <a href="http://pendergastkc.org" target="_blank" rel="noreferrer">The Pendergast Years | Kansas City
                                in the Jazz Age & Great Depression.</a> Tom Pendergast was a Democrat and Kansas City political
                                boss whose corruption was legendary. This American history site explores the decade.</p><p className="text-zinc-400 leading-8 mb-8">
                           </p>

                        </div>
                        <div className="md:w-1/3">

                            <div className="project-folder font-thin text-zinc-400 text-base leading-8">
                                <div className="text-lg md:text-3xl text-theme-comp-dark font-thin pt-1">Projects Folder</div>
                              <br/>
                                <div>
                                    <p className="lighter mb-8 md:text-lg"><span className="pink"><a href="http://pendergastkc.org" target="_blank" rel="noreferrer">The Pendergast Years</a> </span>
                                        - Kansas City in the Jazz Age & Great Depression.
                                    </p>
                                    <p className="lighter mb-8 md:text-lg"><span className="pink"><a href="http://kclibrary.org" target="_blank" rel="noreferrer"> <a
                                        className="scroll"
                                        href="#kclibrary">The Kansas City Public Library</a></a> </span>
                                         - The KCPL website has been
                                        remodeled and is now responsive. Patrons of the library can now easily access
                                        the
                                        library website
                                        from their mobile devices. We migrated this site from Drupal 6 and gave it an
                                        organizational update.
                                    </p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><a className="scroll" href="#composthero">Sub70</a></span> -
                                    E-commerce Shopify site for a luxury golf apparal company.</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><a className="scroll" href="#composthero">ToyWatch</a></span> -
                                    E-commerce site for a luxury watch brand</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><a className="scroll" href="#composthero">Westport Spice</a></span> -
                                    E-commerce Magento site for spice blend manufacturer</p>
                                  <p className="lighter mb-8 md:text-lg"><span className="pink"><a className="scroll" href="#composthero">Morgenthal Frederics</a></span> -
                                    Marketing site for luxury eyeware retailer</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="pager hidden md:block"><button onClick={() => scrollTo('#CPH')}>
                    <div className="arrow"><span><img src={Arrow} alt="Arrow Icon"/></span></div>
                </button></div>
            </div>

            <ContentBlocksCompost>
                Compost Hero
            </ContentBlocksCompost>
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
