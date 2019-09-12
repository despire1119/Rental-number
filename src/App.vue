<template>
  <div id="app">
    <layout />
  </div>
</template>
<script>
import layout from '@/layout'

export default {
  components: {
    layout
  },
  created() {
    // 我添加一行注释你敢放进去嘛
    // 我再添加一行注释
    // 然后我改回来
    // github预览
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}
</script>
