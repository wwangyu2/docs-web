// import { defaultTheme } from '@vuepress/theme-default'
import { hopeTheme } from 'vuepress-theme-hope';
// import themeSidebar from 'vuepress-theme-sidebar';
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from '@vuepress/plugin-search'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default defineUserConfig({
  base:'/docs-web/',//部署站点的基础路径,默认/
  lang: 'zh-CN',

  title: '不知道文档站',
  description: '不知道文档站。',
  head: [['link', { rel: 'icon', href: 'https://wangyu2018.eu.org/sexy-girl/周麟嘉.jpg' }]],//站点头部的icon

  theme: hopeTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: '首页', link: '/' },
      { text: '知识', link: '/get-started' },
      // { text: '实验', link: '/get-started1'}
    ],  

    
    // 自动从文件结构中生成侧边栏
    sidebar: 'structure',
    // sidebar: 'auto',
 
  }),

  bundler: viteBundler(),

  plugins: [fullTextSearchPlugin],

})
