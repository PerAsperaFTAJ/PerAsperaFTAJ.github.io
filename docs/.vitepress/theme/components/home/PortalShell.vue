<script setup lang="ts">
import { portalLeftRail, portalMainSections, portalRightRail } from "../../portal.config";
import LeftRail from "./LeftRail.vue";
import MainPanel from "./MainPanel.vue";
import RightRail from "./RightRail.vue";
</script>

<template>
  <div class="home-portal">
    <LeftRail :rail="portalLeftRail" />
    <MainPanel :main="portalMainSections" />
    <RightRail :rail="portalRightRail" />
  </div>
</template>
