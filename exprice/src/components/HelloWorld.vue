<template>
  <div class="hello">
    <cube-button @click="showImagePreview">点我看照片~</cube-button>
  </div>
</template>

<script>
// import
export default {
  name: 'HelloWorld',
  data() {
    return {
      imgs: [
        require('@/assets/pic1.jpg'),
        require('@/assets/pic2.jpg'),
        require('@/assets/pic3.jpg')
      ]
    }
  },
  methods: {
    showImagePreview() {
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    }
  }
}
</script>

<style lang="scss" scoped>
$color: red;
h1 {
  color: $color;
}
</style>
