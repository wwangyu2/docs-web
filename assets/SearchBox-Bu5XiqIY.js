import{f as y,g as k,w as U,h as V,t as B,u as $,i as A,o as p,c as f,j as Q,v as _,a as m,n as v,k as w,F as E,l as C,m as b,p as L,q as H}from"./app-CxDkkII5.js";import{_ as I}from"./plugin-vue_export-helper-DlAUqK2U.js";const D=[{path:"/Get-started.html",title:"Get Started",pathLocale:"/",contents:[{header:"Get Started",slug:"get-started",content:"This is a normal page, which contains VuePress basics."},{header:"Pages",slug:"pages",content:`You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.
See routing for more details.`},{header:"Content",slug:"content",content:`Every markdown file will be rendered to HTML, then converted to a Vue SFC.
VuePress support basic markdown syntax and some extensions, you can also use Vue features in it.`},{header:"Configuration",slug:"configuration",content:`VuePress use a .vuepress/config.js(or .ts) file as site configuration, you can use it to config your site.
For client side configuration, you can create .vuepress/client.js(or .ts).
Meanwhile, you can also add configuration per page with frontmatter.`},{header:"Layouts and customization",slug:"layouts-and-customization",content:`Here are common configuration controlling layout of @vuepress/theme-default: navbar
sidebar Check default theme docs for full reference.
You can add extra style with .vuepress/styles/index.scss file.`}]},{path:"/Hello.html",title:"This is a normal page, which contains VuePress basics.",pathLocale:"/",contents:[{header:"This is a normal page, which contains VuePress basics.",slug:"this-is-a-normal-page-which-contains-vuepress-basics",content:""}]},{path:"/",title:"234",pathLocale:"/",contents:[{header:"",slug:"",content:"This is the content of home page. Check Home Page Docs for more details."}]},{path:"/Markdown%E7%9F%A5%E8%AF%86%E7%82%B9/markdown%E7%9F%A5%E8%AF%86%E7%82%B9.html",title:"markdown",pathLocale:"/",contents:[{header:"",slug:"",content:`Ctrl+K V：打开 Markdown 预览到一侧 其中快捷键组合是按下 Ctrl 和 K，接着释放这两个键，然后按下 V Ctrl+Shift+V：打开 Markdown 预览 斜体 斜体：通过在文本两侧添加单个星号(*)或下划线(_)来实现斜体文本。 *markdown学习*
markdown学习 粗体 粗体：通过在文本两侧添加双星号(**)或双下划线(__)来实现粗体文本。 **markdown学习**
例:markdown学习 标题 标题：在井号（#）和标题文本之间加入一个空格，以正确地创建标题。井号的数量决定了标题的级别，从#（一级标题）到######（六级标题）。这是正确的格式：。 # markdown学习`},{header:"markdown",slug:"markdown",content:""},{header:"markdown",slug:"markdown-1",content:`链接 使用方括号([])包围链接文本，并紧跟圆括号(())内的URL来创建超链接。如[替代文本](图片链接 "可选的标题文本") [网站](https://www.google.com '谷歌')
网站 HTML的链接 <a href="https://example.com" title="鼠标悬停显示的文本">超链接显示名</a> href="超链接地址": 指定链接指向的网页地址，也就是用户点击这个链接后会打开的网页。在这个示例中，超链接地址应该被替换为实际的网页URL。 title="超链接title": 提供了当鼠标悬停在链接上时显示的额外信息。这个属性是可选的，增加了用户体验。在这里，超链接title可以被替换为解释或描述这个链接更多详情的文本。 超链接显示名: 这是链接的可见部分，用户在网页上看到的文本。当用户点击这部分文本时，会根据href属性指定的地址跳转到另一个页面。在示例中，超链接显示名应该被替换成你希望用户看到的链接名称。 <a href='https://www.google.com' title='谷歌'>谷歌</a>
谷歌 图片链接 图片：与链接类似，但在方括号前加一个感叹号(!)，方括号内填写替代文本，圆括号内填写图片URL。![替代文本](图片链接 "可选的标题文本")
，用于嵌入图片。
![替代文本] 是当图片不可访问时显示的文本（例如，图片无法加载时）。
(图片链接) 是图片的URL。
"可选的标题文本" 是鼠标悬停在图片上时显示的文本（这部分是可选的）。 ![美女](https://p3.itc.cn/images01/20200914/06c3a00131f14fd6b9f2cfd80d8776a6.png '周麟嘉') HTML图片链接
<img src="图片链接" alt="替代文本" title="可选的标题文本" style="zoom: 75%;">
src（source的缩写）: 这个属性指定了图片的URL。也就是图片的来源地址，你需要将“图片链接”替换成实际的图片文件路径或URL。 alt（alternative text的缩写）: 这个属性定义了替代文本，如果出于某种原因图片无法显示（例如，网速慢导致图片加载失败，或者用户使用的是屏幕阅读器），则会显示这里的文本。这对于提高网站的可访问性很重要。 title: 这个属性是可选的，它提供了图片的标题文本。当用户将鼠标悬停在图片上时，通常会显示这个标题文本。这可以用于提供关于图片的额外信息。 style: 这个属性用于直接在元素上应用CSS样式。在这个例子中，zoom: 75%; 的样式是用来将图片的显示大小调整为原始大小的75%。 <img src='https://p5.itc.cn/images01/20200914/9daa63a9b1e94015934f204122e8f261.jpeg' alt='美女' title='周麟嘉'> 不愿写了，就这样吧:
6. 块引用：使用大于号(>)加空格来引用文本，可用于单个或多个段落，以及嵌套引用。
7. 列表：对于无序列表（项目符号列表），你可以使用星号 *、加号 + 或者减号 - 后面跟一个空格来标记每一项。创建有序列表可以通过在每一项前面放置数字，后面紧跟一个点（.）和一个空格
8. 水平规则：通过三个或更多的星号(***)、减号(---)或下划线(___)来创建水平分割线。
9. 代码块：使用三个反引号()包围文本来创建代码块，并可指定语言进行语法高亮。
10. 内联代码：使用单个反引号(\`)包围文本来创建内联代码样式。 ### 块引用详解
- 单个段落的块引用：单个段落引用仅需在段落前加一个>符号。
- 多个段落的块引用：引用多个段落时，在每个段落的开头加上>符号，并在段落之间留出一个空行，也在这空行前加>符号。
- 嵌套块引用：通过在引用内部前面添加额外的>符号来创建嵌套引用，每增加一个>表示更深一层的嵌套。`}]},{path:"/MySQL/MySQL%E7%9F%A5%E8%AF%86%E7%82%B9.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"如果你忘记了 MySQL 的用户名，这里有几种方法可以尝试找回或确定你的 MySQL 用户名："},{header:"1. 使用默认用户",slug:"_1-使用默认用户",content:`MySQL 默认的管理员用户名通常是 root。你可以尝试使用 root 用户名来登录：
mysql -u root -p
输入此命令后，系统会提示你输入密码。如果你记得 root 用户的密码，就可以输入它来尝试登录。`},{header:"2. 列出所有用户：",slug:"_2-列出所有用户",content:`SELECT User FROM mysql.user;
这将显示所有 MySQL 用户的列表。`},{header:"3. 重置密码",slug:"_3-重置密码",content:"如果你是系统的管理员，但完全忘记了用户名和密码，你可能需要重置 root 密码。这通常涉及停止 MySQL 服务，启动它的安全模式，然后使用特殊命令来设置新密码。但请注意，这个过程会使你能够重置 root 用户的密码，而不是找回忘记的用户名。不过，一旦你以 root 用户身份登录，你就可以查看或更改其他用户的账户信息。"},{header:"3.1",slug:"_3-1",content:`sc query type= service state= all | findstr /i mysql
这条命令会列出所有包含“mysql”的服务，无论它们是正在运行还是停止状态。
net start MySQL服务名称 net stop MySQL服务名称 启动或停止MySQL服务`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"404 Not Found"}]},{path:"/Markdown%E7%9F%A5%E8%AF%86%E7%82%B9/",title:"Markdown知识点",pathLocale:"/",contents:[]},{path:"/MySQL/",title:"My SQL",pathLocale:"/",contents:[]}],O="update-vuepress-plugin-full-text-search2-search-index";var S=y(D),q=k(()=>{const e=new Map;for(const t of S.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[O]=e=>{S.value=e});function x(e){const t=y([]);let r=null;return U(e,()=>{r&&clearTimeout(r),r=setTimeout(s,100)}),t;function s(){const u=e.value.toLowerCase().trim();if(!u){t.value=[];return}const a=new Map,n=new Set;for(const o of S.value)for(const l of j(o,u)){n.add(l.parentPageTitle);let i=a.get(l.parentPageTitle);i||(i=[],a.set(l.parentPageTitle,i)),i.push(l)}const c=[...n].sort((o,l)=>{const i=a.get(o);return a.get(l).length-i.length});t.value=[...a].flatMap(([,o])=>o).sort((o,l)=>o.parentPagePriority-l.parentPagePriority||c.indexOf(o.parentPageTitle)-c.indexOf(l.parentPageTitle)||o.priority-l.priority)}}function*j(e,t){const r=M(e.title,t);if(r){yield{path:e.path,parentPageTitle:P(e),title:e.title,display:r,page:e,content:null,parentPagePriority:1,priority:1};return}for(const s of e.contents){const u=M(s.header,t);if(u){yield{path:e.path+(s.slug?`#${s.slug}`:""),parentPageTitle:P(e),title:e.title,display:u,page:e,content:null,parentPagePriority:10,priority:2};continue}const a=M(s.content,t);a&&(yield{path:e.path+(s.slug?`#${s.slug}`:""),parentPageTitle:P(e),title:e.title,display:[{type:"header",str:`${s.header}
`},...a],page:e,content:null,parentPagePriority:10,priority:10})}}function P(e){const t=e.path.split("/");let r="/";return t[1]&&(r=`/${t[1]}/`),(q.value.get(r)||e).title}function M(e,t){const r=[];let s=0;const u=e.toLowerCase().replace(/\s/gu," ");let a=0,n=u.indexOf(t,a);if(n<0)return null;for(;n>=0;){const o=n+t.length;if(c(e.slice(a,n),"normal"),c(e.slice(n,o),"highlight"),a=o,n=u.indexOf(t,a),s>100)break}return c(e.slice(a),"normal"),r.filter(o=>o.str);function c(o,l){let i=o;l==="normal"&&i.length>100&&s===0&&(i=`… ${i.slice(-10)}`);let h=!1;if(s+i.length>100){if(r.some(g=>g.type==="ellipsis"))return;i=i.slice(0,Math.max(100-s,1)),h=!0}r.push({type:l,str:i}),s+=i.length,h&&(r.push({type:"ellipsis",str:" …"}),s+=2)}}var z={};const N=z,K=V({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>N}},setup(e){const{locales:t}=B(e),r=y(""),s=y(!1),u=y(-1),a=x(r),n=k(()=>r.value&&s.value&&a.value.length),c=$(),o=A(),l=k(()=>t.value[o.value]??{});function i(){if(!n.value)return;let d=u.value-1;d<0&&(d=a.value.length-1),g(d)}function h(){if(!n.value)return;let d=u.value+1;d>=a.value.length&&(d=0),g(d)}function g(d){u.value=d}function F(){u.value=-1}function R(d){if(!n.value)return;const T=a.value[d];T&&c.push(T.path)}return{query:r,focused:s,focusIndex:u,suggestions:a,activeSuggestion:n,onUp:i,onDown:h,focus:g,unfocus:F,go:R,locale:l}}}),G={class:"search-box",role:"search"},Y=["placeholder"],J=["onMousedown","onMouseenter"],W=["href"],X={key:0,class:"parent-page-title"},Z={class:"suggestion-row"},ee={class:"page-title"},te={class:"suggestion-content"};function ne(e,t,r,s,u,a){return p(),f("div",G,[Q(m("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:v({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=w(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=w((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=w((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,Y),[[_,e.query]]),e.activeSuggestion?(p(),f("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(p(!0),f(E,null,C(e.suggestions,(n,c)=>(p(),f("li",{key:c,class:v(["suggestion",{focused:c===e.focusIndex}]),onMousedown:o=>e.go(c),onMouseenter:o=>e.focus(c)},[m("a",{href:n.path,onClick:t[6]||(t[6]=H(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[c-1]||e.suggestions[c-1].parentPageTitle!==n.parentPageTitle)?(p(),f("div",X,L(n.parentPageTitle),1)):b("",!0),m("div",Z,[m("div",ee,L(n.title||n.path),1),m("div",te,[(p(!0),f(E,null,C(n.display,(o,l)=>(p(),f("span",{key:l,class:v(o.type)},L(o.str),3))),128))])])],8,W)],42,J))),128))],32)):b("",!0)])}const ae=I(K,[["render",ne],["__scopeId","data-v-df8a7f1c"],["__file","SearchBox.vue"]]);export{ae as default};
