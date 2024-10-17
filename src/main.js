import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Import Tailwind CSS
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify'; // Import createVuetify from Vuetify

const vuetify = createVuetify(); // Create Vuetify instance

// Create Vue app and use Vuetify
createApp(App)
  .use(vuetify) // Use the Vuetify instance
  .mount('#app');
