<template>
  <div class="direction">
    <h1 class="title">
      Psychometric
    </h1>
    <div class="diver" />
    <h6 class="psychometric-subtitle">
      {{ gameInfo.title }}
    </h6>
    <component :is="gameInfo.component"/>
    <button class="play-btn" @click="goToGame">Play</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import HandEyeCoordination from "@/components/GameDirections/HandEyeCoordination.vue";
import ReactionSpeed from "@/components/GameDirections/ReactionSpeed.vue";
import Multitasking from "@/components/GameDirections/Multitasking.vue";
import Monitoring from '@/components/GameDirections/Monitoring.vue'
import SpatialOrientation from "@/components/GameDirections/SpatialOrientation.vue";

const router = useRouter()
const route = useRoute()

const gameInfoLists = [
  { id: 1, name: 'hand-eye-coordination', title: 'Hand Eye Coordination', component: HandEyeCoordination },
  { id: 2, name: 'reaction-speed', title: 'Reaction Speed', component: ReactionSpeed },
  { id: 3, name: 'multitasking', title: 'Multitasking Capability', component: Multitasking },
  { id: 4, name: 'monitoring', title: 'Monitoring', component: Monitoring },
  { id: 5, name: 'spatial-orientation', title: 'Spatial Orientation', component: SpatialOrientation }
]

const gameInfo = computed(() => {
  return gameInfoLists.find(i => i.name === route.params.name)
})

const goToGame = () => {
  router.push({ path: `/psychometrics/game/${gameInfo.value.name}` })
}
</script>

<style scoped>
.direction {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

.psychometric-subtitle {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #848796;
}
</style>
