<template>
  <div class="airline-card">
    <h4 class="airline-card-title">
      {{ title }}
    </h4>
    <img :src="require(`../assets/images/${img}.png`)" :alt="img" class="airline-card-image">
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
})
</script>

<style scoped>
.airline-card {
  width: 250px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.airline-card:hover {
  cursor: pointer;
}

.airline-card:hover .airline-card-title {
  color: lightblue;
}

.airline-card-title {
  font-size: 20px;
  font-weight: 500;
  color: darkblue;
  margin-bottom: 16px;
  transition: all 0.3s ease-in;
}

.airline-card-image {
  width: 100%;
}
</style>
