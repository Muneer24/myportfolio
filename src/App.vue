<template>
  <div id="app">
    <HomePage /> 
    <TechStack />
    <WorkXp />
    <Testimonials />
    <Contact />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import TechStack from "./components/TechStack.vue";
import WorkXp from "./components/WorkXp.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    HomePage,
    TechStack,
    WorkXp,
    Testimonials,
    Contact
  }
};
</script>

 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif, Horizon;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 10px;
   
 }
 
 .custom-font {
    font-family: 'Popcat', sans-serif; /* Fallback to sans-serif */
}

 h1, h2{
   font-family: Popcat, Horizon, sans-serif;
   color: black;
 }

p{
  font-family: Poppins;
  font-size: 1.1em;
  color: black;
}


 body{
   display:flex;
   margin:0;
   padding:0;
   min-height: 100vh;
   justify-content: center;
   align-items: center;
 }
 
 /* Container settings */
.container {
   width: 100%; /* Full width for responsiveness */
   max-width: 1000px; /* Maintain max width */
   position: relative;
   display: flex;
   justify-content: center; /* Center items horizontally */
   flex-wrap: wrap; /* Allow wrapping */
}

/* Card settings */
.container .card {
   position: relative;
   flex: 1 1 300px; /* Allow cards to grow/shrink, with a minimum width of 300px */
   margin: 10px; /* Add margin for spacing */
}

/* Face settings */
.container .card .face {
   width: 100%; /* Full width of the card */
   height: 200px; /* Fixed height */
   transition: .4s;
}

.container .card .face.face1 {
   position: relative;
   background: #0f0c29;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1;
   transform: translateY(100px);
}

/* Hover effects */
.container .card:hover .face.face1 {
   transform: translateY(0);
   box-shadow: inset 0 0 60px whitesmoke,
               inset 20px 0 80px #f0f,
               inset -20px 0 80px #0ff,
               inset 20px 0 300px #f0f,
               inset -20px 0 300px #0ff,
               0 0 50px #fff,
               -10px 0 80px #f0f,
               10px 0 80px #0ff;
}

/* Content settings */
.container .card .face.face1 .content {
   opacity: .2;
   transition: 0.5s;
   text-align: center;
}

.container .card:hover .face.face1 .content {
   opacity: 1;
}

.container .card .face.face1 .content i {
   font-size: 3em;
   color: white;
   display: inline-block;
}

.container .card .face.face1 .content h3 {
   font-size: 1em;
   color: white;
   text-align: center;
}

.container .card .face.face1 .content a {
   transition: .5s;
}

.container .card .face.face2 {
   position: relative;
   background: whitesmoke;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
   box-sizing: border-box;
   box-shadow: 0 20px 50px rgba(214, 215, 216, 0.8);
   transform: translateY(-100px);
}

.container .card:hover .face.face2 {
   transform: translateY(0);
}

.container .card .face.face2 .content p,
.container .card .face.face2 .content a {
   font-size: 10pt;
   margin: 0;
   padding: 0;
   color: #333;
}

.container .card .face.face2 .content a {
   text-decoration: none;
   color: black;
   box-sizing: border-box;
   outline: 1px dashed #333;
   padding: 10px;
   margin: 15px 0 0;
   display: inline-block;
}

.container .card .face.face2 .content a:hover {
   background: #333;
   color: whitesmoke;
   box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}

/* Responsive styles */
@media (max-width: 640px) { /* Mobile view */
   .container {
      flex-direction: column; /* Stack cards vertically */
      align-items: center; /* Center cards horizontally */
   }

   .container .card {
      width: 100%; /* Full width for each card */
      margin: 10px 0; /* Margin between cards */
   }
}

 
 .box {
   background: hsl(0, 0%, 0%);
   padding: 16px 24px;
   position: relative;
   border-radius: 8px;
   box-shadow: 0 0 0 1px rgba(0,0,0,.01);
 
   &::after {
     position: absolute;
     content: "";
     top: 15px;
     left: 0;
     right: 0;
     z-index: -1;
     height: 100%;
     width: 100%;
     transform: scale(0.9) translateZ(0);
     filter: blur(15px);
     background: linear-gradient(
       to left,
       #ff5770,
       #e4428d,
       #c42da8,
       #9e16c3,
       #6501de,
       #9e16c3,
       #c42da8,
       #e4428d,
       #ff5770
     );
     background-size: 200% 200%;
     animation: animateGlow 1.25s linear infinite;
   }
 }
 
 @keyframes animateGlow {
   0% {
     background-position: 0% 50%;
   }
   100% {
     background-position: 200% 50%;
   }
 }
 
 @import url('https://fonts.cdnfonts.com/css/horizon');
 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 </style>
 