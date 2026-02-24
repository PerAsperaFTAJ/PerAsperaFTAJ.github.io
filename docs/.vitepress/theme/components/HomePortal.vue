<script setup lang="ts">
import {
  portalHero,
  portalQuickLinks,
  portalSections
} from "../portal.config";

const toneClassMap = {
  amber: "is-amber",
  teal: "is-teal",
  emerald: "is-emerald",
  slate: "is-slate"
} as const;
</script>

<template>
  <div class="home-portal">
    <section class="home-portal__hero">
      <p class="home-portal__label">{{ portalHero.label }}</p>
      <h1 class="home-portal__title">{{ portalHero.title }}</h1>
      <p class="home-portal__subtitle">{{ portalHero.subtitle }}</p>
      <div class="home-portal__actions">
        <a
          v-for="action in portalHero.actions"
          :key="action.text"
          :href="action.link"
          class="home-portal__action"
          :class="{
            'home-portal__action--primary': action.style === 'primary',
            'home-portal__action--secondary': action.style !== 'primary'
          }"
        >
          {{ action.text }}
        </a>
      </div>
    </section>

    <section class="home-portal__quicklinks" aria-label="快速入口">
      <article
        v-for="item in portalQuickLinks"
        :key="item.title"
        class="portal-link-card"
      >
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <a :href="item.link">查看入口</a>
      </article>
    </section>

    <section
      v-for="section in portalSections"
      :key="section.id"
      class="home-portal__section"
      :aria-labelledby="`section-title-${section.id}`"
    >
      <header class="home-portal__section-header">
        <h2 :id="`section-title-${section.id}`">{{ section.title }}</h2>
        <p>{{ section.subtitle }}</p>
      </header>
      <div class="home-portal__card-grid">
        <article
          v-for="card in section.cards"
          :key="card.title"
          class="portal-doc-card"
          :class="toneClassMap[card.tone]"
        >
          <div class="portal-doc-card__meta">
            <span>{{ card.tag }}</span>
            <strong>{{ card.updated }}</strong>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <a :href="card.link" class="portal-doc-card__link">进入文档</a>
        </article>
      </div>
    </section>
  </div>
</template>
