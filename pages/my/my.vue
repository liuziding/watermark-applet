<template>
  <view class="parent" ref="parent">
    <view class="child" ref="child"></view>
  </view>
</template>

<script>
export default {
  mounted() {
    const parentLeftOffset = this.$refs.parent.offsetLeft;
    const childLeftOffset = this.$refs.child.offsetLeft;
    const distance = childLeftOffset - parentLeftOffset;
    console.log(`Distance: ${distance}px`);
  },
};
</script>

<style>
.parent {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #eee;
}

.child {
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
