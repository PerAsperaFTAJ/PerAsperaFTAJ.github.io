<script setup lang="ts">
import type { PortalRightRail } from "../../portal.config";
import RightCommunityBoard from "./blocks/RightCommunityBoard.vue";
import RightNoticeBoard from "./blocks/RightNoticeBoard.vue";
import RightQuestionsBoard from "./blocks/RightQuestionsBoard.vue";

defineProps<{
  rail: PortalRightRail;
}>();
</script>

<template>
  <aside class="portal-right-rail" aria-label="右侧信息栏">
    <RightNoticeBoard :items="rail.notices" />
    <RightQuestionsBoard :prompt="rail.questionPrompt" :items="rail.questions" />
    <RightCommunityBoard :items="rail.communityPosts" />
  </aside>
</template>
