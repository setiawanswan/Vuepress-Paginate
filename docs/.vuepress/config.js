module.exports = {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Chatbiz Logo 🥂',
        description: 'Our Blog',
      }
    },
  
    themeConfig: {
      repoLabel: 'Contribute!',
      // git repo here... gitlab, github
      repo: '',
      docsDir: 'docs',
      editLinks: true,
      docsBranch: 'dev',
      editLinkText: 'Help us improve this page!',
      search: false,
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          lastUpdated: 'Last Updated',
          // service worker is configured but will only register in production
          serviceWorker: {
            updatePopup: {
              message: 'New content is available.',
              buttonText: 'Refresh'
            }
          },
          nav: [
            { text: 'Post Your Blog', link: '/guide' },
            { text: 'Galery', link: '/galery/' },
            { text: 'News', link: '/news/'}
            // external link to git repo...again
          ],
        }
      }
    }
  }