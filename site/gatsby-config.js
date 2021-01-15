/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Freelance Website Developer",
    description: "This is a portfolio site for Samuel Adjei",
    author: "Sam Adjei",
    twitterUsername: "@samkadjei",
    image: "/twitter-img.png",
    // siteUrl: "www.samadjei.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      //   cssLoaderOptions: {
      //     camelCase: false,
      //   },
      },
    },
     {
       resolve: `gatsby-source-strapi`,
       options: {
         apiURL: `http://localhost:1337`,
         queryLimit: 1000, // Default to 100
         contentTypes: [`projects`],
       },
     },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Rubik",
              variants: ["400", "600"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
}
