import Vue from "vue";
import Vuex from "vuex";
import Users from "./modules/users";
import Modal from "./modules/modal";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: Users,
    modal: Modal
  }
});
