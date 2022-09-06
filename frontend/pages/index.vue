<template>
  <main class="main home">
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <section class="content">
      <img
        class="main-img"
        src="@/assets/img/studio_session_022.jpg"
        width="600"
        height="400"
        alt="Изделие из дерева в Ясень Пень"
      />
      <div class="wrapper content__wrapper">
        <h2>Творческая мастерская и коворкинг</h2>
        <p>Мы поможем Вам воплотить в жизнь самые смелые творческие идеи.</p>
      </div>
    </section>

    <section class="content services">
      <div class="wrapper content__wrapper">
        <h2>Услуги</h2>
        <div class="content__slider-wrapper">
          <SliderServices />
        </div>
      </div>
    </section>

    <section class="content">
      <div class="wrapper content__wrapper">
        <h2>О нас</h2>
        <p>Нам нравится наша работа и люди, которые к нам приходят;)</p>
        <p>Получается, мы работаем над своими идеями и помогаем продумать и реализовать ваши!</p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import SliderServices from '~/components/SliderServices.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    SliderServices,
  },
  setup() {
    const title = ref('Главная страница');

    return {
      title,
    };
  },
  head() {
    return {
      title: `${this.title} – Ясен Пень`,
    };
  },
});
</script>
