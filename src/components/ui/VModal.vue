<template>
  <transition name="fade-transition">
    <div v-if="isOpen" class="modal-overlay" @click.stop="close">
      <div class="modal-wrapper" @click.stop>
        <header>
          <h2>{{ title }}</h2>
          <button class="btn-close" @click="close">
            <svg
              class="times-icon w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
      width: 1.7rem;
      height: 1.7rem;
    }
  }

  main {
    flex: 1;
  }
}
</style>
