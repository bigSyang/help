import {defineConfig} from 'vitepress';
import {SearchPlugin} from 'vitepress-plugin-search';
import {loadSidebar} from "../build/sidebar";
import {loadNavigator} from "../build/navigator";
import env from '../build/env';

// import Segment from 'segment';
// const segment = new Segment();
// segment.useDefault();

export default defineConfig({
  title: 'EDGS开发手册',
  titleTemplate: '参考文档',
  description: 'EDGS开发手册',
  base: env.base,
  ignoreDeadLinks: true,
  cleanUrls: true,

  lang: 'zh-CN', // 设置html中文环境
  markdown: {
    theme: 'material-theme-ocean',
    lineNumbers: true
  },
  themeConfig: {
    logo: './assets/favicon.ico',
    nav: loadNavigator(),
    sidebar: loadSidebar(),
    footer: {
      message: '上海罗盘科技有限公司数据管控平台帮助文档',
      copyright: 'Copyright © 2023-present PengPei'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  },
  outDir: './dist',
  cacheDir: './.vitepress/.vite',
  srcDir: './src',
  vite: {
    server: {
      host: '0.0.0.0',
      port: env.port
    },
    plugins: [
      SearchPlugin({
        buttonLabel: "Search",
        placeholder: "Search docs",
        previewLength: 62,
        tokenize: 'full',
        language: 'zh',
        context: true, // 支持搜索文档内容
        preset: 'performance'
      })
    ]
  }
})
