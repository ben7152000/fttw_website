<template>
  <div class="direction-container">
    <h4 class="mb-6">In this Cut-E/AON test you will see images changing constantly on the left and right. You will have to click the equal button when two equal shapes appear.</h4>
    <h4>In the test this will look like the following:</h4>
    <div class="img-box">
      <img :src="require('../../assets/reactionSpeed/1.png')" alt="1">
    </div>
    <h4>In the following image you see that both images are the same and represent a star:</h4>
    <div class="img-box">
      <img :src="require('../../assets/reactionSpeed/2.png')" alt="2">
    </div>
    <h4 class="mb-6">In the above example, the test candidate made the correct choice and clicked the equal button on time and before the images changed again.</h4>
    <h4>In the following image, the test candidate failed to make a correct choice to click the equal button when two equal images where represented:</h4>
    <div class="img-box">
      <img :src="require('../../assets/reactionSpeed/3.png')" alt="3">
    </div>
  </div>
</template>
