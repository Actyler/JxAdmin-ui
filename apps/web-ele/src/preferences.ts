import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    accessMode: 'backend',
  },
  /** 主题配置 */
  theme: {
    /** 当前主题 */
    mode: 'auto',
  },
  /** 顶栏配置 */
  breadcrumb: {
    /** 面包屑是否启用 */
    enable: false,
  },
  /** 侧边栏配置 */
  sidebar: {
    /** 侧边栏固定按钮是否可见 */
    fixedButton: false,
  },
  tabbar: {
    /** 标签页高度 */
    height: 40,
  },
  /** 功能配置 */
  widget: {
    /** 是否启用全屏部件 */
    fullscreen: false,
    /** 是否启用全局搜索部件 */
    globalSearch: false,
    /** 是否启用语言切换部件 */
    languageToggle: false,
    /** 是否显示主题切换部件 */
    themeToggle: false,
  },
});
