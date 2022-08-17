import { createApp } from 'vue';
import App from './App.vue';
import RDesign from '../packages/index-lib';

const app = createApp(App);
app.use(RDesign);

app.mount('#app');
