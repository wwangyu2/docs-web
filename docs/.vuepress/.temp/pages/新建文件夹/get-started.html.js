import comp from "C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/新建文件夹/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/get-started.html\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"readingTime\":{\"minutes\":0.7,\"words\":211},\"filePathRelative\":\"新建文件夹/get-started.md\"}")
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
