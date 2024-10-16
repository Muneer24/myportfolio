<template>
  <div id="app">
    <HelloWorld /> <!-- Include your component here -->
  </div>
 </template>
 
 <script>
import HelloWorld from "./components/HomePage.vue";
 
 export default {
   name: "App",
   components: {
     HelloWorld,
   },
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
 
 h1, h2{
   font-family: Horizon, sans-serif;
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
 
 .container{
   width: 1000px;
   position: relative;
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   
 }
 
 .container .card{
   position: relative;
 }
 
 .container .card .face{
   width:300px;
   height: 200px;
   transition:.4s;
   
 }
 
 .container .card .face.face1{
   position: relative;
   background: #6211c4;
   display: flex;
   justify-content: center;
   align-content:center;
   align-items: center;
   z-index: 1;
   transform: translateY(100px);
 }
 
 .container .card:hover .face.face1{
   transform: translateY(0);
   box-shadow:
     inset 0 0 60px whitesmoke,
     inset 20px 0 80px #f0f,
     inset -20px 0 80px #0ff,
     inset 20px 0 300px #f0f,
     inset -20px 0 300px #0ff,
     0 0 50px #fff,
     -10px 0 80px #f0f,
     10px 0 80px #0ff;
    
 }
 
 
 .container .card .face.face1 .content{
   opacity: .2;
   transition:  0.5s;
   text-align: center;
 }
 
 .container .card:hover .face.face1 .content{
   opacity: 1;
 }
 
 .container .card .face.face1 .content i{
   font-size: 3em;
   color: white;
   display: inline-block;
    
 }
 
 .container .card .face.face1 .content h3{
   font-size: 1em;
   color: white;
   text-align: center;
   
 
 }
 
 .container .card .face.face1 .content a{
    transition: .5s;
 }
 
 .container .card .face.face2{
    position: relative;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
   box-sizing: border-box;
   box-shadow: 0 20px 50px rgba(132, 132, 133, 0.8);
   transform: translateY(-100px);
 }
 
 .container .card:hover .face.face2{
     transform: translateY(0);
 
 
 }
 
 .container .card .face.face2 .content p, a{
   font-size: 10pt;
   margin: 0 ;
   padding: 0;
   color:#333;
 }
 
 .container .card .face.face2 .content a{
   text-decoration:none;
   color: black;
   box-sizing: border-box;
   outline : 1px dashed #333;
   padding: 10px;
   margin: 15px 0 0;
   display: inline-block;
 }
 
 .container .card .face.face2 .content a:hover{
   background: #333 ;
   color: whitesmoke; 
   box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
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
 