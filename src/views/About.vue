<template>
  <transition name="fade" appear @after-appear="pageAppeared" @after-leave="pageLeaved">
    <div class="section container" @wheel="wheelHandler" v-show="visibility.page">
      <div class="section__label">
        <p class="text text--subheading">01. ———— Я</p>
      </div>

      <div class="container container--row align-center justify-center aboutWall">
        <div class="container align-center aboutWall__descriptionContainer">
          <p class="text text--test">Что-то тут явно должно быть написано, но что - я не придумал, увы</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      state: {
        direction: null,
        mayScroll: false,
      },
      visibility: {
        page: true,
      },
    };
  },
  methods: {
    pageAppeared() {
      this.state.mayScroll = true;
    },
    pageLeaved() {
      if (this.state.direction == "down") this.$router.push({ name: "stack" });
      else this.$router.push({ name: "intro" });
    },
    wheelHandler(event) {
      let direction = event.deltaY < 0 ? "up" : "down";
      if (this.state.mayScroll) {
        if (direction == "down") this.state.direction = "down";
        else this.state.direction = "up";

        this.visibility.page = false;
        this.state.mayScroll = false;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.section__label
  z-index 2

.aboutWall
  /* background url('../assets/img/texture50per.png')
  background-color #000000
  background-position center
  background-repeat no-repeat
  background-size contain */
  z-index 1

.aboutWall__descriptionContainer
  padding 2rem 4rem
  box-sizing border-box

.text--test
  font-size 1.3rem

@keyframes identifier
  0%
    stroke #575757

  50%
    stroke #ffffff

  100%
    stroke #575757

@media (max-width 600px)
  .aboutWall
    background #000000

  .aboutWall__descriptionContainer
    padding 1rem 2rem
</style>
