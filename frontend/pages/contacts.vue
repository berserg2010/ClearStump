<template>
  <main class="main">
    <section class="content">
      <div class="wrapper">
        <h1>{{ title }}</h1>
        <p>
          производство, шоурум, мастерские и коворкинг: Спб, ул Чапаева 25 время работы 10-21без выходных, т. 8 921 796 32 96

          офисы, шоурум и торговые точки:
          Спб, Сытный рынок, павильон 75, время работы 8-19 без выходных т.8 921 796 32 96,

          г. Воронеж,Юго-западный рынок, с 12-15 по сб и вс. т. 8 900 305 28 16
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';


export default {
  name: 'Contacts',
  setup() {
    const title = ref('Контакты');

    return {
      title,
    };
  },
  head() {
    return {
      title: `${this.title} – Ясен Пень`,
    };
  },
};
</script>
