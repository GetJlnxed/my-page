<template>
  <transition name="fade" @after-leave="pageLeaved">
    <div class="section container introSection" @wheel="wheelHandler" @swipe="swipeHandler" v-show="visibility.page">
      <transition name="fade-slow" @after-appear="caesarAppeared" appear>
        <div class="logos">
          <img class="logos__logo" src="@/assets/img/caesar/caesar-glitched.gif" v-show="state.caesarGlitching" />
          <img class="logos__logo" src="@/assets/img/caesar/caesar_non_glitched.png" v-show="!state.caesarGlitching" />
        </div>
      </transition>
      <transition name="fade-slow" @after-enter="scrollIconEntered">
        <div class="container container--column align-center justify-center scrollAdvise" v-if="visibility.scrollIcon">
          <div class="container scrollAdvise__inner align-center justify-center">
            <img class="scrollAdvise__icon" src="@/assets/img/scroll.gif" />
            <transition name="slide-fade" @after-enter="scrollTextEntered">
              <p class="text scrollAdvise__text" v-if="visibility.scrollIconText">
                {{ scrollText }}
              </p>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import { checkMobile } from "../mixins/checkMobile";

export default {
  name: "Intro",
  mixins: [checkMobile],
  data() {
    return {
      scrollText: "",
      state: {
        caesarGlitching: true,
        mayScroll: false,
      },
      visibility: {
        page: true,
        scrollIcon: false,
        scrollIconText: false,
      },
    };
  },
  created() {
    this.scrollText = isMobile ? "Swipe" : "Scroll down";
  },
  methods: {
    scrollIconEntered() {
      this.visibility.scrollIconText = true;
    },
    scrollTextEntered() {
      this.state.mayScroll = true;
    },
    caesarAppeared() {
      this.visibility.scrollIcon = true;
      this.state.caesarGlitching = false;
    },
    pageLeaved() {
      this.$router.push({ name: "greeting" });
    },
    switchOffPage() {
      for (let key in this.visibility) {
        this.visibility[key] = false;
      }
    },
    wheelHandler(event) {
      let direction = event.deltaY < 0 ? "up" : "down";
      if (this.state.mayScroll) {
        if (direction == "down") {
          this.visibility.page = false;
          this.state.mayScroll = false;
        } else {
          this.state.mayScroll = false;
        }
      }
    },
    swipeHandler() {
      this.scrollText = "fdsf";
      console.log("swipe");
    },
  },
};
</script>

<style lang="stylus" scoped>
.logos {
  position: relative;
  width: 100%;
  height: 100vh;
}

.logos__logo {
  position: absolute;
  height: 80vw;
  min-height: 80vh;
  display: block;
}

.scrollAdvise {
  margin-right: 5%;
}

.scrollAdvise__icon {
  height: 8vw;
  align-self: center;
  margin-bottom: 20px;
  user-select: none;
}

.scrollAdvise__text {
  position: absolute;
  bottom: -1rem;
  color: #c9c9c9;
  user-select: none;
}

.scrollAdvise__inner {
  position: relative;
}

@media (max-width: 850px) {
  .scrollAdvise__icon {
    height: 25vw;
  }

  .introSection {
    flex-flow: column nowrap;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
  }

  .logos__logo {
    min-height: 100vw;
  }
}
</style>
