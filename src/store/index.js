import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import dataUsers from "@/api/index";

Vue.use(Vuex);

function validateUser(user) {
  if (user.name.length < 3)
    throw new Error("Invalid name, required at least 3 characters");
  if (user.phone.length !== 14 && user.phone.length !== 15)
    throw new Error("Invalid phone number format");
}

const store = new Vuex.Store({
  state: {
    users: dataUsers,
  },
  mutations: {
    addUser(state, userToAdd) {
      validateUser(userToAdd);
      state.users.unshift({ ...userToAdd, id: uuidv4() });
    },
    editUser(state, userToEdit) {
      validateUser(userToEdit);

      const index = state.users.findIndex((user) => user.id === userToEdit.id);
      if (index !== -1) {
        Vue.set(state.users, index, { ...userToEdit });
      } else {
        throw new Error("Unable to update, invalid user received");
      }
    },
    removeUser(state, userToDelete) {
      state.users = state.users.filter((user) => user.id !== userToDelete.id);
    },
  },
});

export default store;
