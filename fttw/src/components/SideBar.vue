<template>
  <div class="side-bar">
<!--    <div class="side-bar-lists">-->
<!--      <router-link class="side-bar-list" to="/pilot-assessments">Pilot Assessments</router-link>-->
<!--    </div>-->
    <div class="side-bar-lists">
      <router-link class="side-bar-list" to="/psychometrics">Psychometrics</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.side-bar {
  width: 235px;
  height: 100%;
  padding: 50px 20px 10px;
  background-color: #DFF2FD;
}

.side-bar-lists {
  margin: 20px 0;
}

.side-bar-list {
  font-size: 16px;
  font-weight: 500;
  color: lightslategrey;
  transition: all 0.3s ease-in;
}

.side-bar-list:hover {
  color: darkslategrey;
  cursor: pointer;
}
</style>
