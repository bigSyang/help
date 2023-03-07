/**
 * 主题入口文件
 */

import DefaultTheme from 'vitepress/theme';
// import myLayout from './myLayout.vue'

export default {
  ...DefaultTheme,
  // Layout: myLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);

    const { app } = ctx;

  }
}
