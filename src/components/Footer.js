import * as React from 'react';

const Footer = () => {
    return (
        <section className="bg-pinks h-screen flex">
            <div className="one-three-one center white m-auto">
                <div className="text-base font-['latolight'] text-white text-center" id="contact">
                    <h1 className="text-7xl font-['latohairline'] text-white mb-10">CONTACT<br />JUNIPER<br/>STUDIO</h1>
                    <div>Jeff Petersen<br/>
                        <strong>913 461 4672</strong><br/>jeff@juniperstudio.com
                    </div>
                    <br/>
                    &copy; 2021 Juniper Stuido
                    <div><a href="https://www.linkedin.com/company/juniper-studio/">Juniper-Studio on LinkedIn</a></div>
                    <div><a href="http://github.com/jeffwpetersen">Jeff W. Petersen on Github</a></div>
                </div>
            </div>
            <div className="hidden">
            </div>
        </section>
    )
}

export default Footer


