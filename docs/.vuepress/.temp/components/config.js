import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
