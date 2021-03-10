<template>
  <transition name="fade" appear @after-leave="pageLeaved">
    <div
      class="section container justify-center align-center"
      v-show="visibility.page"
      @wheel="wheelHandler"
    >
      <transition name="fade" appear>
        <div class="section__label">
          <p class="text text--subheading">03. ———— Путь.</p>
        </div>
      </transition>
      <div class="timeline">
        <transition name="height" appear>
          <span class="timeline__line" v-if="visibility.line"></span>
        </transition>
        <timestamp
          v-for="point in points"
          :key="point.id"
          :title="point.title"
          :content="point.content"
          :left="point.direction == 'left' ? true : false"
          :visibilityTimeout="point.timeout"
          :numberOneAmount="point.numbers.bugs"
          :numberTwoAmount="point.numbers.features"
          :numberThreeAmount="point.numbers.coffee"
          @rendered="activatePoint(point.id)"
        >
          <div
            class="container container--row"
            :class="{
              'justify-end': point.direction == 'left',
              'justify-start': !point.direction == 'right',
            }"
          >
            <p class="text">Багов исправлено:</p>
            <AnimatedNumber v-if="point.visible" :value="point.numbers.bugs" />
          </div>
          <div
            class="container container--row"
            :class="{
              'justify-end': point.direction == 'left',
              'justify-start': !point.direction == 'right',
            }"
          >
            <p class="text">Фич придумано:</p>
            <AnimatedNumber v-if="point.visible" :value="point.numbers.features" />
          </div>
          <div
            class="container container--row"
            :class="{
              'justify-end': point.direction == 'left',
              'justify-start': !point.direction == 'right',
            }"
          >
            <p class="text">Чашек кофе испито:</p>
            <AnimatedNumber v-if="point.visible" :value="point.numbers.coffee" />
          </div>
        </timestamp>
      </div>
    </div>
  </transition>
</template>

<script>
import Timestamp from "@/components/Timestamp.vue";
import AnimatedNumber from "@/components/AnimatedNumber.vue";

export default {
  name: "Roadmap",
  data() {
    return {
      state: {
        direction: null,
        mayScroll: false,
      },
      visibility: {
        line: true,
        page: true,
      },
      points: [
        {
          id: 0,
          title: "12.2019",
          content: "Выбор стека. Индикация состояния комплекта",
          direction: "left",
          visible: false,
          number: 1500,
          timeout: 1500,
          numbers: {
            bugs: 25,
            features: 2,
            coffee: 127,
          },
        },
        {
          id: 1,
          title: "01.2020",
          content: "Модуль аналитики. Своя библиотека гистограмм",
          direction: "right",
          visible: false,
          number: 1500,
          timeout: 2000,
          numbers: {
            bugs: 65,
            features: 14,
            coffee: 450,
          },
        },
        {
          id: 2,
          title: "03.2020",
          content: "Уникальный выставочный макет. FLISR",
          direction: "left",
          visible: false,
          number: 1500,
          timeout: 2500,
          numbers: {
            bugs: 89,
            features: 23,
            coffee: 874,
          },
        },
        {
          id: 3,
          title: "04.2020",
          content: "Удаленка. Увеличение эффективности",
          direction: "right",
          visible: false,
          number: 1500,
          timeout: 3000,
          numbers: {
            bugs: 250,
            features: 35,
            coffee: 1157,
          },
        },
        {
          id: 4,
          title: "17.02.2022",
          content: "text2 text 2tex2t",
          direction: "left",
          visible: false,
          number: 1500,
          timeout: 3500,
          numbers: {
            bugs: 545,
            features: 187,
            coffee: 2345,
          },
        },
        {
          id: 5,
          title: "17.02.2023",
          content: "text2 text 2tex2t",
          direction: "right",
          visible: false,
          timeout: 4000,
          numbers: {
            bugs: 945,
            features: 450,
            coffee: 4122,
          },
        },
        {
          id: 6,
          title: "17.02.3721",
          content: "text2 text 2tex2t",
          direction: "left",
          visible: false,
          timeout: 4500,
          numbers: {
            bugs: 657785435,
            features: 324600455,
            coffee: 3246065778543654654654756785679854643654676587867896786786750455,
          },
        },
      ],
    };
  },
  methods: {
    activatePoint(id) {
      const neededPoint = this.points.find((point) => point.id == id);
      neededPoint.visible = true;
    },
    pageAppeared() {
      console.log("appeared");
      this.visibility.line = true;
    },
    pageLeaved() {
      if (this.state.direction == "down") this.$router.push({ name: "intro" });
      else this.$router.push({ name: "stack" });
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
  components: {
    Timestamp,
    AnimatedNumber,
  },
};
</script>

<style lang="stylus" scoped>
.timeline
  width 90%
  margin 0 auto
  position relative
  height 90%

.timeline__line
  position absolute
  width 4px
  height 100%
  background-color #ffffff
  right 50%
  margin-right -2px

.height-enter-active
  transition: all .8s ease;

.height-leave-active
  transition: all .3s ease;

.height-enter, .height-leave-to
  height 0px
</style>
