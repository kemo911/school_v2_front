import { createApp } from 'vue'
import router from './routes/index'
import App from './App.vue'
import store from './store/store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


const app = createApp(App).use(Quasar, quasarUserOptions);

// Use router and store with the application
app.use(router);
app.use(store);

// Mount the application
app.mount('#app');