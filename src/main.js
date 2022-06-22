import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 用于在没有 Devtools 时的调试
window.store = store

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
