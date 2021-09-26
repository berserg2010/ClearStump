<template>
  <main class="main home">
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <section class="content">
      <img src="@/assets/img/studio_session_022.jpg" width="600" height="400" alt="" />
      <div class="wrapper content__wrapper">
        <h2>Главная</h2>
        <p>Услуги по воплощению ваших идей и Коворкинг</p>
      </div>
    </section>

    <section class="content">
      <div class="wrapper content__wrapper">
        <h2>Услуги</h2>
        <dl>
          <dt>Производство:</dt>
          <dd>
            3D и CNC ‒ моделирование и реверс инжиниринг, проектирование, визуализации, 3D печать, фрезеровка, гравировка, дизайн, литьё силикона полиуретана и пластиков, керамика и фарфор, создание малых архитектурных форм и арт-объектов для города и любой местности.
          </dd>
          <dt>Мастер-классы и обучение.</dt>
          <dt>Коворкинг:</dt>
          <dd>аренда помещений и оборудования: от 500 руб./час или от 5 000 руб./месяц.</dd>
          <dt>Предоставляем юридический адрес и доступ в интернет.</dt>
        </dl>
      </div>
    </section>

    <section class="content">
      <div class="wrapper content__wrapper">
        <h2>О нас</h2>
        <p>
          Нам нравится наша работа и люди, которые к нам приходят;)
        </p>
        <p>
          Получается, мы работаем над своими идеями и помогаем продумать и реализовать ваши!
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';


export default defineComponent({
  name: 'Home',
  setup() {
    const title = ref('Главная страниц');

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
