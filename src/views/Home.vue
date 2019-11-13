<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgList" :key="index">
        <div class="inner-box">
          <swiper :options="innerSwiper">
            <swiper-slide v-for="(i, innerIndex) in imgList" :key="innerIndex">
              <img :src="i" :alt="innerIndex" @click="slideTo(innerIndex)">
            </swiper-slide>
          </swiper>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </swiper>

    <div class="gallery">
      <div class="container">
        <ul class="gallery-list">
          <li>
            <div class="tit">
              <p class="cell-icon">
                <img src="@/assets/images/011.png" alt>
              </p>
              <p />
              <span class="txt">端游专区</span>
            </div>
            <ul class="inside-list">
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
            </ul>
          </li>
          <li>
            <div class="tit">
              <p class="cell-icon">
                <img src="@/assets/images/012.png" alt>
              </p>
              <p />
              <span class="txt">手游专区</span>
            </div>
            <ul class="inside-list">
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
            </ul>
          </li>
          <li>
            <div class="tit">
              <p class="cell-icon">
                <img src="@/assets/images/013.png" alt>
              </p>
              <p />
              <span class="txt">STM专区</span>
            </div>
            <ul class="inside-list">
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
              <li class="img-container">
                <img src="@/assets/images/pubg.png" alt>
              </li>
            </ul>
          </li>
        </ul>
        <div class="gallery-top">
          <nav class="nav-top">
            <span href="javascript:void(0)">综合排序</span>
            <span class="active" href="javascript:void(0)">全部游戏</span>
          </nav>
          <div id="portfoliolist">
            <div
              class="portfolio app mix_all"
              data-cat="app"
              style="display: inline-block; opacity: 1;"
            >
              <div class="portfolio-wrapper">
                <a href="index.html" class="b-link-stripe b-animate-go thickbox">
                  <img src="@/assets/images/pic1.jpg">
                  <div class="b-wrapper">
                    <h2 class="b-animate b-from-left b-delay03" />
                  </div>
                </a>
              </div>
            </div>
            <div
              class="portfolio icon mix_all"
              data-cat="icon"
              style="display: inline-block; opacity: 1;"
            >
              <div class="portfolio-wrapper">
                <a href="index.html" class="b-link-stripe b-animate-go thickbox">
                  <img src="@/assets/images/pic2.jpg">
                  <div class="b-wrapper">
                    <h2 class="b-animate b-from-left b-delay03" />
                  </div>
                </a>
              </div>
            </div>
            <div
              class="portfolio card mix_all"
              data-cat="card"
              style="display: inline-block; opacity: 1;"
            >
              <div class="portfolio-wrapper">
                <a href="index.html" class="b-link-stripe b-animate-go thickbox">
                  <img src="@/assets/images/pic3.jpg">
                  <div class="b-wrapper">
                    <h2 class="b-animate b-from-left b-delay03" />
                  </div>
                </a>
              </div>
            </div>
            <div
              class="portfolio logos mix_all"
              data-cat="logo"
              style="display: inline-block; opacity: 1;"
            >
              <div class="portfolio-wrapper">
                <a href="index.html" class="b-link-stripe b-animate-go thickbox">
                  <img src="@/assets/images/pic4.jpg">
                  <div class="b-wrapper">
                    <h2 class="b-animate b-from-left b-delay03" />
                  </div>
                </a>
              </div>
            </div>
            <div
              class="portfolio card mix_all"
              data-cat="card"
              style="display: inline-block; opacity: 1;"
            >
              <div class="portfolio-wrapper">
                <a href="index.html" class="b-link-stripe b-animate-go thickbox">
                  <img src="@/assets/images/pic5.jpg">
                  <div class="b-wrapper">
                    <h2 class="b-animate b-from-left b-delay03" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ul id="filters" class="clearfix">
            <li>
              <span class="filter active" data-filter="app card icon logo web">1</span>
            </li>
            <li>
              <span class="filter" data-filter="app">2</span>
            </li>
            <li>
              <span class="filter" data-filter="card">3</span>
            </li>
            <li>
              <span class="filter" data-filter="icon">4</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner-bot">
      <div class="container">
        <h2>欢迎！</h2>
        <p>在这里，您不用注册和练习，就可以享受各种游戏的快乐。我们为您提供多样的、可定制的游戏帐号，让您不再为等级不够、装备不好、与朋友不在同一服务器等问题而烦恼！</p>
        <p>租用帐号的步骤非常简单，开始您的畅游之旅吧！</p>
      </div>
      <nav class="cl-effect-3">
        <a href="#">更多</a>
      </nav>
    </div>
    <div class="video-serch">
      <div class="container splitor">
        <div class="vid-col" style="width: 50%">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.
          </p>
          <div class="more">
            <a href="#">See more videos</a>
          </div>
        </div>
        <div class="vid-coll" style="width: 50%">
          <img src="@/assets/images/vid-img.jpg" alt>
          <div class="play-but">
            <a href="#small-dialog5" class="thickbox play-icon popup-with-zoom-anim">
              <img src="@/assets/images/vid-play.png" alt>
            </a>
          </div>
          <!--pop-up-box-->
          <!--pop-up-box-->
          <!-- <div id="small-dialog5" class="mfp-hide">
            <iframe src="//player.vimeo.com/video/38584262" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""> </iframe>
          </div>-->
        </div>
        <div class="clearfix" />
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const arr1 = [
  {
    diseaseCode: '224251002',
    diseaseDisplaySeq: '2',
    diseaseName: '缺铁性贫血',
    diseaseSystemCode: '12425',
    diseaseSystemName: '血液、淋巴疾病',
    id: '40',
    isSelected: true,
    systemDisplaySeq: '13'
  },
  {
    diseaseCode: '224807003',
    diseaseDisplaySeq: '3',
    diseaseName: '肛周脓肿',
    diseaseSystemCode: '17026',
    diseaseSystemName: '肛周疾病',
    id: '41',
    isSelected: true,
    systemDisplaySeq: '14'
  },
  {
    diseaseCode: '224807002',
    diseaseDisplaySeq: '2',
    diseaseName: '痔疮',
    diseaseSystemCode: '17026',
    diseaseSystemName: '肛周疾病',
    id: '42',
    isSelected: true,
    systemDisplaySeq: '14'
  },
  {
    diseaseCode: '226122014',
    diseaseDisplaySeq: '14',
    diseaseName: '肝血管瘤',
    diseaseSystemCode: '12612',
    diseaseSystemName: '良、恶性肿瘤',
    id: '43',
    isSelected: true,
    systemDisplaySeq: '17'
  }
]
const arr2 = [
  {
    code: '4242510020201',
    diseaseCode: '224251002',
    diseaseName: '缺铁性贫血',
    name: '是否正在检查或住院治疗过程中？',
    seq: '1'
  },
  {
    code: '4242510020302',
    diseaseCode: '224251002',
    diseaseName: '缺铁性贫血',
    name: '请选择血红蛋白值：',
    seq: '2'
  },
  {
    code: '4261220140201',
    diseaseCode: '226122014',
    diseaseName: '肝血管瘤',
    name: '是否已经通过手术治疗切除？',
    seq: '3'
  },
  {
    code: '4261220140201',
    diseaseCode: '226122014',
    diseaseName: '肝血管瘤',
    name: '是否已经通过手术治疗切除？',
    seq: '3'
  }
]

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgList: [
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg')
      ],
      swiperOption: {
        loop: true,
        height: 300,
        // autoplay: {
        //   delay: 10000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // },
        slidesPerView: 1,
        centeredSlides: true,
        // effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          progressbarFillClass: 'progress-fill'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      innerSwiper: {
        loop: true,
        // loopAdditionalSlides: 1,
        slidesPerView: 'auto',
        loopedSlides: 5,
        height: 300,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slideToClickedSlide: true,
        effect: 'coverflow',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 1,
          stretch: 270,
          depth: 350,
          modifier: 1,
          slideShadows: false
        }
      }
    }
  },
  mounted() {
    console.log(this.diff(arr1, arr2))
  },
  methods: {
    slideTo(index) {
      console.log(index)
    },
    diff(arr1, arr2) {
      var a = arr1.map(function(item) {
        return item.diseaseCode
      })
      var b = arr2.map(function(item) {
        return item.diseaseCode
      })
      var diff = arr1
        .filter(function(item) {
          return b.indexOf(item.diseaseCode) === -1
        })
        .concat(
          arr2.filter(function(item) {
            return a.indexOf(item.diseaseCode) === -1
          })
        )
      return diff
    }
  }
}
</script>
<style lang="stylus">
@import '~swiper/dist/css/swiper.css'
body
  background-image linear-gradient(to bottom, #2f465d, #1d2838, #1d2838)
.cl-effect-3
  a
    position relative
    padding 8px 0
    font-size 14px
    color #999
    font-weight 700
    &:hover
      color #ff7105
      outline none
      text-decoration none
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
.swiper-slide
  height 300px
  img
    width 100%
    height 100%
.inner-box
  width 1200px
  margin auto
  padding 0 40px
.progress-fill
  background #fff
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  transform scale(0)
  transform-origin left top
.banner-bot
  background-color #4fbfa8
  padding 80px 0
  text-align center
  h2
    font-size 36px
    font-weight 700
    color #fff
    margin 0em 0 20px 0
  a
    font-size 28px
    text-transform uppercase
    font-weight 700
    color #fff
  p
    font-size 18px
    font-weight 500
    color #fff
    line-height 24px
    margin 0 0 15px
    &:nth-of-type(2)
      font-weight 100
      font-size 12px
      margin-bottom 20px
.container
  max-width 1170px
  padding-right 30px
  padding-left 30px
  margin-right auto
  margin-left auto
.splitor
  display flex
/* -- Gallery Part Starts Here -- */
.gallery
  padding 2em 0
  text-align center
  .gallery-list
    display flex
    justify-content space-around
    .tit
      display flex
      width 200px
      height 40px
      align-items center
      background-image linear-gradient(to top right, #2b5f81 5%, #316d93 60%, #2b5f81, #316d93)
      color #7bc2ff
      font-size 24px
      border-radius 3px
      margin-bottom 5px
      .cell-icon
        display inline-block
        width 45px
        height 40px
        img
          width 100%
          height 100%
      .txt
        display inline-block
        flex 1
        text-align center
    .inside-list
      display flex
      justify-content space-between
      background-color #60616b
      .img-container
        width 42px
        height 73px
        background-color #fff
        img
          width 100%
          height 100%
  .gallery-top
    padding-top 25px
    .nav-top
      display flex
      justify-content left
      font-size 24px
      color #fff
      background-color #1f2b3c
      span
        border-top-right-radius 5px
        border-top-left-radius 5px
        background-color transparent
        display inline-block
        cursor pointer
        width 180px
        height 45px
        line-height 45px
        text-align center
      .active
        background-color #304a62
.gallery h3
  font-size 4em
  font-weight 700
  color #fff
  margin 0em 0 0.5em 0
/* -- MIXTUP PART -- */
/* Strip
/*----------------------------------------------------------------------------------- */
.b-link-stripe
  position relative
  display inline-block
  vertical-align top
  font-family 'Open Sans', sans-serif
  font-weight 300
  overflow hidden
.b-link-stripe .b-wrapper
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  text-align center
  color #ffffff
  overflow hidden
.b-link-stripe .b-line
  position absolute
  top 0
  bottom 0
  width 20%
  background rgba(15, 207, 140, 0.9)
  transition all 0.5s linear
  -moz-transition all 0.5s linear
  -ms-transition all 0.5s linear
  -o-transition all 0.5s linear
  -webkit-transition all 0.5s linear
  opacity 0
  visibility hidden /* lt-ie9 */
/* ----------------------------------------------------------------------------------- */
/* Animation effects
/*----------------------------------------------------------------------------------- */
.b-animate-go
  text-decoration none
.b-animate
  transition all 0.5s
  -moz-transition all 0.5s
  -ms-transition all 0.5s
  -o-transition all 0.5s
  -webkit-transition all 0.5s
  visibility hidden
  font-size 1.1em
  font-weight 700
.b-animate img
  margin-top 16%
  display -webkit-inline-box
/* lt-ie9 */
.b-animate-go:hover .b-animate
  visibility visible
.b-from-left
  position relative
  left -100%
.b-animate-go:hover .b-from-left
  left 0
span.m_4
  font-size 14px
  font-weight 400
p.m_5
  margin 2% auto 5%
  width 70%
  color #283A47
  font-size 1.1em
  font-weight 600
  line-height 1.5em
  text-align center
ul#filters
  padding 0
  margin 1em 0
/* --team-- */
.team
  background #fff
  padding 0 0 9% 0
.col_1_of_4:first-child
  margin-left 0
.span_1_of_4
  width 22.8%
.col_1_of_4
  display block
  float left
  margin 1% 0 1% 2.6%
  background #FFF
/* lt-ie9 */
.b-link-stripe:hover .b-line
  visibility visible
.b-link-stripe .b-line1
  left 0
.b-link-stripe .b-line2
  left 20%
  transition-delay 0.1s !important
  -moz-transition-delay 0.1s !important
  -ms-transition-delay 0.1s !important
  -o-transition-delay 0.1s !important
  -webkit-transition-delay 0.1s !important
.b-link-stripe .b-line3
  left 40%
  transition-delay 0.2s !important
  -moz-transition-delay 0.2s !important
  -ms-transition-delay 0.2s !important
  -o-transition-delay 0.2s !important
  -webkit-transition-delay 0.2s !important
.b-link-stripe .b-line4
  left 60%
  transition-delay 0.3s !important
  -moz-transition-delay 0.3s !important
  -ms-transition-delay 0.3s !important
  -o-transition-delay 0.3s !important
  -webkit-transition-delay 0.3s !important
.b-link-stripe .b-line5
  left 80%
  transition-delay 0.4s !important
  -moz-transition-delay 0.4s !important
  -ms-transition-delay 0.4s !important
  -o-transition-delay 0.4s !important
  -webkit-transition-delay 0.4s !important
.b-link-stripe:hover .b-line
  opacity 1
#filters
  margin 3% 0
  padding 0
  list-style none
  text-align center
  li
    display -webkit-inline-box
    margin 0 10px
    span
      display flex
      width 50px
      height 50px
      justify-content center
      align-items center
      border-radius 50px
      text-decoration none
      color #606060
      cursor pointer
      font-size 1.5em
      font-weight 400
      text-transform uppercase
      border 2px solid #606060
      -webkit-border-radius 50%
      -o-border-radius 50%
      -moz-border-radius 50%
    .active
      background none
      color #ff7105
      border none
      border 2px solid #ff7105
#portfoliolist .portfolio
  -webkit-box-sizing border-box
  -moz-box-sizing border-box
  -o-box-sizing border-box
  width 30%
  margin 2% 2% 0 0
  display none
  float left
  overflow hidden
div#portfoliolist
  padding 10px 0px
.portfolio.app.mix_all
  width 55% !important
.portfolio.icon.mix_all
  width 39% !important
  margin-right 0 !important
.portfolio.logos.mix_all
  width 42% !important
.portfolio.card.mix_all
  width 25% !important
.portfolio-wrapper
  overflow hidden
  position relative !important
  cursor pointer
.portfolio
  img
    max-width 100%
    /* --position: relative;-- */
    transition all 300ms !important
    -webkit-transition all 300ms !important
    -moz-transition all 300ms !important
  .label
    position absolute
    width 100%
    height 40px
    bottom -40px
  .label-bg
    background #22B4B8
    width 100%
    height 100%
    position absolute
    top 0
    left 0
  .label-text
    color #fff
    position relative
    z-index 500
    padding 5px 8px
  .text-category
    display block
    font-size 9px
    font-size 12px
    text-transform uppercase
/* Self Clearing Goodness */
.container:after
  content '\0020'
  display block
  height 0
  clear both
  visibility hidden
.clearfix:before, .clearfix:after, .row:before, .row:after
  content '\0020'
  display block
  overflow hidden
  visibility hidden
  width 0
  height 0
.row:after, .clearfix:after
  clear both
.row, .clearfix
  zoom 1
.clear
  clear both
  display block
  overflow hidden
  visibility hidden
  width 0
  height 0
.b-wrapper:hover
  background rgba(255, 113, 5, 0.47)
  transition 0.5s all
  -webkit-transition 0.5s all
  -o-transition 0.5s all
  -moz-transition 0.5s all
  -ms-transition 0.5s all
  /* -- Video search Parts starts Here -- */
.video-serch
  background url('~@/assets/images/vid-bg.jpg') no-repeat
  background-size cover
  -webkit-background-size cover
  -moz-background-size cover
  -o-background-size cover
  -ms-background-size cover
  padding 4em 0
.vid-col p
  font-size 1.2em
  font-weight 500
  font-style italic
  color #fff
  line-height 1.8em
  margin 0.5em 0
.vid-col p:nth-of-type(2)
  font-style normal
  font-size 0.875em
  font-weight 100
  margin 1em 0
.more
  margin 2em 0
.more a
  font-size 0.875em
  color #fff
  background #ff7105
  padding 10px 15px
  font-weight 500
.more a:hover
  background #4fbfa8
.vid-coll
  position relative
.play-but
  position absolute
  top 40%
  left 40%
.vid-coll img
  width 100%
/* -- Video search Parts Ends Here -- */
</style>
