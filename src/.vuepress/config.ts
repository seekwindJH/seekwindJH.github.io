import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "風の跡",
  description: "愿你所追寻的风，都能如期而至~",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
