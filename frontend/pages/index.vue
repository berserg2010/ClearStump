<template>
  <main class="main home">
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <section class="content">
      <img src="@/assets/img/studio_session_022.jpg" width="600" height="400" alt="Изделие из дерева в Ясень Пень" />
      <div class="wrapper content__wrapper">
        <h2>Главная</h2>
        <p>Услуги по воплощению ваших идей и коворкинг.</p>
      </div>
    </section>

    <section class="content services">
      <div class="wrapper content__wrapper">
        <h2>Услуги</h2>
        <ul class="services__list">
          <li><a class="services__list-item" href="#">Производство ‒ 3D и CNC.</a></li>
          <li><a class="services__list-item" href="#">Мастер-классы и обучение.</a></li>
          <li><a class="services__list-item" href="#">Коворкинг.</a></li>
          <li><a class="services__list-item" href="#">Предоставляем юридический адрес и доступ в интернет.</a></li>
        </ul>
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
