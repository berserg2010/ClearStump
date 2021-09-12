<template>
  <main class="main">
    <section class="content">
      <div class="wrapper">
        <h1>{{ title }}</h1>
        <p>
          Нам нравится наша работа и люди, которые к нам приходят;)
          Получается, мы работаем над своими идеями и помогаем продумать-реализовать ваши!
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';


export default {
  name: 'About',
  setup() {
    const title = ref('О нас');

    return {
      title,
    };
  },
  head() {
    return {
      title: `${this.title} - Ясен Пень`,
    };
  },
};
</script>
