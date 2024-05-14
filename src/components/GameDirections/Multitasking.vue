<template>
  <div class="direction-container">
    <h4 class="mb-6">In this Cut-E/AON test, the candidate has to do three tasks:</h4>
    <ul>
      <li>Identify if the triangle is pointing to the left or to the right</li>
      <li>Checking if the math equation is correct or incorrect</li>
      <li>Checking if a duplicate is present or not in a numerical sequence</li>
    </ul>
    <div class="img-box">
      <img :src="require('../../assets/multitasking/1.png')" alt="1">
    </div>
    <h4 class="mb-6">In the above example, we can see 7 different shapes in the top-left corner. One of them is a triangle which is pointing to the left.</h4>
    <h4 class="mb-6">As the triangle is pointing to the left, we have to click the left pointing triangle within the time limit indicated by the blue bar.</h4>
    <h4>As the same time, the candidate has to solve the math equation to check whether the answer is correct or wrong.</h4>
    <div class="img-box">
      <img :src="require('../../assets/multitasking/2.png')" alt="2">
    </div>
    <h4 class="mb-6">In the above example the math equation is wrong, so the candidate has to click the "Wrong" button.</h4>
    <h4>In the numerical sequence on the bottom-right of the screen is no duplicate number visible, so the button "No Duplicate" needs to be clicked by the candidate.</h4>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
}

li {
  list-style: disc;
  color: #858585;
  line-height: 1.5;
}
</style>
