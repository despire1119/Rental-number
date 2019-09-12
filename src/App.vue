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
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}
</script>
