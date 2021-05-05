<template>
  <section class="wrapper">
    <VButton @click="$refs.modalAddUser.open()">
      <font-awesome-icon :icon="['fas', 'plus']" /> Add new user
    </VButton>

    <VModal ref="modalAddUser" title="Add new user">
      <form @submit.prevent="submitFormAdd" class="form-modal-add">
        <VInput
          label="Name"
          id="addName"
          v-model="userForm.name"
          placeholder="Ex: Lucas Santos"
        />
        <VInputTel
          label="Phone"
          id="addPhone"
          v-model="userForm.phone"
          placeholder="Ex: (##) #####-####"
        />

        <div class="modal-btn-group">
          <VButton variant="gray" @click="closeModalAddUser">Cancel</VButton>
          <VButton type="submit">Add</VButton>
        </div>
      </form>
    </VModal>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import { VModal, VButton, VInput, VInputTel } from "@/components/ui";

export default {
  name: "FormAddUser",
  components: { VModal, VButton, VInput, VInputTel },
  data: () => ({
    userForm: { name: "", phone: "" },
  }),

  methods: {
    ...mapMutations(["addUser"]),

    submitFormAdd() {
      try {
        this.addUser(this.userForm);
        this.closeModalAddUser();
      } catch (error) {
        alert(error.message);
      }
    },
    closeModalAddUser() {
      this.$refs.modalAddUser.close();
      this.clearUserForm();
    },
    clearUserForm() {
      this.userForm = { name: "", phone: "" };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins";

.wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.75rem;

  .form-modal-add {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .modal-btn-group {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1rem 0 0 0;
      border-top: $dark-grey 1px solid;
    }
  }

  @include on-screen-xs {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
