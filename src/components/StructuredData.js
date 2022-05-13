import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../images/icon.png';

const StructuredData = ({ siteUrl, title, author, social, linkedin }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl,
                    title,
                    author,
                    description,
                    social {
                        linkedin,
                    }
                }
            }
        }
    `)

    return (
        <Helmet>
            <meta name="author" content="juniperstudio.com"/>
            <link rel="shortcut icon" href={favicon} />
            <meta name="description" content={data.site.siteMetadata.description}/>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
            <meta name="revisit-after" content="1 days"/>
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org/",
                    "@type": "Organization",
                    "@id": "#Organization",
                    "url":"${data.site.siteMetadata.siteUrl}",
                    "legalName": "Juniper Studio",
                    "name": "Juniper Studio",
                    "description": "${data.site.siteMetadata.description}",
                    "logo": "",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "913 461 4672",
                        "contactType": "Contact"
                      }
                    }
                  `}
            </script>
        </Helmet>
    )
}

export default StructuredData

