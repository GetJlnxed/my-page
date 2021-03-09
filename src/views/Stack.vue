<template>
  <transition name="fade">
    <div class="section container align-center justify-center">
      <div class="section__label">
        <p class="text text--subheading">02. ———— Стэк.</p>
      </div>
      <div
        class="container container--row align-center justify-center nowrap slides"
      >
        <transition name="fade">
          <div
            class="backgroundLogo container align-center justify-center"
            v-if="visibility.backgroundLogo"
          >
            <img class="backgroundLogo__logo" :src="itemImage" alt="" />
          </div>
        </transition>

        <Hatch
          v-for="hatch in hatches"
          :key="hatch.id"
          :selected="hatch.isSelected"
          :hovered="hatch.isHovered"
          :title="hatch.value"
          @click.native="clickHatchHandler(hatch)"
          @mouseover.native="hoverHatchHandler(hatch)"
          @mouseleave.native="unhoverHatchHandler(hatch)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import Hatch from "@/components/Hatch";

export default {
  name: "Stack",
  data() {
    return {
      selectedImage: "",
      seltectedHatch: null,
      visibility: {
        backgroundLogo: false,
      },
      hatches: [
        {
          id: 0,
          isHovered: false,
          isSelected: false,
          value: "HTML",
          link: "html.png",
        },
        {
          id: 1,
          isHovered: false,
          isSelected: false,
          value: "CSS",
          link: "css.png",
        },
        {
          id: 2,
          isHovered: false,
          isSelected: false,
          value: "JS",
          link: "js.png",
        },
        {
          id: 3,
          isHovered: false,
          isSelected: false,
          value: "VUE",
          link: "vue.png",
        },
        {
          id: 4,
          isHovered: false,
          isSelected: false,
          value: "STYLUS",
          link: "stylus.png",
        },
        {
          id: 5,
          isHovered: false,
          isSelected: false,
          value: "GIT",
          link: "git.png",
        },
        {
          id: 6,
          isHovered: false,
          isSelected: false,
          value: "WEBPACK",
          link: "webpack.png",
        },
        {
          id: 7,
          isHovered: false,
          isSelected: false,
          value: "GULP",
          link: "gulp.png",
        },
        {
          id: 8,
          isHovered: false,
          isSelected: false,
          value: "VUETIFY",
          link: "vuetify.png",
        },
        {
          id: 9,
          isHovered: false,
          isSelected: false,
          value: "JQUERY",
          link: "jquery.png",
        },
        {
          id: 10,
          isHovered: false,
          isSelected: false,
          value: "V-NATIVE",
          link: "vuenative.png",
        },
        {
          id: 11,
          isHovered: false,
          isSelected: false,
          value: "NODE",
          link: "node.png",
        },
        {
          id: 12,
          isHovered: false,
          isSelected: false,
          value: "C#",
          link: "csharp.png",
        },
      ],
    };
  },
  components: {
    Hatch,
  },
  methods: {},
  computed: {
    itemImage() {
      if (!this.selectedImage) {
        return;
      }
      const fileName = this.selectedImage.toLowerCase();
      return require(`../assets/img/stack/${fileName}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.slides
  height: 350px;
  text-align center

.backgroundLogo
  position absolute
  width 50%
  height 50%
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

.backgroundLogo__logo
  max-width: 100%;
  max-height: 100%;
  opacity 0.2
</style>
