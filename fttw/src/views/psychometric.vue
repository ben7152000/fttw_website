<template>
  <div class="psychometric">
    <h1 class="title">
      Psychometric
    </h1>
    <div class="diver" />
    <h6 class="psychometric-subtitle">
      {{ gameInfo.title }}
    </h6>
    <div class="psychometric-container">
      <iframe :src="gameInfo.url" class="psychometric-iframe" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const gameInfoLists = [
  { id: 1, name: 'hand-eye-coordination', title: 'Hand Eye Coordination', url: 'https://ben7152000.github.io/HandEyeCoordination' },
  { id: 2, name: 'reaction-speed', title: 'Reaction Speed', url: 'https://ben7152000.github.io/ReactionSpeed' },
  { id: 3, name: 'multitasking', title: 'Multitasking Capability', url: 'https://ben7152000.github.io/MultitaskingCapability' },
  { id: 4, name: 'monitoring', title: 'Monitoring', url: 'https://ben7152000.github.io/Monitoring' },
  { id: 5, name: 'spatial-orientation', title: 'Spatial Orientation', url: 'https://ben7152000.github.io/SpatialOrientation' }
]

const gameInfo = computed(() => {
  return gameInfoLists.find(i => i.name === route.params.name)
})
</script>

<style scoped>
.psychometric {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.title {
  margin: 20px 0;
  font-size: 24px;
  font-weight: 500;
  color: #848796;
}

.diver {
  border: 1px solid #ccc;
}

.psychometric-container {
  margin-top: 10px;
}

.psychometric-iframe {
  width: 100%;
  height: 900px;
  border: none;
}

.psychometric-subtitle {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #848796;
}
</style>
