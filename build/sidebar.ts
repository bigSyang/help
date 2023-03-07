import { DefaultTheme } from "vitepress";

/**
 * 定义侧边栏
 */
export function loadSidebar(): DefaultTheme.Sidebar {
  return {
    '/front/': [
      {
        text: '开发环境',
        link: '/front/'
      }, {
        text: '开发须知',
        link: '/front/devKnow'
      }, {
        text: '框架',
        link: '/front/framework/', // /front/framework/ 指向framework下的index.md文件
        collapsed: false,
        items: [
          {
            text: 'Vue',
            link: '/front/framework/vue'
          }, {
            text: 'Vue3',
            link: '/front/framework/vue3'
          }, {
            text: 'React',
            link: '/front/framework/react'
          }
        ]
      }
    ],
    // '/back/': [
    //   {
    //     text: '开发环境',
    //     link: '/back/env'
    //   }
    // ],
    // '/db/': [
    //   {
    //     text: 'MySQL',
    //     link: '/db/mysql',
    //   }, {
    //     text: 'Oracle',
    //     link: '/db/oracle'
    //   }
    // ]
  }
}
