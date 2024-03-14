import comp from "C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/新建文件夹/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/\",\"title\":\"新建文件夹\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新建文件夹\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
