
export const searchIndex = [
  {
    "path": "/get-started.html",
    "title": "Get Started",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Get Started",
        "slug": "get-started",
        "content": "This is a normal page, which contains VuePress basics."
      },
      {
        "header": "Pages",
        "slug": "pages",
        "content": "You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.\nSee routing for more details."
      },
      {
        "header": "Content",
        "slug": "content",
        "content": "Every markdown file will be rendered to HTML, then converted to a Vue SFC.\nVuePress support basic markdown syntax and some extensions, you can also use Vue features in it."
      },
      {
        "header": "Configuration",
        "slug": "configuration",
        "content": "VuePress use a .vuepress/config.js(or .ts) file as site configuration, you can use it to config your site.\nFor client side configuration, you can create .vuepress/client.js(or .ts).\nMeanwhile, you can also add configuration per page with frontmatter."
      },
      {
        "header": "Layouts and customization",
        "slug": "layouts-and-customization",
        "content": "Here are common configuration controlling layout of @vuepress/theme-default: navbar\nsidebar Check default theme docs for full reference.\nYou can add extra style with .vuepress/styles/index.scss file."
      }
    ]
  },
  {
    "path": "/get-started1.html",
    "title": "Hello world",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Hello world",
        "slug": "hello-world",
        "content": ""
      }
    ]
  },
  {
    "path": "/",
    "title": "234",
    "pathLocale": "/",
    "contents": [
      {
        "header": "",
        "slug": "",
        "content": "This is the content of home page. Check Home Page Docs for more details."
      }
    ]
  },
  {
    "path": "/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/get-started.html",
    "title": "Get Started",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Get Started",
        "slug": "get-started",
        "content": "This is a normal page, which contains VuePress basics."
      },
      {
        "header": "Pages",
        "slug": "pages",
        "content": "You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.\nSee routing for more details."
      },
      {
        "header": "Content",
        "slug": "content",
        "content": "Every markdown file will be rendered to HTML, then converted to a Vue SFC.\nVuePress support basic markdown syntax and some extensions, you can also use Vue features in it."
      },
      {
        "header": "Configuration",
        "slug": "configuration",
        "content": "VuePress use a .vuepress/config.js(or .ts) file as site configuration, you can use it to config your site.\nFor client side configuration, you can create .vuepress/client.js(or .ts).\nMeanwhile, you can also add configuration per page with frontmatter."
      },
      {
        "header": "Layouts and customization",
        "slug": "layouts-and-customization",
        "content": "Here are common configuration controlling layout of @vuepress/theme-default: navbar\nsidebar Check default theme docs for full reference.\nYou can add extra style with .vuepress/styles/index.scss file."
      }
    ]
  },
  {
    "path": "/404.html",
    "title": "",
    "pathLocale": "/",
    "contents": [
      {
        "header": "",
        "slug": "",
        "content": "404 Not Found"
      }
    ]
  },
  {
    "path": "/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/",
    "title": "新建文件夹",
    "pathLocale": "/",
    "contents": []
  }
]
export const UPD_NAME = 'update-vuepress-plugin-full-text-search2-search-index'

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
    __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
      __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
    }
  })
}
