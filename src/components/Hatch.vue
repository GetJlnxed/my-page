<template>
  <div
    class="slide"
    :class="{ 'slide--hovered': hovered, 'slide--selected': selected }"
  >
    <transition name="appear" appear @after-enter="hatchEntered">
      <span class="slide__hatch" v-show="isVisible"></span>
    </transition>
    <transition name="slide-fade-hatch" appear>
      <div class="slide__title" v-if="selected">
        <span class="text text--bold">{{ title }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Hatch",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    hovered: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, this.getRandomArbitrary(20, 1800));
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    hatchEntered() {
      this.$emit("hatch-entered");
    },
  },
};
</script>

<style lang="stylus" scoped>
.slide
  width 40px
  height 60%
  transition height .5s 0s, padding .8s .3s
  cursor pointer
  position relative

.slide--hovered
  height 80%
  & .slide__hatch
    transition .5s
    background-color #0f69a3


.slide--selected
  padding 0 30px
  height 90%
  & .slide__hatch
    transition .5s cubic-bezier(.28,.09,.98,.43)
    background-color #17a5ff

.slide__hatch
  display block
  width 8px
  height 100%
  background-color #fff

.slide__title
  position: absolute;
  width: 100%;
  left: -17px;
  margin-top: 10px
  color #17a5ff

.slide-fade-hatch-enter-active
  transition: all .5s .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.slide-fade-hatch-leave-active
  transition: all .3s ease;

.slide-fade-hatch-enter, .slide-fade-hatch-leave-to
  transform: translateY(10px);
  opacity: 0;

@media (max-width: 600px) {
  .slide {
    width 5%
  }

  .slide__title {
    left -1.5vw
  }

  .backgroundLogo {
    width 80%
    height 80%
  }
}
</style>
