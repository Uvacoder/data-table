<template>
  <transition name="fade-transition">
    <div v-if="isOpen" class="modal-overlay" @click.stop="close">
      <div class="modal-wrapper" @click.stop>
        <header>
          <h2>{{ title }}</h2>

          <button class="btn-close" @click="close">
            <font-awesome-icon class="times-icon" :icon="['fas', 'times']" />
          </button>
        </header>

        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VModal",
  props: {
    title: { type: String, default: "" },
  },
  data: () => ({
    isOpen: false,
  }),

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";
@import "@/assets/styles/_mixins";

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #2e2e2e4f;
  user-select: none;
}

.modal-wrapper {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0 #333;
  user-select: text;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.3rem 0;
    font-size: 1.2em;
    border-bottom: $grey 1px solid;
  }

  header .btn-close {
    @include transition;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    padding: 0.35rem;
    border-radius: 50%;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      background-color: $grey;
    }

    .times-icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  main {
    flex: 1;
  }
}
</style>
