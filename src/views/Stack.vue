<template>
  <transition name="fade" appear @after-leave="pageLeaved">
    <div class="section container align-center justify-center" @wheel="wheelHandler" v-show="visibility.page">
      <div class="section__label">
        <p class="text text--subheading">02. ———— Стэк.</p>
      </div>
      <div class="container container--row align-center justify-center nowrap slides">
        <transition name="fade" appear>
          <div class="backgroundLogo container align-center justify-center" v-if="visibility.backgroundLogo">
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
          @hatch-entered="hatchEntered"
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
      state: {
        hatchesAmount: 0,
        direction: null,
        hatchesLoadedAmount: 0,
        mayScroll: false,
      },
      visibility: {
        backgroundLogo: true,
        page: true,
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
          id: 7,
          isHovered: false,
          isSelected: false,
          value: "STYLUS",
          link: "stylus.png",
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
          value: "JQUERY",
          link: "jquery.png",
        },
        {
          id: 4,
          isHovered: false,
          isSelected: false,
          value: "VUE",
          link: "vue.png",
        },
        {
          id: 5,
          isHovered: false,
          isSelected: false,
          value: "NATIVE",
          link: "vuenative.png",
        },
        {
          id: 6,
          isHovered: false,
          isSelected: false,
          value: "VUETIFY",
          link: "vuetify.png",
        },
        {
          id: 8,
          isHovered: false,
          isSelected: false,
          value: "WEBPACK",
          link: "webpack.png",
        },
        {
          id: 9,
          isHovered: false,
          isSelected: false,
          value: "GULP",
          link: "gulp.png",
        },

        {
          id: 10,
          isHovered: false,
          isSelected: false,
          value: "GIT",
          link: "git.png",
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
  created() {
    this.state.hatchesAmount = this.hatches.length;
  },
  methods: {
    clickHatchHandler(hatch) {
      if (this.seltectedHatch != hatch) {
        this.unselectAllhatches();
        this.seltectedHatch = hatch;
        this.selectedImage = hatch.link;
        hatch.isSelected = true;
        this.visibility.backgroundLogo = false;
        setTimeout(() => {
          this.visibility.backgroundLogo = true;
        }, 200);
      }
    },
    unselectAllhatches() {
      this.hatches.forEach((hatch) => {
        hatch.isSelected = false;
      });
    },
    hoverHatchHandler(hatch) {
      hatch.isHovered = true;
    },
    unhoverHatchHandler(hatch) {
      hatch.isHovered = false;
    },
    hatchEntered(e) {
      console.log(e);
      this.state.hatchesLoadedAmount++;
    },
    pageLeaved() {
      if (this.state.direction == "down") this.$router.push({ name: "roadmap" });
      else this.$router.push({ name: "about" });
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
  watch: {
    state: {
      deep: true,
      handler: function (newVal) {
        if (newVal.hatchesLoadedAmount == this.state.hatchesAmount) {
          this.hatches[0].isHovered = true;
          this.state.mayScroll = true;
          setTimeout(() => {
            this.hatches[0].isHovered = false;
            this.clickHatchHandler(this.hatches[0]);
          }, 500);
        }
      },
    },
  },
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

@media (max-width: 600px) {
  .backgroundLogo {
    width 80%
    height 80%
  }
}
</style>
