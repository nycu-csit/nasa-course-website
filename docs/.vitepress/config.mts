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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
