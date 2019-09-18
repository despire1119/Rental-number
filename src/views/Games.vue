<template>
  <div>
    <div class="games">
      <div class="container">
        <div class="nav">
          <div class="tit">按字母搜索</div>
          <div class="inner">
            <span v-for="(item, index) in letters" :key="index">{{item}}</span>
          </div>
        </div>
        <section class="games-contain">
          <aside class="side-bar">
            <h4>New games</h4>
            <ul class="game-list">
              <li>
                <a href="javascript:;">Shooting</a>
              </li>
              <li>
                <a href="javascript:;">Action</a>
              </li>
              <li>
                <a href="javascript:;">Cars</a>
              </li>
              <li>
                <a href="javascript:;">Wressling</a>
              </li>
              <li>
                <a href="javascript:;">bikes</a>
              </li>
              <li>
                <a href="javascript:;">bicycle</a>
              </li>
              <li>
                <a href="javascript:;">Racing</a>
              </li>
              <li>
                <a href="javascript:;">Zombies</a>
              </li>
            </ul>
            <h4>Old games</h4>
            <ul class="game-list">
              <li>
                <a href="javascript:;">Shooting</a>
              </li>
              <li>
                <a href="javascript:;">Action</a>
              </li>
              <li>
                <a href="javascript:;">Cars</a>
              </li>
              <li>
                <a href="javascript:;">Wressling</a>
              </li>
              <li>
                <a href="javascript:;">bikes</a>
              </li>
              <li>
                <a href="javascript:;">bicycle</a>
              </li>
              <li>
                <a href="javascript:;">Racing</a>
              </li>
              <li>
                <a href="javascript:;">Zombies</a>
              </li>
              <li>
                <a href="javascript:;">Action</a>
              </li>
              <li>
                <a href="javascript:;">Cars</a>
              </li>
              <li>
                <a href="javascript:;">Wressling</a>
              </li>
            </ul>
          </aside>
          <div class="main">
            <div class="view view-first">
              <img :src="require('@/assets/images/1.jpg')" />
              <div class="mask">
                <h2>我的世界</h2>
                <p>3.3元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">立即租用</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/2.jpg')" />
              <div class="mask">
                <h2>绝地求生</h2>
                <p>1.3元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">立即租用</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/3.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/4.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/5.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/6.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/2.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/1.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
            <div class="view view-first">
              <img :src="require('@/assets/images/4.jpg')" />
              <div class="mask">
                <h2>英雄联盟</h2>
                <p>4元/小时</p>
                <p>押金：0元|5小时起租</p>
                <a href="javascript:;" class="info">Play It</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
const letterLIST = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
export default {
  data() {
    return {
      letters: letterLIST
    }
  },
  mounted() {
    console.log(JSON.stringify(this.letters))
  }
}
</script>
<style lang="stylus" scoped>
.nav
  display flex
  border 1px solid #d9d9d9
  padding 15px 10px
  margin-bottom 10px
  .tit
    width 140px
  .inner
    flex 1
    color #ddd
    span
      margin-right 14px
.games-contain
  display flex
  justify-content space-between
.main
  flex 1
  display flex
  justify-content space-between
  flex-wrap wrap
.side-bar
  width 15%
  float left
  padding 10px 0
  background aliceblue
.side-bar h4
  font-size 1.1em
  text-transform uppercase
  font-weight 500
  text-align center
  margin 0 0 1em
ul.game-list
  padding 0
  margin 0.5em 0
ul.game-list li
  display block
ul.game-list li a
  font-size 0.875em
  color #3c3a3e
  font-weight 100
  padding 0.2em 1em 0.5em
  border-bottom 1px solid #3c3a3e
  display block
  text-transform uppercase
ul.game-list li a:hover
  color #ff7105
