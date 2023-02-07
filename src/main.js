import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

createApp(App).use(router, VueSweetalert2).mount('#app');
