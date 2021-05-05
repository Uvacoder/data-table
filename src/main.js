import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";

library.add([faTimes, faPlus, faTrash, faEdit]);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
