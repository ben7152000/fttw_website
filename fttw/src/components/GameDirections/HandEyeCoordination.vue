<template>
  <div class="direction-container">
    <h4>In this test you have to navigate yourself through a tube with obstacles by dragging the ball inside the circle with your mouse or the virtual on-screen joystick when using a mobile device.</h4>
    <div class="img-box">
      <img :src="require('../../assets/handEyeCoordination/1.png')" alt="1">
    </div>
    <h4 class="mb-6">Speed in increasing automatically when passing an opening and can be reduced by pressing the "F" keyboard key. Speed can be increased by pressing the "D" key on your keyboard. Buttons for speed decrease and increase are available on your screen for mobile devices.</h4>
    <h4 class="mb-6">The goal is to pass as many openings as possible within the time limit of 3 minutes.</h4>
    <h4 class="mb-6">On top of the screen the following values are visible:</h4>
    <ul>
      <li>Score: number of passed openings</li>
      <li>Time: time left</li>
      <li>Speed: your current speed</li>
    </ul>
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
