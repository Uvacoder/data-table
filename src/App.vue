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
            <VButton variant="green" @click="openModalUpdateUser(user)">
              Edit
            </VButton>
            <VButton variant="red" @click="removeUser(user)">Delete</VButton>
          </td>
        </tr>
      </template>
    </VTable>

    <VModal title="Update user" ref="modalUpdateUser">
      <p>modal user</p>
    </VModal>
  </div>
</template>

<script>
import dataUsers from "@/api/index";
import VTable from "@/components/VTable.vue";
import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";

export default {
  name: "App",
  components: { VTable, VButton, VModal },
  data: () => ({
    dataUsers,
    userForm: {
      name: "",
      phone: "",
    },
  }),

  methods: {
    openModalUpdateUser(user) {
      this.$refs.modalUpdateUser.open();
      this.userForm = { ...user };
    },
    addUser(userToAdd) {
      this.dataUsers.push({ ...userToAdd });
    },
    updateUser(userToUpdate) {
      const index = this.dataUsers.findIndex(
        (user) => user.id === userToUpdate.id
      );
      if (index !== -1) {
        this.dataUsers[index] = { ...userToUpdate };
      }
    },
    removeUser(userToDelete) {
      this.dataUsers = this.dataUsers.filter(
        (user) => user.id !== userToDelete.id
      );
    },
  },
};
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
