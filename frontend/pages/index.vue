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

        <p>Союз творческих мастерских <b>"Хата Добра"</b> ‒
          это творческие проекты и пространство для
          воплощения Ваших идей с помощью
          технологичного и современного
          оборудования в сочетании с элементами
          традиций ручных ремёсел.</p>
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

        <p>Наши мастера проводят производственные экскурсии,
          мастер классы и обучение. Организуем совместные ярмарки,
          выставки, участвуем в больших проектах. Мы, союз
          творческих мастерских, реализуем свою продукцию и
          помогаем нашим друзьям находить заказы, продавать свои
          работы, предоставляем пространство в мастерских. В наших
          стенах интересное занятие сможет найти для себя человек
          любого возраста.</p>
        <p>В 2022 году наш проект по объединению мастерских и
          мастеров стал победителем и обладателем гранта от
          президентского фонда культурных инициатив.</p>
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
