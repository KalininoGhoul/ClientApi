import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import setToken from './helpers/setToken';

createApp(App)
.use(router)
.mount('#app');

axios.defaults.baseURL = 'http://localhost/api-tort';

const token = localStorage.getItem('user_token');

if (token) setToken(token);