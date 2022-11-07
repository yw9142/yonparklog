// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yonparklog',
  tagline: 'Frontend development, Project management, Design, etc..',
  url: 'https://gleeful-choux-3371da.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yonpark', // Usually your GitHub org/user name.
  projectName: 'yonparklog', // Usually your repo name.

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(84, 104, 255)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo.svg',
            color: 'rgb(255, 255, 255)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: 'Korean',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/yw9142/yonparklog/tree/master/',
        },
        blog: {
		  blogSidebarTitle: '모든 게시물',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yw9142/yonparklog/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
		{
	// hideableSidebar: true,
	// autoCollapseSidebarCategories: true,
	  docs: {
        sidebar: {
		  hideable: true,
          autoCollapseCategories: true,
      		},
    	},
			// autoCollapseCategories: true,
			// 사이드바 카테고리 자동 접기는 아마 버전문제인듯함. beta18과 최신버전이랑 다름
      navbar: {
        title: 'Yonparklog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
		  // href: '/docs/intro',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/yw9142',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'docs',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/12744924/yonpark',
              },
              {
                label: 'facebook',
                href: 'https://www.facebook.com/YonghunPark0828/',
              },
              {
                label: 'linkedin',
                href: 'https://www.linkedin.com/in/yonghun-park/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yw9142',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yonpark, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