.view
  width 300px
  height 200px
  border 10px solid #fff
  margin-bottom 10px
  overflow hidden
  position relative
  text-align center
  -webkit-box-shadow 1px 1px 2px #e6e6e6
  -moz-box-shadow 1px 1px 2px #e6e6e6
  box-shadow 1px 1px 2px #e6e6e6
  cursor default
  background #fff no-repeat center center
.view .mask, .view .content
  width 300px
  height 200px
  position absolute
  overflow hidden
  top 0
  left 0
.view img
  display block
  position relative
.view h2
  text-transform uppercase
  color #fff
  text-align center
  position relative
  font-size 17px
  padding 10px
  background rgba(0, 0, 0, 0.8)
  margin 20px 0 0 0
.view p
  font-family Georgia, serif
  font-style italic
  font-size 12px
  position relative
  color #fff
  padding 10px 20px 20px
  text-align center
.view .info
  display inline-block
  text-decoration none
  padding 7px 14px
  background #000
  color #fff
  text-transform uppercase
  -webkit-box-shadow 0 0 1px #000
  -moz-box-shadow 0 0 1px #000
  box-shadow 0 0 1px #000
.view .info:hover
  -webkit-box-shadow 0 0 5px #000
  -moz-box-shadow 0 0 5px #000
  box-shadow 0 0 5px #000
.view-first img
  -webkit-transition all 0.2s linear
  -moz-transition all 0.2s linear
  -o-transition all 0.2s linear
  -ms-transition all 0.2s linear
  transition all 0.2s linear
.view-first .mask
  opacity 0
  background-color rgba(219, 127, 8, 0.7)
  -webkit-transition all 0.4s ease-in-out
  -moz-transition all 0.4s ease-in-out
  -o-transition all 0.4s ease-in-out
  -ms-transition all 0.4s ease-in-out
  transition all 0.4s ease-in-out
.view-first h2
  -webkit-transform translateY(-100px)
  -moz-transform translateY(-100px)
  -o-transform translateY(-100px)
  -ms-transform translateY(-100px)
  transform translateY(-100px)
  opacity 0
  -webkit-transition all 0.2s ease-in-out
  -moz-transition all 0.2s ease-in-out
  -o-transition all 0.2s ease-in-out
  -ms-transition all 0.2s ease-in-out
  transition all 0.2s ease-in-out
.view-first p
  -webkit-transform translateY(100px)
  -moz-transform translateY(100px)
  -o-transform translateY(100px)
  -ms-transform translateY(100px)
  transform translateY(100px)
  opacity 0
  -webkit-transition all 0.2s linear
  -moz-transition all 0.2s linear
  -o-transition all 0.2s linear
  -ms-transition all 0.2s linear
  transition all 0.2s linear
.view-first:hover img
  -webkit-transform scale(1.1, 1.1)
  -moz-transform scale(1.1, 1.1)
  -o-transform scale(1.1, 1.1)
  -ms-transform scale(1.1, 1.1)
  transform scale(1.1, 1.1)
.view-first .info
  opacity 0
  -webkit-transition all 0.2s ease-in-out
  -moz-transition all 0.2s ease-in-out
  -o-transition all 0.2s ease-in-out
  -ms-transition all 0.2s ease-in-out
  transition all 0.2s ease-in-out
.view-first:hover .mask
  opacity 1
.view-first:hover h2, .view-first:hover p, .view-first:hover .info
  opacity 1
  -webkit-transform translateY(0px)
  -moz-transform translateY(0px)
  -o-transform translateY(0px)
  -ms-transform translateY(0px)
  transform translateY(0px)
.view-first:hover p
  -webkit-transition-delay 0.1s
  -moz-transition-delay 0.1s
  -o-transition-delay 0.1s
  -ms-transition-delay 0.1s
  transition-delay 0.1s
.view-first:hover .info
  -webkit-transition-delay 0.2s
  -moz-transition-delay 0.2s
  -o-transition-delay 0.2s
  -ms-transition-delay 0.2s
  transition-delay 0.2s
</style>
