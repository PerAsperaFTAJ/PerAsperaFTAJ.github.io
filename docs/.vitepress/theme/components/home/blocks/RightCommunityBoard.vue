<script setup lang="ts">
import type { PortalCommunityPost } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  items: PortalCommunityPost[];
}>();
</script>

<template>
  <article class="portal-right-block" aria-label="夏莱咖啡厅">
    <header class="portal-right-block__header">
      <h2>夏莱咖啡厅</h2>
      <span>发帖</span>
    </header>

    <a
      v-for="item in items"
      :key="item.title"
      class="portal-right-community-item"
      v-bind="linkAttrs(item.link, item.linkType)"
    >
      <p>
        <strong v-if="item.pinned">[置顶]</strong>
        {{ item.title }}
      </p>
      <div>
        <span>{{ item.date }}</span>
        <span>{{ item.comments }}</span>
        <span>{{ item.likes }}</span>
      </div>
    </a>
  </article>
</template>
