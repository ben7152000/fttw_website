<template>
  <div class="game-card" @click="goToDirection">
    <div class="game-card-pass-mark">
      <span>PASS</span>
      <span>PASS Advanced</span>
    </div>
    <div class="game-card-content">
      <h4 class="game-card-title">
        {{ title }}
      </h4>
      <img :src="require(`../assets/images/${img}.png`)" alt='game-logo' class="game-card-image">
      <h6 class="game-card-subtitle">
        {{ subtitle }}
      </h6>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from "vue-router";

const props = defineProps({
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    require: true
  }
})

const router = useRouter()

const goToDirection = () => {
  router.push({ path: `/psychometrics/direction/${props.name}` })
}
</script>

<style scoped>
.game-card {
  width: calc(25% - 30px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-card:hover {
  cursor: pointer;
}

.game-card:hover .game-card-title {
  color: lightblue;
}

.game-card-pass-mark {
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E27142;
}

.game-card-pass-mark span {
  display: inline-block;
  color: #fff;
}

.game-card-pass-mark span:nth-child(1) {
  font-size: 16px;
  font-weight: 900;
}

.game-card-pass-mark span:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
}

.game-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.game-card-title {
  font-size: 20px;
  font-weight: 500;
  color: darkblue;
  transition: all 0.3s ease-in;
  text-align: center;
  line-height: 1.2;
}

.game-card-image {
  width: 100%;
  margin: 24px 0 16px;
}

.game-card-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: darkgray;
  text-align: center;
  line-height: 1.2;
}
</style>
