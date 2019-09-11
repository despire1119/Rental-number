<template>
  <div>
    <nav-bar />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <nav-footer />
  </div>
</template>
<script>
import { navBar, navFooter } from './components'

export default {
  components: {
    navBar,
    navFooter
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
