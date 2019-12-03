<template>
  <div>
    <nav-bar />
    <transition name="fade-transform" mode="out-in">
      <!-- <router-view :key="key" /> -->
      <router-view />
    </transition>
    <what-new />
    <nav-footer />
    <tools-bar />
    <bottom-bar />
  </div>
</template>
<script>
import { navBar, navFooter } from './components'
import WhatNew from '@/components/WhatNew'
import ToolsBar from '@/components/ToolsBar'
import BottomBar from '@/components/BottomBar'

export default {
  components: {
    navBar,
    navFooter,
    WhatNew,
    ToolsBar,
    BottomBar
  }
}
</script>
