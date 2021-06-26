



module.exports = {
  siteMetadata: {
    title: "solarLend",
    script: "<script src='https://my.server.ru/jquery.min.js'></script>"
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`, options: {
        url: 'https://solarland.s-tet.top/graphql',
      }
    },
    "gatsby-plugin-react-helmet",

    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src`,
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },


  ],
};
