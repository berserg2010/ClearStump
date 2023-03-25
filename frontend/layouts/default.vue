<template>
  <div>
    <Header />
    
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
  },
});
</script>
