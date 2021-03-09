<template>
  <transition
    name="fade-greeting"
    appear
    @after-appear="pageAppeared"
    @after-leave="pageLeaved"
  >
    <div class="section container" v-if="visibility.page">
      <div class="container container--column align-center justify-center">
        <h2 class="text text--heading">
          Hi, I am Roman
        </h2>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      visibility: {
        page: true,
      },
    };
  },
  methods: {
    pageAppeared() {
      this.visibility.page = false;
    },
    pageLeaved() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style lang="stylus" scoped>
.fade-greeting-enter-active
  transition: opacity 1s 1s;

.fade-greeting-leave-active
  transition: opacity 1s 1s;

.fade-greeting-enter, .fade-greeting-leave-to
  opacity: 0;
</style>
