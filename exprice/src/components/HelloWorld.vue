<template>
  <div class="hello">
    <cube-button @click="showImagePreview">点我看照片~</cube-button>
    <cube-input v-model="value" :placeholder="placeholder" :type="type" :maxlength="maxlength" :readonly="readonly"
      :disabled="disabled" :autofocus="autofocus" :autocomplete="autocomplete" :clearable="clearable" :eye="eye"
      @blur="inputBlur"></cube-input>
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
      ],
      value: '',
      placeholder: '请输入内容',
      type: 'password',
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      clearable: true,
      /*
       * 眼睛可见，且密码可见
       * 如果为 false 则眼睛不可见，密码不可见
       * 如果想要眼睛可见但是密码不可见，则配置为对象 { open: false }
       */
      eye: true
    }
  },
  methods: {
    showImagePreview() {
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    },
    async inputBlur() {
      let a = await this.$http.myInvite({ data: this.value })
      console.log(a)
    }
  },
  async created() {
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>
$color: red;
h1 {
  color: $color;
}
.hello {
  height: 100%;
}
</style>
