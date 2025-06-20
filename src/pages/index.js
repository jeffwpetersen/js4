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

                            <div className="text-2xl md:text-3xl xl:text-6xl text-theme-comp-dark font-bold align-baseline mb-[28px] leading-10 md:leading-14">Development &&nbsp;Design</div>
                            <h1 className="brand-statement text-md md:text-lg font-extralight text-zinc-400 leading-8 md:leading-11">We design, build, develop and
                                consult. If you're in need of <span className="text-black">design
                    management</span> or <span className="text-black">web development</span> get in touch and let us
                                    know what problems we can solve.<br/>
                                <span className="text-black">We Do That.</span></h1>
                            <div><p className="contact-us text-pink-500 my-10"><strong><a href="#contact" className="scroll text-pink-500">Contact
                                us.</a></strong></p></div>

                        </div>
                        <div className="md:w-1/3 md:text-md font-light text-zinc-500">

                            <div className="text-lg md:text-xl text-zinc-700 font-semibold align-baseline pt-3 mb-[4px]">Currently...</div>
                            <h2 className="mb-10 text-zinc-900 leading-8">We are developing E-commerce for a line of furniture products for
                                technology professionals.
                                Coming Soon!...</h2>
                            <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Recently...</div>
                            <h3 className="mb-10 text-zinc-900 leading-8">We recently completed a project managing a large site migration from flat code to Drupal.
                                We project managed and were responsible for site architecture, Drupal development and
                                DevOps for <a href="http://www.coupa.com">coupa.com.</a> The site is multilingual and already
                                in German and soon to be in other languages.
                            </h3>
                            <div className="text-lg md:text-xl text-zinc-700 font-semibold pt-[4px] mb-[4px]">Previously...</div>
                            <p className="text-zinc-400 leading-8 mb-10"><a href="http://pendergastkc.org">The Pendergast Years | Kansas City
                                in the Jazz Age & Great Depression.</a> Tom Pendergast was a Democrat and Kansas City political
                                boss who's corruption was legendary.</p><p className="text-zinc-400 leading-8 mb-8">
                            The Penderast Years site features advanced SOLR search to expose the metadata to use as
                            navigation. One of our favorite collections using metadata navigation is <a
                            href="https://pendergastkc.org/tgm-subject/musicians">Jazz musicians of the era.</a></p>
                            <p className="text-zinc-400 leading-8 pt-4 mb-10">Deep Zoom functionality is used to allow inspections of historical
                                documents. A favorite image of mine is <a href="http://pendergastkc.org/collection/10554/k0054-v12p194-01/plaza-dog-mart">The
                                    Plaza Dog Mart.</a></p>

                        </div>
                        <div className="md:w-1/3">

                            <div className="project-folder font-thin text-zinc-400 text-base leading-8">
                                <div className="text-lg md:text-3xl text-theme-comp-dark font-thin pt-1">Projects Folder</div>
                                <div>
                                    <p className="lighter mb-8 md:text-lg"><span className="pink"><a href="http://pendergastkc.org">The Pendergast Years</a> </span>
                                        - Kansas City in the Jazz Age & Great Depression.
                                    </p>
                                    <p className="lighter mb-8 md:text-lg"><span className="pink"><a className="scroll"
                                                                                     href="#composthero">Compost Hero</a></span> -
                                        The Compost Hero
                                        is the easy way to turn your garden
                                        leaves into high quality compost mulch.</p>
                                    <p className="lighter mb-8 md:text-lg"><span className="pink"><a href="http://kclibrary.org"> <a
                                        className="scroll"
                                        href="#kclibrary">The Kansas City Public Library</a></a> </span>
                                         - The KCPL website has been
                                        remodeled and is now responsive. Patrons of the library can now easily access
                                        the
                                        library website
                                        from their mobile devices. We migrated this site from Drupal 6 and gave it an
                                        organizational update.
                                    </p>
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
