<template>
  <div class="index">
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
.index {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.side-content {
  width: 100%;
  min-height: 100vh;
}
</style>
