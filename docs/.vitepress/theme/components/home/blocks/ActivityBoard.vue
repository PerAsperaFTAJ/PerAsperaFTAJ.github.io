<script setup lang="ts">
import type { PortalActivityItem } from "../../../portal.config";
import { linkAttrs } from "../link";

interface ActivityBoardProps {
  items: PortalActivityItem[];
  moreLink: string;
}

defineProps<ActivityBoardProps>();
</script>

<template>
  <article class="portal-board portal-board--activity" aria-label="活动">
    <header class="portal-board__header">
      <h2>活动</h2>
      <a v-bind="linkAttrs(moreLink, 'internal')">全部</a>
    </header>

    <a
      v-for="item in items"
      :key="item.title"
      class="portal-activity-item"
      v-bind="linkAttrs(item.link, item.linkType)"
    >
      <div class="portal-activity-item__row">
        <span class="portal-activity-item__tag">{{ item.tag }}</span>
        <strong>{{ item.title }}</strong>
        <em>{{ item.statusText }}</em>
      </div>
      <div class="portal-activity-item__meter">
        <span :style="`width: ${item.progressPercent}%`" />
      </div>
      <small>{{ item.progressLabel }}</small>
    </a>
  </article>
</template>
