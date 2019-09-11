<template>
  <div class="games">
    <div class="container">
      <div class="page-path">
        <ul class="path-list">
          <li>
            <a href="index.html">Home</a>
          </li>&nbsp;&nbsp;/&nbsp;&nbsp;
          <li class="act">Blog</li>
        </ul>
        <p>
          <a href="index.html">Back to Home</a>
        </p>
        <div class="clearfix" />
      </div>
      <h3 class="page-header">Recent Blogs</h3>
      <section class="blog-contain">
        <div class="blog-content">
          <div class="blog-post">
            <h3>
              <a href="single.html">Internet tend to repeat predefined chunks as necessary</a>
            </h3>
            <div class="post-details">
              <p>
                Posted By
                <a href="#">Jackie</a> &nbsp;&nbsp; On
                <span>15 jan, 2015</span> &nbsp;&nbsp; Comments
                <span>(10)</span>
              </p>
            </div>
            <img :src="require('@/assets/images/blog1.jpg')" alt>
            <h4>sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <nav class="cl-effect-3">
              <a href="single.html">More</a>
            </nav>
          </div>
          <div class="blog-post">
            <h3>
              <a href="single.html">Internet tend to repeat predefined chunks as necessary</a>
            </h3>
            <div class="post-details">
              <p>
                Posted By
                <a href="#">Jackie</a> &nbsp;&nbsp; On
                <span>15 jan, 2015</span> &nbsp;&nbsp; Comments
                <span>(10)</span>
              </p>
            </div>
            <img :src="require('@/assets/images/blog2.jpg')" alt>
            <h4>sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <nav class="cl-effect-3">
              <a href="single.html">More</a>
            </nav>
          </div>
          <div class="blog-post">
            <h3>
              <a href="single.html">Internet tend to repeat predefined chunks as necessary</a>
            </h3>
            <div class="post-details">
              <p>
                Posted By
                <a href="#">Jackie</a> &nbsp;&nbsp; On
                <span>15 jan, 2015</span> &nbsp;&nbsp; Comments
                <span>(10)</span>
              </p>
            </div>
            <img :src="require('@/assets/images/blog3.jpg')" alt>
            <h4>sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <nav class="cl-effect-3">
              <a href="single.html">More</a>
            </nav>
          </div>
        </div>
        <aside class="blog-sidebar">
          <h3 class="page-header">Catgeories</h3>
          <ul class="product-categories color">
            <li class="cat-item cat-item-42">
              <a href="#">Shooting</a>
              <span class="count">(14)</span>
            </li>
            <li class="cat-item cat-item-60">
              <a href="#">Action</a>
              <span class="count">(2)</span>
            </li>
            <li class="cat-item cat-item-63">
              <a href="#">Gloves</a>
              <span class="count">(2)</span>
            </li>
            <li class="cat-item cat-item-54">
              <a href="#">Cars</a>
              <span class="count">(8)</span>
            </li>
            <li class="cat-item cat-item-55">
              <a href="#">Racing</a>
              <span class="count">(11)</span>
            </li>
            <li class="cat-item cat-item-64">
              <a href="#">Sports</a>
              <span class="count">(3)</span>
            </li>
            <li class="cat-item cat-item-61">
              <a href="#">Style</a>
              <span class="count">(3)</span>
            </li>
            <li class="cat-item cat-item-56">
              <a href="#">Bikes</a>
              <span class="count">(6)</span>
            </li>
            <li class="cat-item cat-item-57">
              <a href="#">Zombies</a>
              <span class="count">(13)</span>
            </li>
            <li class="cat-item cat-item-58">
              <a href="#">Wressling</a>
              <span class="count">(7)</span>
            </li>
            <li class="cat-item cat-item-62">
              <a href="#">Watchers</a>
              <span class="count">(2)</span>
            </li>
            <li class="cat-item cat-item-41">
              <a href="#">Women</a>
              <span class="count">(17)</span>
            </li>
          </ul>
          <h3 class="page-header">Subscribe</h3>
          <div class="subscribe">
            <h4>Subscribe For News</h4>
            <input type="text" placeholder="Email.." required>
            <input type="submit" value="Subscribe">
          </div>
          <h3 class="page-header">Papular Tags</h3>
          <ul class="tags_links">
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Developing</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">Wordpress</a>
            </li>
            <li>
              <a href="#">Photography</a>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
ul.product-categories
  margin 0 0 2em
  padding 0
  list-style-type none
ul.product-categories li
  padding 5px 0
  border-bottom 1px solid #eee
  margin-bottom 5px
  text-transform uppercase
ul.product-categories li a:hover
  text-decoration none
  color #E23535
.product-categories li span.count
  float right
  margin-left 6px
  color #aaa
  font-size 0.8125em
ul.product-categories li a
  -webkit-transition background 350ms ease-in-out, border-color 350ms ease-in-out, color 150ms ease-in-out
  -moz-transition background 350ms ease-in-out, border-color 350ms ease-in-out, color 150ms ease-in-out
  -ms-transition background 350ms ease-in-out, border-color 350ms ease-in-out, color 150ms ease-in-out
  -o-transition background 350ms ease-in-out, border-color 350ms ease-in-out, color 150ms ease-in-out
  transition background 350ms ease-in-out, border-color 350ms ease-in-out, color 150ms ease-in-out
  font-size 12px
  color #999
.blog-sidebar h3
  padding 0
.subscribe
  margin 1em 0
.subscribe h4
  font-size 1em
  color #3c3a3e
  font-weight 500
  text-transform uppercase
  margin 0 0 0.5em
.subscribe input[type='text']
  width 100%
  border 1px solid #3c3a3e
  padding 10px
  margin 1em 0
  outline none
  -webkit-appearance none
.subscribe input[type='submit']
  background #ff7105
  padding 10px 15px
  color #fff
  text-transform uppercase
  outline none
  -webkit-appearance none
  border 0
  font-size 0.8em
.subscribe input[type='submit']:hover
  background #4fbfa8
  transition 0.5s all
  -webkit-transition 0.5s all
  -o-transition 0.5s all
  -moz-transition 0.5s all
ul.tags_links
  padding 0
  list-style none
  width 100%
ul.tags_links li
  display inline-block
  margin 8px 3px
ul.tags_links li a
  color #fff
  font-size 0.8125em
  background #1a1918
  padding 5px 10px
ul.tags_links li a:hover
  text-decoration none
ul.tags_links li a:hover
  background #c5996c
  color #fff
h3
  &.page-header
    font-size 19px
    color #ff7105
    font-weight 500
    margin 0.5em 0 1em
    text-transform uppercase
</style>
