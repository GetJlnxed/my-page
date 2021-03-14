<template>
  <p class="text">{{ animatedNumber }}</p>
</template>
<script>
import { TweenMax } from "gsap";

export default {
  name: "AnimatedNumber",
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.number = this.value;
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      TweenMax.to(this.$data, { duration: 2.5, tweenedNumber: newValue });
    },
  },
};
</script>
