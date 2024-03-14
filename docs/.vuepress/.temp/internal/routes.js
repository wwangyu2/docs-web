export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"y":"a","t":"Get Started"} }],
  ["/get-started1.html", { loader: () => import(/* webpackChunkName: "get-started1.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/get-started1.html.js"), meta: {"y":"a","t":"Hello world"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"234"} }],
  ["/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/新建文件夹/get-started.html.js"), meta: {"y":"a","t":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/新建文件夹/index.html.js"), meta: {"y":"p","t":"新建文件夹"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
