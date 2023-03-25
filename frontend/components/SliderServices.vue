<template>
  <Flicking ref="flickingEl" :options="options">
    <div v-for="item in menuItems" :key="item.name" class="services__list-item">
      <NuxtLink :to="item.link" class="services__list-item-link">
        {{ item.name }}
      </NuxtLink>
    </div>
  </Flicking>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, ref } from '@nuxtjs/composition-api';

import { Flicking } from '@egjs/vue-flicking';

export default defineComponent({
  name: 'SliderService',
  components: {
    Flicking,
  },
  setup() {
    const menuItems = [
      { link: 'services', name: 'Производство ‒ 3D и CNC' },
      { link: 'services', name: 'Мастер-классы и обучение' },
      { link: 'services', name: 'Коворкинг' },
      { link: 'services', name: 'Доступ в интернет' },
    ];

    const flickingEl = ref<Flicking | undefined>();

    const options = reactive({
      circular: true,
      align: 'center',
      inputType: ['touch', 'mouse'],
    });

    const interval = ref<number | null>(null);

    const autoScrollCarousel = () => {
      if (typeof flickingEl.value !== 'undefined' && flickingEl.value.panelCount > 0) {
        interval.value = window.setInterval(() => {
          flickingEl.value?.next();
        }, 5000);
      }
    };

    onMounted(autoScrollCarousel);
    onBeforeUnmount(() => {
      if (typeof interval.value === 'number') {
        clearInterval(interval.value);
      }
    });

    return {
      menuItems,
      flickingEl,
      options,
    };
  },
});
</script>
