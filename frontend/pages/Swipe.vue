<template>
  <swiper class="swiper" :options="swiperOption" style="height:100vh">
    <swiper-slide>
      <section class="home">
            <div class="container">
                <div class="home_inner">
                    <div class="home_inner-content">
                        <div class="home_title">
                            <h1>Изготовление на заказ</h1>
                        </div>
                        <div class="home_text">
                            <h2>И сказал Бог: да будут светила на тверди небесной для отделения дня от ночи, и для знамений, и времен, и дней, и годов; и да будут они светильниками на тверди небесной, чтобы светить на землю. И стало так.
                                И создал Бог два светила великие: светило большее, для управления днем, и светило меньшее, для управления ночью, и звезды;
                                и поставил их Бог на тверди небесной, чтобы светить на землю, и управлять днем и ночью, и отделять свет от тьмы. И увидел Бог, что это хорошо.
                                И был вечер, и было утро: день четвёртый.</h2>
                        </div>
                        <div class="home_btn">
                            <a href='#'>Оставить заявку</a>
                        </div>
                    </div>
                    <div class="home_img">
                    </div>
                </div>
            </div>
        </section>
    </swiper-slide>
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
