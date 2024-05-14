<template>
  <div class="psychometrics">
    <h1 class="title">
      Psychometrics
    </h1>
    <div class="diver" />
    <div  class="game-cards">
      <GameCard
          v-for="list in gameLists"
          :key="list.id"
          :name="list.name"
          :title="list.title"
          :img="list.img"
          :subtitle="list.subtitle"
      />
    </div>
  </div>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";

const gameLists = [
  { id: 1, name: 'hand-eye-coordination', title: 'Cut-E/AON:Hand Eye Coordination', img: 'hec-logo', subtitle: 'Fly throught the tube and avoid obstacles' },
  { id: 2, name: 'reaction-speed', title: 'Cut-E/AON:Reaction Speed', img: 'reaction-speed-logo', subtitle: 'Click the equal button as soon as you see two equal shapes' },
  { id: 3, name: 'multitasking', title: 'Cut-E/AON:Multitasking', img: 'multitasking-logo', subtitle: 'Decide the triangle direction while checking the questions' },
  { id: 4, name: 'monitoring', title: 'Cut-E/AON:Monitoring', img: 'monitoring-logo', subtitle: 'Count the amount of objects in the circle' },
  { id: 5, name: 'spatial-orientation', title: 'Cut-E/AON:Spatial Orientation', img: 'spatial-orientation-logo', subtitle: 'Drag the aircraft to the correct zone' }
]
</script>

<style scoped>
.psychometrics {
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  background-color: #F3F4F7;
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

.game-cards {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}
</style>
