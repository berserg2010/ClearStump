<template>
  <nav
    class="menu"
    :class="{
      'menu--open': menuIsOpen,
      'menu--close': !menuIsOpen,
    }"
  >
    <ul>
      <li v-for="item in menuItems" :key="item.link" class="menu_item">
        <NuxtLink :to="item.link" @click.native="menuButtonHandler(false)">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MenuComponent',
  props: {
    menuIsOpen: {
      type: Boolean,
      default: false,
    },
    menuButtonHandler: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const menuItems = [
      { link: 'about', name: 'О нас' },
      { link: 'services', name: 'Услуги' },
      { link: 'events', name: 'События' },
      { link: 'gallery', name: 'Галерея' },
      { link: 'contacts', name: 'Контакты' },
    ];

    return {
      menuItems,
    };
  },
});
</script>
