export const siteData = JSON.parse("{\"base\":\"/test/\",\"lang\":\"zh-CN\",\"title\":\"FakeOpen文档站\",\"description\":\"详细介绍FakeOpen系列使用方法。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://wangyu2018.eu.org/sexy-girl/周麟嘉.jpg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
