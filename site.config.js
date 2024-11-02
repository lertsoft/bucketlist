module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '5660ddd60beb4a1cb7800b2f490cd46f',

  //https://costeronny.notion.site/Bucket-List-62c28041a66f4b9798c3a523a2368775

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ronny Coste',
  domain: 'ronnycoste.com',
  author: 'Ronny Coste',

  // open graph metadata (optional)
  description: 'Personal portfolio site and blog with all the musings and things that go through my head.',
  socialImageTitle: 'RonnyCoste',
  socialImageSubtitle: 'Hi There! 👋',

  // social usernames (optional)
  instagram: 'costeronny',
  twitter: 'costeronny',
  github: 'lertsoft',
  linkedin: 'ronnycoste',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/blog': '3914c9b0241c4d3e85e2ff448e014230',
    '/linkin': '0dd650300960414382288e267d184e89',
    '/es': '13197ead2f5680d995c3df1f61590b92',
    '/es/about': '13197ead2f56810e94b7c550486fe21c',
    '/es/blog': '13197ead2f568186a36cc19f21d09ff5',

  },
  // pageUrlOverrides: null

  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'Home',
    //   pageId: '5660ddd60beb4a1cb7800b2f490cd46f'
    // },
    {
      title: 'Blog',
      pageId: '3914c9b0241c4d3e85e2ff448e014230'
    },
    {
      title: 'Cinema',
      url: 'https://cinema.ronnycoste.com'
    },
    {
      title: 'Gallery',
      url: 'https://gallery.ronnycoste.com'
    },
  ],
}
