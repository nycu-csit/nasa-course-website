import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NYCUCS NASA Course",
  description: "NYCUCS NASA Course Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'SA', link: '/sa/' },
      { text: 'NA', link: '/na/' },
      { text: 'TA Information', link: '/ta-information' },
      { text: 'Related Links', link: '/related-links' },
      { text: 'Recommended Books', link: '/recommended-books' }
    ],

    sidebar: {
      // Sidebar for SA — grouped by Undergraduate / Graduate, years as sub-items
      '/sa/': [
        {
          text: 'SA (System Administration)',
          items: [
            {
              text: 'Undergraduate (SA)',
              items: [
                { text: '2025', link: '/sa/2025/' },
                { text: '2024', link: '/sa/2024/' },
                { text: '2023', link: '/sa/2023/' },
                { text: '2022', link: '/sa/2022/' },
                { text: '2021', link: '/sa/2021/' },
                { text: '2020', link: '/sa/2020/' },
                { text: '2019', link: '/sa/2019/' },
                { text: '2018', link: '/sa/2018/' },
                { text: '2014', link: '/sa/2014/' },
                { text: '2013', link: '/sa/2013/' },
                { text: '2012', link: '/sa/2012/' },
                { text: '2011', link: '/sa/2011/' },
                { text: '2010', link: '/sa/2010/' },
                { text: '2009', link: '/sa/2009/' },
                { text: '2008', link: '/sa/2008/' },
                { text: '2007', link: '/sa/2007/' },
                { text: '2006', link: '/sa/2006/' },
                { text: '2005', link: '/sa/2005/' },
                { text: '2004', link: '/sa/2004/' }
              ]
            },
            {
              text: 'Graduate (SAP)',
              items: [
                { text: '2017', link: '/sa/2017/' },
                { text: '2016', link: '/sa/2016/' },
                { text: '2015', link: '/sa/2015/' }
              ]
            }
          ]
        }
      ],
      // Sidebar for NA — grouped by Undergraduate / Graduate, years as sub-items
      '/na/': [
        {
          text: 'NA (Network Administration)',
          items: [
            {
              text: 'Undergraduate (NA)',
              items: [
                { text: '2025', link: '/na/2025/' },
                { text: '2024', link: '/na/2024/' },
                { text: '2023', link: '/na/2023/' },
                { text: '2022', link: '/na/2022/' },
                { text: '2021', link: '/na/2021/' },
                { text: '2020', link: '/na/2020/' },
                { text: '2019', link: '/na/2019/' },
                { text: '2014', link: '/na/2014/' },
                { text: '2013', link: '/na/2013/' },
                { text: '2012', link: '/na/2012/' },
                { text: '2011', link: '/na/2011/' },
                { text: '2010', link: '/na/2010/' },
                { text: '2009', link: '/na/2009/' },
                { text: '2005 — (Computer) Network Management (NM)', link: '/na/2005/' },
                { text: '2004 — (Computer) Network Management (NM)', link: '/na/2004/' }
              ]
            },
            {
              text: 'Graduate (NAP)',
              items: [
                { text: '2018', link: '/na/2018/' },
                { text: '2016', link: '/na/2016/' },
                { text: '2015', link: '/na/2015/' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nycu-csit' }
    ]
  }
})
