<template>
  <div class="page-wrapper">
    <h1 class="page-title">Users List</h1>

    <main>
      <form @submit.prevent="submitFormAdd" class="form-add">
        <VInput
          label="Name"
          id="addName"
          v-model="addUserForm.name"
          placeholder="Ex: Lucas S."
        />
        <VInputTel
          label="Phone"
          id="addPhone"
          placeholder="Ex: (##) #####-####"
          v-model="addUserForm.phone"
        />

        <div class="btn-group">
          <VButton type="submit">Add</VButton>
          <VButton variant="gray" @click="clearNewUserForm">Clear</VButton>
        </div>
      </form>

      <VTable class="v-table" :theadCols="theadCols">
        <template #tbody>
          <tr v-if="!users.length">
            <td colspan="3">No users found</td>
          </tr>

          <tr v-for="user in users" :key="user.id">
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
    </main>

    <VModal ref="modalUpdateUser" title="Edit user">
      <form @submit.prevent="submitFormEdit" class="form-edit">
        <VInput label="Name" id="editName" v-model="editUserForm.name" />
        <VInputTel label="Phone" id="editPhone" v-model="editUserForm.phone" />

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
import { mapMutations, mapState } from "vuex";
import { VTable, VButton, VModal, VInput, VInputTel } from "@/components";

export default {
  name: "App",
  components: { VTable, VButton, VModal, VInput, VInputTel },
  data: () => ({
    addUserForm: { name: "", phone: "" },
    editUserForm: { name: "", phone: "" },
    theadCols: [
      { text: "Name", width: 200 },
      { text: "Phone", width: 200 },
      { text: "Actions", align: "center", width: 100 },
    ],
  }),
  computed: {
    ...mapState(["users"]),
  },

  methods: {
    ...mapMutations(["addUser", "editUser", "removeUser"]),

    openModalUpdateUser(user) {
      this.$refs.modalUpdateUser.open();
      this.editUserForm = { ...user };
    },
    submitFormEdit() {
      try {
        this.editUser(this.editUserForm);
        this.$refs.modalUpdateUser.close();
        this.editUserForm = { name: "", phone: "" };
      } catch (error) {
        alert(error.message);
      }
    },
    submitFormAdd() {
      try {
        this.addUser(this.addUserForm);
        this.addUserForm = { name: "", phone: "" };
      } catch (error) {
        alert(error.message);
      }
    },
    clearNewUserForm() {
      this.addUserForm = { name: "", phone: "" };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.page-wrapper {
  .page-title {
    padding: 0.5rem 0;
    border-bottom: $grey 1px solid;
    margin-bottom: 1rem;
  }

  main {
    margin: 0 auto;
    max-width: 700px;
    padding-bottom: 2rem;
  }

  .form-add {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;

    .btn-group {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 1rem;
    }
  }

  .v-table {
    .td-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }

  .form-edit {
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
