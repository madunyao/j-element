import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/style.css';
import './assets/scss/style.scss';
import 'font-awesome/css/font-awesome.min.css';
// 国际化
import VueI18n from './assets/language/index';

createApp(App).use(store).use(router).use(VueI18n)
  .mount('#app');
