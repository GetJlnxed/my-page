<template>
  <transition name="fade">
    <div
      class="timestamp"
      :class="{
        'timestamp--left': left,
        'timestamp--right': !left,
      }"
      v-show="isVisible"
    >
      <div class="timestamp__content">
        <p class="text text--bold">{{ title }}</p>
        <p class="text">
          {{ content }}
        </p>
        <div class="container container--column">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Timestamp",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default: "Lorem ipsum lorem ipsum lorem ipsum",
    },
    visibilityTimeout: {
      type: Number,
      default: 2000,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
      this.$emit("rendered");
    }, this.visibilityTimeout);
  },
};
</script>

<style lang="stylus" scoped>
.timestamp
  min-width 100px
  min-height 100px
  padding 1rem 4rem
  position relative
  width 50%
  background-color inherit
  box-sizing border-box
  &:after
    content ''
    position absolute
    width: 24px;
    height: 24px;
    right: -12px;
    background-color: white;
    top: 50%;
    margin-top -12px
    border-radius: 50%;
    z-index: 1;


.timestamp--left
  text-align end
  left 0

.timestamp--right
  text-align start
  left 50%
  &:after
    left: -12px;

.timestamp__content
  //padding: 20px 30px;
  position: relative;
  border-radius: 6px;
</style>
