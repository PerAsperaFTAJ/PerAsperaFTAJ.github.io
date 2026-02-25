<script setup lang="ts">
import type { PortalQuestionItem } from "../../../portal.config";
import { linkAttrs } from "../link";

defineProps<{
  prompt: string;
  items: PortalQuestionItem[];
}>();
</script>

<template>
  <article class="portal-right-block" aria-label="萌新提问">
    <header class="portal-right-block__header">
      <h2>萌新提问</h2>
      <a v-bind="linkAttrs('/contributing', 'internal')">更多</a>
    </header>

    <label class="portal-right-question-input">
      <input type="text" :placeholder="prompt" readonly />
      <button type="button">提问</button>
    </label>

    <a
      v-for="item in items"
      :key="item.text"
      class="portal-right-question-item"
      v-bind="linkAttrs(item.link, item.linkType)"
    >
      <p>{{ item.text }}</p>
      <span>{{ item.comments }}</span>
    </a>
  </article>
</template>
