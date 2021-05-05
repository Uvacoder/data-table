<template>
  <transition name="fade-transition">
    <div v-if="isOpen" class="wrapper">
      <div class="modal-overlay" @click.stop="close"></div>

      <div class="modal" @click.stop>
        <header>
          <h2 class="title">{{ title }}</h2>

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

<script>
export default {
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
      document.activeElement.blur();
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";
@import "@/assets/styles/_mixins";
.wrapper {
  position: fixed;

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
}

.wrapper .modal {
  position: fixed;
  z-index: 15;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px 0 #333;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.3rem 0;
    border-bottom: $dark-grey 1px solid;

    .title {
      font-size: 1.5rem;
    }
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
      background-color: darken($grey, 5%);
    }

    .times-icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  main {
    flex: 1;
  }

  @include on-screen-xs {
    width: calc(100% - 1rem);
  }
}
</style>
