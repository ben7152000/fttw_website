<template>
  <div class="direction-container">
    <h4>In this Cut-E test, the candidate has to drag one of four aircraft to the correct position in relation to the Gyro and the RBI.</h4>
    <div class="img-box">
      <img :src="require('../../assets/spatialOrientation/1.png')" alt="1">
    </div>
    <h4>In the above example, we can see on the Gyro that the airplane is flying towards the North and towards the beacon as indicated on the RBI.</h4>
    <h4>So in this case, we drag the North flying airplane to position number 5:</h4>
    <div class="img-box">
      <img :src="require('../../assets/spatialOrientation/2.png')" alt="2">
    </div>
    <h4>In the following example, we can see that the airplane is flying towards the East and has passed the beacon on the right side of the beacon.</h4>
    <div class="img-box">
      <img :src="require('../../assets/spatialOrientation/3.png')" alt="3">
    </div>
    <h4>The correct answer would be to drag the East-flying airplane to position number 4:</h4>
    <div class="img-box">
      <img :src="require('../../assets/spatialOrientation/4.png')" alt="4">
    </div>
    <h4 class="tip">Tip: watch the title orange airplane indicator inside the RBI, this will give you a better visual understanding of the position of the airplane in relation to the beacon:</h4>
    <div class="img-box">
      <img :src="require('../../assets/spatialOrientation/5.png')" alt="5">
    </div>
  </div>
</template>
