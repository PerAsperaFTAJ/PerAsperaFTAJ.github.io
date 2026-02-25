<script setup lang="ts">
import type { PortalSectionBlock } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  sections: PortalSectionBlock[];
}>();

const toneClassMap = {
  info: "is-info",
  warn: "is-warn",
  hot: "is-hot",
  new: "is-new"
} as const;
</script>

<template>
  <div class="portal-sections" aria-label="内容分组">
    <section
      v-for="section in sections"
      :key="section.id"
      class="portal-section"
      :aria-labelledby="`portal-section-title-${section.id}`"
    >
      <header class="portal-section__header">
        <h2 :id="`portal-section-title-${section.id}`">{{ section.title }}</h2>
        <a v-bind="linkAttrs(section.moreLink, section.moreLinkType)">{{ section.moreText }}</a>
      </header>

      <div class="portal-section__grid">
        <a
          v-for="item in section.items"
          :key="item.title"
          class="portal-content-card"
          v-bind="linkAttrs(item.link, item.linkType)"
        >
          <div class="portal-content-card__cover" :class="toneClassMap[item.badgeTone || 'info']">
            {{ item.cover }}
          </div>
          <div class="portal-content-card__body">
            <span>{{ item.tag }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
