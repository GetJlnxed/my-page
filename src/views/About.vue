<template>
  <transition name="fade" appear @after-appear="pageAppeared" @after-leave="pageLeaved">
    <div class="section container" @wheel="wheelHandler" v-show="visibility.page">
      <div class="section__label">
        <p class="text text--subheading">01. ———— Я</p>
      </div>

      <div class="container container--row align-center justify-center aboutWall">
        <div class="container align-center aboutWall__descriptionContainer">
          <p class="text text--test">
            Тут я хотел бы заметить, что Цезарь не просто так на главной еб*лом тогрует. Водяная вода, сказки про
            компанию
          </p>
        </div>
        <div class="container antraksLogoContainer">
          <svg
            version="1.1"
            id="Слой_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1100 1000"
            class="antraksLogo"
          >
            <path class="st0" d="M575.5,374.5" />
            <polyline class="st0" points="215.13,999.79 215.34,999.5 215.5,999.5 721.5,297.5 " />
            <polyline class="st0" points="722,0.5 791.5,-0.5 937.5,-0.5 936.5,650.5 " />
            <polygon
              class="st0"
              points="976.5,650.5 827.5,792.5 681.5,650.5 721.5,650.5 721.5,297.5 215.34,999.5 -0.5,999.5 721.5,0.5 
	936.5,0.5 936.5,650.5 "
            />
            <polygon class="st0" points="1000,864 678.51,864 594,999 915.49,999 " />
          </svg>
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

.antraksLogoContainer
  position static

.aboutWall
  background url('../assets/img/texture50per.png')
  background-color #000000
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index 1

.aboutWall__descriptionContainer
  padding 2rem 4rem
  box-sizing border-box

.antraksLogo
  height 30vw
  min-height: 20vh;
  display: block;
  stroke #575757
  stroke-width 20px
  fill: none
  animation identifier 1s 2s

.text--test
  font-size 1.3rem

@keyframes identifier {
  0% {
    stroke #575757
  }

  50% {
    stroke #ffffff
  }

  100% {
    stroke #575757
  }
}

@media (max-width: 600px) {
  .aboutWall {
    background #000000
  }

  .antraksLogo {
    z-index -1
    height 100%
  }

  .antraksLogoContainer {
    position absolute
  }

  .aboutWall__descriptionContainer {
    padding 1rem 2rem
  }
}
</style>
