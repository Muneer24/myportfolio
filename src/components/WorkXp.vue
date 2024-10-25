<template>
  <div class="w-full h-full max-w-8xl mx-auto" style="background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
">
    <div class="text-center">
      <br>
      <h2 class="text-4xl font-bold text-white mt-16">Work Experience</h2>
    </div>
    <div class="flex flex-wrap justify-center mt-16">
  <div class="w-full max-w-4xl px-8 py-4 bg- rounded-lg shadow-lg dark:m-4">
    <div class="flex justify-center -mt-16 md:justify-end">
      <!-- Uncomment and use if you have an image -->
    </div>
    <!--<h2 class="mt-2 text-2xl font-semibold text-white dark:text-black md:mt-0">Rlabs</h2>-->
<br>
<br>
<div class="flex justify-center">
  <br>
  <img class=""alt="Testimonial avatar" style="width: 100px;" src="../assets/rlabs.png">
</div>
<br>
    <p class="mt-2 text-sm text-gray-600 dark:text-white font-family: Poppins">
      As a Web Developer, I specialize in designing and implementing custom web solutions while collaborating with corporate clients to create powerful, responsive websites. A key achievement includes the development of 
      <a href="https://klutch.mobi" class="text-orange-500 hover:underline">Klutch</a>, an innovative application that enables mechanics to efficiently order parts directly from suppliers. In my capacity as Project Lead, I facilitate training sessions in front-end web development, equipping new developers with critical skills and best practices. My responsibilities also include designing and maintaining user interfaces, optimizing SEO for both new and existing web applications, and implementing APIs and databases to enhance overall functionality and user experience.
    </p>
    <div class="flex flex-wrap justify-center mt-13">
      <a href="#" class="text-lg font-medium text-blue-600 dark:text-white" tabindex="0" role="link">March 2019 - Present</a>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'WorkXp'
  // Add any data, methods, or lifecycle hooks here if needed
};
</script>

<style scoped>
/* Add your styles here */
@media (max-width: 600px) {
  .max-w-md {
    width: 90%; /* Full width on mobile */
  }
}
</style>
