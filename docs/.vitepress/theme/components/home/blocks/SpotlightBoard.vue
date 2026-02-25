<script setup lang="ts">
import type { PortalSpotlight } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  spotlight: PortalSpotlight;
}>();
</script>

<template>
  <article class="portal-spotlight" aria-label="焦点区">
    <header class="portal-spotlight__header">
      <p class="portal-spotlight__eyebrow">{{ spotlight.eyebrow }}</p>
      <h1>{{ spotlight.title }}</h1>
      <p class="portal-spotlight__subtitle">{{ spotlight.subtitle }}</p>

      <ul class="portal-spotlight__badges" aria-label="焦点标签">
        <li v-for="badge in spotlight.badges" :key="badge">{{ badge }}</li>
      </ul>

      <div class="portal-spotlight__actions">
        <a
          v-for="action in spotlight.actions"
          :key="action.text"
          class="portal-spotlight__action"
          :class="`portal-spotlight__action--${action.style || 'secondary'}`"
          v-bind="linkAttrs(action.link, action.linkType)"
        >
          {{ action.text }}
        </a>
      </div>
    </header>

    <div class="portal-spotlight__cards">
      <a
        v-for="card in spotlight.cards"
        :key="card.title"
        class="portal-mini-feature"
        v-bind="linkAttrs(card.link, card.linkType)"
      >
        <span>{{ card.badge }}</span>
        <strong>{{ card.title }}</strong>
        <small>{{ card.subtitle }}</small>
      </a>
    </div>
  </article>
</template>
