<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>
        <p>Нам нравится наша работа и люди, которые к нам приходят;)</p>
        <p>Получается, мы работаем над своими идеями и помогаем продумать и реализовать ваши!</p>
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
      title: `${this.title} - Ясен Пень`,
    };
  },
});
</script>
