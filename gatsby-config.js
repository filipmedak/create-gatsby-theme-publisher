module.exports = {
  siteMetadata: {
    title: 'WP - Gatsby',
    description: 'Headless WordPress with Gatsby.',
    author: 'Filip Medak',
    twitter: '@medakf',
    siteUrl: `https://filipmedak.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 0,
        gaTrackingId: 0,
        wordPressUrl: `https://fmedak.mojweb.com.hr/wordpress`,
        blogURI: '/'
      },
    },
  ],
}