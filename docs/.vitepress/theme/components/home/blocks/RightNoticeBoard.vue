<script setup lang="ts">
import type { PortalAnnouncementItem } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  items: PortalAnnouncementItem[];
}>();
</script>

<template>
  <article class="portal-right-block" aria-label="右侧公告">
    <header class="portal-right-block__header">
      <h2>公告栏</h2>
      <span>NOTICE</span>
    </header>

    <a
      v-for="item in items"
      :key="item.title"
      class="portal-right-notice"
      v-bind="linkAttrs(item.link, item.linkType)"
    >
      <strong>[{{ item.tag }}]</strong>
      <p>{{ item.title }}</p>
    </a>
  </article>
</template>
