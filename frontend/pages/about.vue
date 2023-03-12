<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>
        
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
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'AboutPage',
  setup() {
    const title = ref('О нас');

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
