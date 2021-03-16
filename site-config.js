const description =
  'Want to learn cook but confused how to start ? No need worry again!'

const year = new Date().getFullYear()

const footer = {
  copyright: `${year} Copyright`,
  rotes: [
    {
      heading: 'Product',
      routes: [
        ['Product', '/product'],
        ['Pricing', '/pricing'],
        ['Log in', '/login'],
        ['Request access', '/access'],
        ['Partnership', '/partnership'],
      ],
    },
    {
      heading: 'About Us',
      routes: [
        ['About Dapur', '/about'],
        ['Contact us', '/contact'],
        ['features', '/features'],
        ['Careers', '/careers'],
      ],
    },
    {
      heading: 'Resource',
      routes: [
        ['Help center', '/help'],
        ['Book a demo', '/demo'],
        ['Server status', '/status'],
        ['Blog', '/blog'],
      ],
    },
  ],
}

module.exports = {
  title: 'Dapur',
  footer,
  heading: "Let's Start Cooking with Popular Recipe",
  subHeading: description,
}
