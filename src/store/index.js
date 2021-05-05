import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

function validateUser(user) {
  const nameWords = user.name.split(" ");
  if (!nameWords[1]) {
    throw new Error("Invalid name, required at least 2 words");
  }
  if (nameWords[0].length < 3 || nameWords[1].length < 3) {
    throw new Error("Invalid name, each word required at least 3 characters");
  }
  if (user.phone.length !== 15) {
    throw new Error("Invalid phone number format");
  }
}

const store = new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
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
    deleteUser(state, userToDelete) {
      state.users = state.users.filter((user) => user.id !== userToDelete.id);
    },
  },
});

export default store;
