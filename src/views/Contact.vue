<template>
  <div class="games">
    <div class="container">
      <div class="page-path">
        <ul class="path-list">
          <li>
            <a href="index.html">Home</a>
          </li>&nbsp;&nbsp;/&nbsp;&nbsp;
          <li class="act">Contact</li>
        </ul>
        <div class="clearfix" />
      </div>
      <div class="contact">
        <h3 class="page-header">Cotntact Us</h3>
        <div id="container" class="map">
          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12071.681938475434!2d-93.25993179999999!3d40.851669550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e9175fdc81fa0f%3A0x3e508b796d85b60e!2sNew+York%2C+IA+50238%2C+USA!5e0!3m2!1sen!2sin!4v1418810233989"  frameborder="0" style="border:0"></iframe> -->
        </div>
        <div class="contact-box">
          <div class="text">
            <input type="text" placeholder="Name" required>
            <input type="text" placeholder="Subject" required>
            <input type="text" placeholder="Email" required>
          </div>
          <div class="text">
            <textarea placeholder="Message" required />
          </div>
          <div class="text-but">
            <input type="submit" value="submit">
          </div>
        </div>
        <div class="address-box">
          <h3 class="page-header">Address</h3>
          <h4>It is a long established fact that a reader will be distracted</h4>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here',
          </p>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,that it has a more-or-less normal
            distribution as opposed to using 'Content here, content here',
          </p>
          <a href="mailto:example@email.com">123example@email.com</a>
          <p>+001 111 9999 99</p>
        </div>
        <div class="clearfix" />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.map iframe
  width 100%
  height 250px
.map
  margin 1em 0
.contact-box
  width 70%
  float left
  margin-right 3%
.address-box
  width 27%
  float left
.text
  display flex
  justify-content space-between
  margin 1em 0
  input[type='text']
    width 28%
    padding 10px
    border 1px solid #ff7105
    outline none
    -webkit-appearance none
  textarea
    width 97.7%
    height 250px
    border 1px solid #ff7105
    outline none
    -webkit-appearance none
    padding 10px
    resize none
.text-but
  margin 1em 0
  text-align center
.text-but input[type='submit'], .text-cmt input[type='submit']
  font-size 0.875em
  color #fff
  text-transform uppercase
  background #ff7105
  padding 10px 20px
  outline none
  -webkit-appearance none
  cursor pointer
  border 0
.text-but input[type='submit']:hover, .text-cmt input[type='submit']:hover
  background #4fbfa8
  transition 0.5s all
  -webkit-transition 0.5s all
  -o-transition 0.5s all
  -moz-transition 0.5s all
  -ms-transition 0.5s all
.address-box h4
  font-size 0.875em
  color #000
  font-weight 500
  text-transform uppercase
  margin-bottom 0.5em
.address-box p
  font-size 0.8em
  font-weight 100
  line-height 1.6em
  margin 0.5em 0
.address-box a
  font-size 0.8em
  color #4fbfa8
  font-weight 100
</style>
