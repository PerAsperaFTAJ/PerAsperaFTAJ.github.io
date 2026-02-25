<script setup lang="ts">
import type { PortalAnnouncementItem } from "../../../portal.config";
import { linkAttrs } from "../link";

interface AnnouncementBoardProps {
  items: PortalAnnouncementItem[];
  moreLink: string;
}

defineProps<AnnouncementBoardProps>();

const toneClassMap = {
  info: "is-info",
  warn: "is-warn",
  hot: "is-hot",
  new: "is-new"
} as const;
</script>

<template>
  <article class="portal-board portal-board--announcement" aria-label="公告">
    <header class="portal-board__header">
      <h2>公告</h2>
      <a v-bind="linkAttrs(moreLink, 'internal')">更多</a>
    </header>

    <label class="portal-board__search" aria-label="站内搜索占位">
      <input type="text" value="wiki 站内搜索" readonly />
    </label>

    <a
      v-for="item in items"
      :key="item.title"
      class="portal-announcement-item"
      v-bind="linkAttrs(item.link, item.linkType)"
    >
      <span
        class="portal-announcement-item__tag"
        :class="toneClassMap[item.tone || 'info']"
      >
        [{{ item.tag }}]
      </span>
      <strong>{{ item.title }}</strong>
      <p v-if="item.summary">{{ item.summary }}</p>
    </a>
  </article>
</template>
