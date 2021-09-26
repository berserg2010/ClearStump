<template>
  <nav
    class="menu"
    :class="{
      'menu--open': menuIsOpen,
      'menu--close': !menuIsOpen,
    }"
  >
    <ul>
      <li class="menu_item">
        <NuxtLink
          to="about"
          @click.native="menuButtonHandler(false)"
        >
          О нас
        </NuxtLink>
      </li>
      <li class="menu_item">
        <NuxtLink
          to="contacts"
          @click.native="menuButtonHandler(false)"
        >
          Контакты
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';


export default defineComponent({
  name: 'Menu',
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
});
</script>
