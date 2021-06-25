



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
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
        toFormatBase64: true,
      },
    },
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
    `gatsby-plugin-react-helmet`,

  ],
};
