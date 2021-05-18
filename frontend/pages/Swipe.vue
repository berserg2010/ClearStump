<template>
  <swiper class="swiper" :options="swiperOption" style="height:100vh">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'

export default {
  name: 'Swipe',
  title: 'Vertical slider',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        spaceBetween: 4,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    }
  }
}
</script>
