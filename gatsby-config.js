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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-9390772-1"
    }
  }, "gatsby-plugin-sitemap", {
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
    },
  ]
};

