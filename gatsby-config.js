module.exports = {
  siteMetadata: {
    title: 'Juniper Studio Design and Development',
    author: 'JeffWPetersen',
    description: 'Juniper Studio Design and Development',
    siteUrl: 'https://www.juiniperstudio.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/jeffwpetersen/',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-smoothscroll",
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      // develop: true, // Enable while using `gatsby develop`
      tailwind: true, // Enable tailwindcss support
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
      },
      // More options defined here https://purgecss.com/configuration.html#options
    },
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
  }, {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/svg/" // See below to configure properly
        }
      }
    }, {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }, {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-9390772-1", // Google Analytics / GA
          "G-BQ2LXYW0CD", // Data Stream Measurment ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    }

  ]
};

