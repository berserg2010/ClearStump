<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <div class="logo">
        <NuxtLink to="/">
          Ясен Пень
        </NuxtLink>
      </div>
      <nav class="menu">
        <NuxtLink to="about">
          О нас
        </NuxtLink>
        <NuxtLink to="contacts">
          Контакты
        </NuxtLink>
      </nav>
      <button
        class="menu_button "
        :class="{
          'menu_button--close': !menuIsOpen,
          'menu_button--open': menuIsOpen,
        }"
        type="button"
        @click="menuButtonHandler"
      ></button>
    </div>
  </header>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';


export default {
  name: 'Header',
  setup() {
    const menuIsOpen = ref(false);

    const menuButtonHandler = () => {
      menuIsOpen.value = !menuIsOpen.value;
    };

    return {
      menuIsOpen,
      menuButtonHandler,
    };
  },
};
</script>
