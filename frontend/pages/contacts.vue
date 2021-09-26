<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>

        <div class="contacts__item">
          <p>Производство, шоурум, мастерские и коворкинг:</p>
          <p>СПб, ул. Чапаева 25.</p>
          <p>Время работы с 10:00 до 21:00 без выходных.</p>
          <p>Телефон: <a href="tel: +79217963296">+7 921 796 32 96</a></p>
        </div>

        <div class="contacts__item">
          <p>Офисы, шоурум и торговые точки:</p>
          <p>СПб, Сытный рынок, павильон 75.</p>
          <p>Время работы с 8:00 до 19:00 без выходных.</p>
          <p>Телефон: <a href="tel: +79217963296">+7 921 796 32 96</a></p>
        </div>

        <div class="contacts__item">
          <p>г.Воронеж, Юго-западный рынок.</p>
          <p>Время работы с 12:00 до 15:00 по субботам и воскресениям.</p>
          <p>Телефон: <a href="tel: +79003052816">+7 900 305 28 16</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';


export default defineComponent({
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
});
</script>
