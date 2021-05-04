<template>
  <div class="wrapper">
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

    <VModal ref="modalUpdateUser" title="Edit user">
      <form @submit.prevent="submitFormEdit" class="form-edit">
        <VInput
          ref="inputName"
          label="Name"
          id="editName"
          v-model="userForm.name"
        />
        <VInputTel label="Phone" id="editPhone" v-model="userForm.phone" />

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
    ...mapMutations(["editUser", "removeUser"]),

    openModalUpdateUser(user) {
      this.userForm = { ...user };
      this.$refs.modalUpdateUser.open();
      this.$nextTick(() => {
        this.$refs.inputName.focus();
      });
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.wrapper {
  .v-table .td-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
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
