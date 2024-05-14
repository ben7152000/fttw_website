<template>
  <div class="pilot-assessments">
    <h1 class="title">
      Pilot Assessments
    </h1>
    <div class="diver" />
    <div class="airline-cards">
      <AirlineCard
          v-for="list in airlineLists"
          :key="list.id"
          :title="list.title"
          :img="list.img"
      />
    </div>
  </div>
</template>

<script setup>
import AirlineCard from "@/components/AirlineCard.vue";

const airlineLists = [
  { id: 1, title: 'Cathay Pacific', img: 'cathay' }
]
</script>

<style scoped>
.pilot-assessments {
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

.airline-cards {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
