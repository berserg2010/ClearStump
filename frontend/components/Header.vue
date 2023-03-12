<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <div class="logo">
        <NuxtLink to="/" @click.native="menuButtonHandler(false)">Ясен Пень</NuxtLink>
      </div>

      <Menu :menu-is-open="menuIsOpen" :menu-button-handler="menuButtonHandler" />

      <button
        class="menu_button"
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

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    Menu,
  },
  setup() {
    const menuIsOpen = ref(false);

    const menuButtonHandler = (flag = true): void => {
      menuIsOpen.value = flag && !menuIsOpen.value;
    };

    return {
      menuIsOpen,
      menuButtonHandler,
    };
  },
});
</script>
