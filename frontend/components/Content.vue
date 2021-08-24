<template>
  <div class="content">
    <div
      v-for="(n, i) in ['#dbd3d8', '#d8b4a0', '#d77a61']"
      :key="i"
      class="content_item"
    >
      <img src="~/assets/img/studio_session_022.jpg" width="600" height="400" alt="" />
      <div class="wrapper content__wrapper">
        <h2>Изготовление на заказ</h2>
        <p>
          И сказал Бог: да будут светила на тверди небесной для отделения дня от ночи, и для знамений, и времен, и дней, и годов; и да будут они светильниками на тверди небесной, чтобы светить на землю. И стало так.
        </p>
      </div>
    </div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>
