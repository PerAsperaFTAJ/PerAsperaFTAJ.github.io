<script setup lang="ts">
import type { PortalLeftRail } from "../../portal.config";
import { linkAttrs } from "./link";

defineProps<{
  rail: PortalLeftRail;
}>();
</script>

<template>
  <aside class="portal-left-rail" aria-label="左侧入口">
    <div class="portal-left-rail__brand">
      <p class="portal-left-rail__tag">{{ rail.siteTag }}</p>
      <h2>{{ rail.siteName }}</h2>
      <p class="portal-left-rail__subtitle">{{ rail.subtitle }}</p>
    </div>

    <p class="portal-left-rail__date">{{ rail.dateLabel }}</p>

    <nav class="portal-left-rail__menu" aria-label="左侧菜单">
      <a
        v-for="item in rail.railItems"
        :key="item.id"
        class="portal-left-rail__menu-item"
        v-bind="linkAttrs(item.link, item.linkType)"
      >
        <span class="portal-left-rail__menu-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </a>
    </nav>
  </aside>
</template>
