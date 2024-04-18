<template>
  <div class="home">
    <SideBar />
    <div class="side-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
}

.side-content {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #F3F4F7;
}
</style>
