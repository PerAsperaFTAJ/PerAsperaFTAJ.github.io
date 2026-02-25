<script setup lang="ts">
import type { PortalNavShortcut } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  shortcuts: PortalNavShortcut[];
}>();
</script>

<template>
  <article class="portal-shortcuts" aria-label="常用导航">
    <header class="portal-shortcuts__header">
      <h2>常用导航</h2>
    </header>

    <div class="portal-shortcuts__grid">
      <a
        v-for="item in shortcuts"
        :key="item.title"
        class="portal-shortcut-item"
        v-bind="linkAttrs(item.link, item.linkType)"
      >
        <span class="portal-shortcut-item__icon">{{ item.icon }}</span>
        <strong>{{ item.title }}</strong>
        <small>{{ item.subtitle }}</small>
      </a>
    </div>
  </article>
</template>
