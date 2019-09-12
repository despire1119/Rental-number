<template>
  <div>
    <nav-bar />
    <transition name="fade-transform" mode="out-in">
      <!-- <router-view :key="key" /> -->
      <router-view />
    </transition>
    <what-new />
    <nav-footer />
  </div>
</template>
<script>
import { navBar, navFooter } from './components'
import WhatNew from '@/components/WhatNew'

export default {
  components: {
    navBar,
    navFooter,
    WhatNew
  }
}
</script>
