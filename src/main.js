import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"

//vue-cli's dotenv, data from .env
console.log("NODE_ENV", process.env.NODE_ENV)
console.log("VUE_APP_BASE_URL", process.env.VUE_APP_BASE_URL)
console.log("VUE_APP_DEV_SERVER", process.env.VUE_APP_DEV_SERVER)
console.log("VUE_APP_SUB_PATH", process.env.VUE_APP_SUB_PATH)


// for axiosInstance, no need to xampp
let subPath = process.env.NODE_ENV === "production" 
      ? process.env.VUE_APP_SUB_PATH 
      : ""
let axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `http://localhost/${subPath}`
      : "http://localhost:3000/",
})


// for php cli server
Vue.prototype.$axios = axiosInstance
// for xampp
// Vue.prototype.$axios = axios;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  },
}).$mount("#app");
