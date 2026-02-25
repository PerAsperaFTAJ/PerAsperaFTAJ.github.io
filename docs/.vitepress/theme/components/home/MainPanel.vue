<script setup lang="ts">
import type { PortalMainSections } from "../../portal.config";
import ActivityBoard from "./blocks/ActivityBoard.vue";
import AnnouncementBoard from "./blocks/AnnouncementBoard.vue";
import SectionBlocks from "./blocks/SectionBlocks.vue";
import ShortcutGrid from "./blocks/ShortcutGrid.vue";
import SpotlightBoard from "./blocks/SpotlightBoard.vue";

defineProps<{
  main: PortalMainSections;
}>();
</script>

<template>
  <main class="portal-main" aria-label="首页主内容">
    <div class="portal-main__top">
      <SpotlightBoard :spotlight="main.spotlight" />
      <div class="portal-main__stack">
        <AnnouncementBoard
          :items="main.announcements"
          :more-link="main.announcementMoreLink"
        />
        <ActivityBoard
          :items="main.activities"
          :more-link="main.activityMoreLink"
        />
      </div>
    </div>

    <ShortcutGrid :shortcuts="main.shortcuts" />

    <SectionBlocks :sections="main.sections" />
  </main>
</template>
