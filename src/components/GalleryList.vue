<template>
  <div>
    <div class="nav">
      <nav class="nav-items">
        <a class="active" href="">选择游戏</a>
        <a href="">选择大区</a>
        <a href="">选择服务器</a>
      </nav>
      <div class="search-bar">
        <input ref="toFocus" type="text" placeholder="search">
        <input type="submit" value>
      </div>
    </div>
    <div class="gellary-content">
      <aside class="aside-bar">
        <div class="cell">
          <div class="target"><img src="" alt=""></div>
          <div class="des">
            <p>STM专区</p>
            <p>Steam Games</p>
          </div>
        </div>
        <p>端游专区</p>
        <p>手游专区</p>
      </aside>
      <div class="notice-list">
        <p>公告</p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .nav
    display flex
    justify-content space-between
    align-items center
    height 66px
    padding 0 15px
    font-size 18px
    background-color #1f2b3c
    .nav-items
      height 100%
      a
        display inline-block
        height 100%
        padding 0 15px
        margin-right 5px
        border-top-left-radius 5px
        border-top-right-radius 5px
        line-height 66px
    .active
      background #304a62
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
  .gellary-content
    display flex
    .aside-bar
      width 240px
    .notice-list
      flex 1
</style>
