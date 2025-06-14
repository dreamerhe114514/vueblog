import type { NitroConfig } from 'nitropack'
import type { BundledLanguage, BundledTheme } from 'shiki'
import type { FeedEntry } from '~/types/feed'
import redirectList from './redirects.json'

export { zhCN as dateLocale } from 'date-fns/locale/zh-CN'

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
const blogConfig = {
    title: '追梦幻境·霞阴云之都',
    subtitle: '心茧化翼，破风追星！',
    // 长 description 利好于 SEO
    description: '何星梦（DRHE）的个人博客，喜欢折腾一些东西，尤其是博客啦，很高兴您能来到霞阴云之都~有任何问题可以邮箱联系哦~',
    author: {
        name: '何星梦',
        avatar: 'https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting/tx.1seyrn6g84.webp',
        email: 'email@dreamerhe.cn',
        homepage: 'https://blog.dreamerhe.cn/',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: '署名-非商业性使用-相同方式共享 4.0 国际',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
    },
    favicon: 'https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/20250510/梦霞云阴都.9rjm7vhbgu.webp',
    language: 'zh-Hans',
    qqGroup: '1030484607',
    timeEstablished: '2025-06-01',
    timezone: 'Asia/Shanghai',
    url: 'https://blog.dreamerhe.cn/',

    feed: {
        limit: 50,
    },

    // 在 URL 中隐藏的路径前缀
    hideContentPrefixes: ['/posts'],

    imageDomains: [
        // 自动启用本域名的 Nuxt Image
        // 'www.zhilu.cyou',
        // '7.isyangs.cn',
    ],

    // 禁止搜索引擎收录的路径
    robotsNotIndex: ['/preview', '/previews/*'],

    scripts: [
        // 自己部署的 Umami 统计服务
      //  { 'src': 'https://zhi.zhilu.cyou/zhi.js', 'data-website-id': 'a1997c81-a42b-46f6-8d1d-8fbd67a8ef41', 'defer': true },
        // Cloudflare Insights 统计服务
      //  { 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
    ],

    // 用于 Shiki、Plain Shiki 引入代码高亮
    // 同时用于显示代码块语言对应的 Iconify Catppuccin 图标
    shiki: {
        bundledLangs: <BundledLanguage[]>['bat', 'log', 'sh', 'powershell'],
        langs: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'sql', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],
        themes: <BundledTheme[]>['catppuccin-latte', 'one-dark-pro'],
        defaultTheme: <BundledTheme>'catppuccin-latte',
        darkTheme: <BundledTheme>'one-dark-pro',
    },

    // 用于 Twikoo 评论系统
    twikoo: {
        js: 'https://gcore.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js',
        // 自己部署的 Twikoo 服务
        envId: 'https://twikoo.20097747.xyz/',
        preload: 'https://twikoo.20097747.xyz/',
    },
}

// 用于生成 OPML 和友链页面配置
export const myFeed = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: '都城休息处',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: '心茧化翼·破风追星！',
}

// 将旧页面永久重定向到新页面
const redirectRouteRules = Object.entries(redirectList)
    .reduce<NitroConfig['routeRules']>((acc, [from, to]) => {
        acc![from] = { redirect: { to, statusCode: 301 } }
        return acc
    }, {})

// https://nitro.build/config#routerules
// @keep-sorted
export const routeRules = <NitroConfig['routeRules']>{
    ...redirectRouteRules,
    '/api/stats': { prerender: true, headers: { 'Content-Type': 'application/json' } },
    '/atom.xml': { prerender: true, headers: { 'Content-Type': 'application/xml' } },
    '/favicon.ico': { redirect: { to: blogConfig.favicon } },
    '/zhilu.opml': { prerender: true, headers: { 'Content-Type': 'application/xml' } },
}

export default blogConfig
