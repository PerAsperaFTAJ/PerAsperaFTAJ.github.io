import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import HomePortal from "./components/HomePortal.vue";
import "./styles/tokens.css";
import "./styles/layout.css";
import "./styles/components.css";

const theme: Theme = {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp(context) {
    DefaultTheme.enhanceApp?.(context);
    context.app.component("HomePortal", HomePortal);
  }
};

export default theme;
