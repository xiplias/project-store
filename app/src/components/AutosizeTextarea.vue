<style scoped>
  textarea {
    height: 100%;
  }
</style>

<template>
  <textarea @input="handleChange">{{value}}</textarea>
</template>

<script>
  import autosize from 'autosize'

  export default {
    props: ['handleChange', 'value'],
    data () {
      return {}
    },
    mounted () {
      const el = this.$el
      autosize(el)
    },
    updated () {
      autosize.update(this.$el)
    }
  }
</script>
