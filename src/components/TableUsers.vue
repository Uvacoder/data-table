<template>
  <div class="wrapper">
    <VTable class="v-table" :theadCols="theadCols">
      <template #tbody>
        <tr v-if="!users.length">
          <td colspan="3">No users found</td>
        </tr>

        <tr
          v-for="user in users"
          :key="user.id"
          :class="{ 'row-highlight': checkPhonePrefix(user.phone) }"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td class="td-actions">
            <VButton variant="green" @click="openModalUpdateUser(user)">
              Edit
            </VButton>
            <VButton variant="red" @click="openModalDeleteUser(user)">
              Delete
            </VButton>
          </td>
        </tr>
      </template>
    </VTable>

    <VModal ref="modalUpdateUser" title="Edit user">
      <form @submit.prevent="submitFormEdit" class="form-modal-edit">
        <VInput label="Name" id="editName" v-model="userForm.name" />
        <VInputTel label="Phone" id="editPhone" v-model="userForm.phone" />

        <div class="modal-btn-group">
          <VButton variant="gray" @click="$refs.modalUpdateUser.close()">
            Cancel
          </VButton>
          <VButton type="submit">Save</VButton>
        </div>
      </form>
    </VModal>

    <VModal ref="modalDeleteUser" title="Delete user" minWidth="400px">
      <div class="div-modal-delete">
        <p>
          Are you sure want to delete the user <b>{{ userForm.name }}</b> ?
        </p>

        <div class="modal-btn-group">
          <VButton variant="gray" @click="$refs.modalDeleteUser.close()">
            Cancel
          </VButton>
          <VButton variant="red" @click="confirmDeleteUser">Confirm</VButton>
        </div>
      </div>
    </VModal>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { VTable, VModal, VInput, VInputTel, VButton } from "@/components/ui";

export default {
  name: "TableUsers",
  components: { VTable, VModal, VInput, VInputTel, VButton },
  data: () => ({
    userForm: { name: "", phone: "" },
    theadCols: [
      { text: "Name", width: "200px" },
      { text: "Phone", width: "150px" },
      { text: "Actions", align: "center", width: "175px" },
    ],
  }),
  computed: {
    ...mapState(["users"]),
  },

  methods: {
    ...mapMutations(["editUser", "deleteUser"]),

    openModalUpdateUser(user) {
      this.userForm = { ...user };
      this.$refs.modalUpdateUser.open();
    },
    openModalDeleteUser(user) {
      this.userForm = { ...user };
      this.$refs.modalDeleteUser.open();
    },
    submitFormEdit() {
      try {
        this.editUser(this.userForm);
        this.$refs.modalUpdateUser.close();
        this.userForm = { name: "", phone: "" };
      } catch (error) {
        alert(error.message);
      }
    },
    confirmDeleteUser() {
      try {
        this.deleteUser(this.userForm);
        this.$refs.modalDeleteUser.close();
        this.userForm = { name: "", phone: "" };
      } catch (error) {
        alert(error.message);
      }
    },
    checkPhonePrefix(phone) {
      return phone.includes("(11)");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.wrapper {
  .v-table {
    .td-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .row-highlight {
      background-color: #3d9df240 !important;
    }
  }

  .form-modal-edit {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .div-modal-delete {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .modal-btn-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1rem 0 0 0;
    border-top: $grey 1px solid;
  }
}
</style>
