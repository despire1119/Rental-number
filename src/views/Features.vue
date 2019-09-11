<template>
  <div class="games">
    <div class="container">
      <div class="page-path">
        <ul class="path-list">
          <li>
            <a href="index.html">Home</a>
          </li>&nbsp;&nbsp;/&nbsp;&nbsp;
          <li class="act">Features</li>
        </ul>
        <div class="clearfix" />
      </div>
      <section class="blog-contain">
        <div class="blog-content">
          <h3 class="page-header">About us</h3>
          <div class="about-top">
            <img :src="require('@/assets/images/abt.jpg')" alt>
            <div class="about-details">
              <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again</p>
              <a href="#">More</a>
            </div>
            <div class="clearfix" />
          </div>
          <h3 class="page-header">What we do</h3>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again</p>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again</p>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again</p>
        </div>
        <aside class="blog-sidebar">
          <h3 class="page-header">Top Features</h3>
          <div class="fetures">
            <img :src="require('@/assets/images/fet.jpg')" alt>
            <div class="caption">
              <a href="#">Play Now</a>
            </div>
          </div>
          <div class="fetures">
            <img :src="require('@/assets/images/fet2.jpg')" alt>
            <div class="caption">
              <a href="#">Play Now</a>
            </div>
          </div>
          <div class="fetures">
            <img :src="require('@/assets/images/fet.jpg')" alt>
            <div class="caption">
              <a href="#">Play Now</a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.about-top
  margin 0 0 2em
.about-top img
  float left
  margin-right 3%
.about-details
  width 60%
  float left
.about-details h4
  font-size 1.1em
  text-transform uppercase
  font-weight 500
  line-height 1.6em
  margin-bottom 0.5em
  color #3c3a3e
.blog-contain
  display flex
.about-details p, .blog-content p
  font-size 0.875em
  color #3c3a3e
  font-weight 100
  line-height 1.6em
  margin-bottom 1em
.about-details a
  font-size 0.875em
  text-transform uppercase
  font-weight 300
  background #ff7105
  padding 10px 15px
  color #fff
.about-details a:hover, .caption a:hover
  background #4fbfa8
.fetures
  position relative
  margin 0 0 1em
.fetures img
  width 100%
.caption
  position absolute
  top 10%
.caption a
  font-size 0.875em
  text-transform uppercase
  font-weight 300
  background #ff7105
  padding 10px 15px
  color #fff
</style>
