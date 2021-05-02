<template>
  <div id="app">
    <h1>Users list</h1>

    <VTable
      class="v-table"
      :theadCols="[
        { text: 'Name', width: 200 },
        { text: 'Phone', width: 200 },
        { text: 'Action', width: 100 },
      ]"
    >
      <template #tbody>
        <tr v-if="!dataUsers.length">
          <td colspan="3">No users found</td>
        </tr>

        <tr v-for="user in dataUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <VButton variant="green">Edit</VButton>
            <VButton variant="red" @click="removeUser(user)">Delete</VButton>
          </td>
        </tr>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dataUsers from "@/api/index";
import VTable from "@/components/ui/VTable.vue";
import VButton from "@/components/ui/VButton.vue";
import { IUser } from "./types";

export default Vue.extend({
  name: "App",
  components: { VTable, VButton },
  data: () => ({
    dataUsers,
  }),

  methods: {
    createUser(newUser: IUser) {
      this.dataUsers.push({ ...newUser });
    },
    updateUser(userToUpdate: IUser) {
      const index = this.dataUsers.findIndex(
        (user) => user.id === userToUpdate.id
      );
      if (index !== -1) {
        this.dataUsers[index] = { ...userToUpdate };
      }
    },
    removeUser(userToDelete: IUser) {
      this.dataUsers = this.dataUsers.filter(
        (user) => user.id !== userToDelete.id
      );
    },
  },
});
</script>

<style lang="scss" scoped>
#app {
  text-align: center;

  .v-table {
    margin: 0 auto;
    max-width: 800px;
  }
}
</style>
