
import { createApp } from 'vue'
import App from './App.vue'
declare global {
    interface Window {
        viewer: any
    }
}
createApp(App).mount('#app')
