export default {
  title: 'Storefront UI library',
  description: 'Lightning fast ecommerce library',
  themeConfig: {
    logo: '/assets/logo.svg',
    siteTitle: 'Storefront UI library',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Playground', link: '/playground' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuestorefront/sfui2' },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
        items: []
      },
      {
        text: 'Getting started',
        link: '/getting-started/setup',
        items: []
      },
      {
        text: 'Custom Scripts',
        link: '/custom-scripts',
        items: [
          { text: 'createIcons', link: '/custom-scripts/createIcons' },
        ]
      },
      {
        text: 'Components',
        link: '/components',
        collapsible: true,
        collapsed: true,
        items: [

          { text: 'Slider', link: '/components/slider' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'ChipsInput', link: '/components/chipsinput' },
          { text: 'Button', link: '/components/button' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'IconBase', link: '/components/iconBase' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Spinner', link: '/components/spinner' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'RatingButton', link: '/components/ratingbutton' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Overlay', link: '/components/overlay' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Select', link: '/components/select' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Spinner', link: '/components/spinner' },
        ]
      },
      {
        text: 'Changelog',
        link: '/changelog',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '0.0.1', link: '/changelog/0.0.1' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuestorefront/sfui2/edit/develop/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
