import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Footer from "../components/Footer"

// markup
const AboutPage = () => {
  return (
    <div className="js-outer font-body">
      <Helmet>
        <html lang="en" />
        <title>About - Juniper Studio Design and Development</title>
        <meta name="description" content="About Juniper Studio" />
      </Helmet>
      
      <header className="js-header-wrapper">
        <div className="container">
          <h1 className="text-3xl md:text-5xl text-theme-comp-dark font-bold my-8">About Us</h1>
        </div>
      </header>
      
      <div className="js-main-wrapper">
        <div className="container mt-10 md:mt-20 pb-10 md:pb-20">
          <div className="md:flex gap-12">
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl text-zinc-700 mb-6">
                Juniper Studio is a design and development agency with over twenty years of experience
                creating exceptional digital experiences for clients across various industries.
              </p>
              
              <p className="text-md md:text-lg text-zinc-600 mb-6">
                Our team of professionals specializes in engineering solutions, design management,
                and software development. We work closely with our clients to understand their unique
                challenges and deliver tailored solutions that exceed expectations.
              </p>
              
              <p className="text-md md:text-lg text-zinc-600 mb-10">
                Whether you need a new website, an e-commerce platform, or custom software development,
                we have the expertise to bring your vision to life.
              </p>
              
              <div className="my-8">
                <Link to="/" className="text-pink-500 font-bold hover:underline">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer>
        footer
      </Footer>
    </div>
  )
}

export default AboutPage