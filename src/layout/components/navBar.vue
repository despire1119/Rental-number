<template>
  <section>
    <div class="top-bar-contain">
      <a class="logo" href="#">
        <img src="@/assets/images/logo.png" alt>
      </a>
      <div class="navigation">
        <ul class="navig cl-effect-3">
          <li>
            <router-link :to="{name: 'home'}" tag="a">租号玩</router-link>
          </li>
          <li>
            <router-link :to="{name: 'games'}" tag="a">游戏</router-link>
          </li>
          <li>
            <router-link :to="{name: 'blog'}" tag="a">简介</router-link>
          </li>
          <li>
            <router-link :to="{name: 'features'}" tag="a">预告</router-link>
          </li>
          <li>
            <router-link :to="{name: 'contact'}" tag="a">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="search">
        <input type="submit" value>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
// const currentCharger = {
//   name:
// }
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['currentRoute'])
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    console.log(this.currentRoute)
  }
}
</script>
<style lang="stylus">
.top-bar-contain
  display flex
  justify-content space-around
  align-items center
  background-color #000
  height 122px
  .logo
    align-self flex-start
    z-index 1000
  .navigation
    .navig
      display flex
      padding 0
      li
        margin 0 10px
        a
          font-size 17px
          color #fff
          font-weight 700
          &:hover
            color #ff7105
            outline none
            text-decoration none
    .cl-effect-3
      a
        position relative
        padding 8px 0
        &::after
          position absolute
          opacity 0
          left 0
          right 0
          bottom 0
          height 3px
          background #ff7105
          content ''
          transition opacity 0.2s, transform 0.2s
          transform translateY(10px)
        &:focus
          color #ff7105
        &:hover::after, &:focus::after
          opacity 1
          transform translateY(0px)
  .search-bar
    display flex
    align-items center
    width 280px
    input[type='text']
      flex 1
      padding 10px
      background-color #fff
    input[type='submit']
      width 56px
      padding 11px
      background #ff7105 url('~@/assets/images/search.png') no-repeat 15px
      vertical-align -webkit-baseline-middle
</style>
