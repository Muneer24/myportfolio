<template>            
    <div class="tech">
      <!-- Your work experience content goes here -->
      <h2 class="text-5xl font-bold text-gray-900">Tech Stack</h2>
    </div>
    <div class="wrapper">
  <div class="tiles-card root vue-card">
    <div class="tiles-overlay"></div>
    <div class="tiles-circle">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png">
      <p>VueJs</p>
    </div>
  </div>

  <div class="tiles-card root react-card">
    <div class="tiles-overlay"></div>
    <div class="tiles-circle">
      <img src="../assets/react.png">
      <p>React</p>
    </div>
  </div>

  <div class="tiles-card root angular-card">
    <div class="tiles-overlay"></div>
    <div class="tiles-circle">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Angular_icon.svg/1024px-Angular_icon.svg.png">
      <p>Angular</p>
    </div>
  </div>
</div>
       
        
</template>
  
<script>
export default {
  name: 'TechStack'
  // Add any data, methods, or lifecycle hooks here if needed
};
</script>

<style scoped>


h1, h2{
   font-family: Popcat, Horizon, sans-serif;
   color: rgb(0, 0, 0);
 }

p{
  font-family: Poppins;
  font-size: 1.1em;
  color: rgb(0, 0, 0);
}


.tech {
  background-color: #ffffff; /* Change to your desired color */
  padding: 20px;
  border-radius: 8px; /* Optional, for rounded corners */
}

.react-card:hover {
  background-color: #00d8ff; /* React blue */
}

.angular-card:hover {
  background-color: #DD0031; /* Angular red */
}

.vue-card:hover {
  background-color: #41B883; /* Vue.js green */
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  background-color: #fefefe;
}

* {
  box-sizing: content-box;
}

.root {
  --bg-color: #33c7db00;
  --bg-color-light: #fff;
  --box-shadow-color: rgba(19, 51, 55, 0.75);
}

.tiles-card {
  width: 135px;
  height: 135px;
  background: var(--bg-color-light);
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 26px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  transition: all 0.3s ease-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tiles-overlay {
  width: 78px;
  height: 78px;
  position: absolute;
  border-radius: 50%;
  background: var(--bg-color);
  margin: auto;
  z-index: 0;
  transition: transform 0.3s ease-out;
}

.tiles-circle {
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
  margin: auto;
}

.tiles-circle::after {
  content: "";
  width: 78px;
  height: 78px;
  display: block;
  position: absolute;
  background: var(--bg-color);
  border-radius: 50%;
  transition: opacity 0.3s ease-out;
}

.tiles-circle img {
  height: 45px;
  margin-top: 5px;
  z-index: 10000;
  transform: scale(1) translateZ(0) rotateY(0deg);
  transition: all 0.3s ease-out;
  position: static;
}

.tiles-circle p {
  opacity: 0;
  visibility: hidden;
  transform: scale(0) translateZ(0) rotateY(180deg);
  transition: all 0.3s ease-out;
  position: absolute;
  z-index: 10000;
  cursor: default;
}

.tiles-card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 0px 36px rgba(0, 0, 0, 0.11), 0 0px 46px var(--box-shadow-color);
}

.tiles-card:hover .tiles-overlay {
  transform: scale(4) translateZ(0);
}

.tiles-card:hover .tiles-circle {
  border-color: var(--bg-color-light);
  background: var(--bg-color);
}

.tiles-card:hover .tiles-circle::after {
  background: var(--bg-color-light);
}

.tiles-card:hover .tiles-circle img {
  opacity: 0;
  transform: scale(0) translateZ(0) rotateY(180deg);
  position: absolute;
}

.tiles-card:hover .tiles-circle p {
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateZ(0) rotateY(0deg);
  position: static;
}


</style>