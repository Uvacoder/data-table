<template>
  <div class="page-wrapper">
    <h1 class="page-title">Users List</h1>

    <VTable
      class="v-table"
      :theadCols="[
        { text: 'Name', width: 200 },
        { text: 'Phone', width: 200 },
        { text: 'Actions', align: 'center', width: 100 },
      ]"
    >
      <template #tbody>
        <tr v-if="!dataUsers.length">
          <td colspan="3">No users found</td>
        </tr>

        <tr v-for="user in dataUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td class="td-actions">
            <VButton variant="green" @click="openModalUpdateUser(user)">
              Edit
            </VButton>
            <VButton variant="red" @click="removeUser(user)">Delete</VButton>
          </td>
        </tr>
      </template>
    </VTable>

    <VModal ref="modalUpdateUser" title="Edit user">
      <form @submit.prevent="submitForm" class="modal-form">
        <VInput label="Name" id="name" v-model="userForm.name" />
        <VInput label="Phone" id="phone" v-model="userForm.phone" />

        <div class="btn-group">
          <VButton variant="gray" @click="$refs.modalUpdateUser.close()">
            Cancel
          </VButton>
          <VButton type="submit">Save</VButton>
        </div>
      </form>
    </VModal>
  </div>
</template>

<script>
import Vue from "vue";
import dataUsers from "@/api/index";
import { VTable, VButton, VModal, VInput } from "@/components";

export default {
  name: "App",
  components: { VTable, VButton, VModal, VInput },
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
    submitForm() {
      try {
        this.editUser(this.userForm);
        this.$refs.modalUpdateUser.close();
      } catch (error) {
        alert(error.message);
      }
    },
    addUser(userToAdd) {
      this.dataUsers.push({ ...userToAdd });
    },
    editUser(userToEdit) {
      const index = this.dataUsers.findIndex(
        (user) => user.id === userToEdit.id
      );
      if (index !== -1) {
        Vue.set(this.dataUsers, index, { ...userToEdit });
      } else {
        throw new Error("Unable to update, invalid user received");
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
@import "@/assets/styles/_variables";

.page-wrapper {
  text-align: center;

  .page-title {
    padding: 0.5rem 0;
    border-bottom: $grey 1px solid;
    margin-bottom: 1rem;
  }

  .v-table {
    margin: 0 auto;
    max-width: 800px;

    .td-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .btn-group {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1rem 0 0 0;
      border-top: $grey 1px solid;
    }
  }
}
</style>
