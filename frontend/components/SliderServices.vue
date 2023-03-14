<template>
  <Flicking ref="flickingEl" :options="options">
    <div class="services__list-item">
      <a class="services__list-item-link">Производство ‒ 3D и CNC</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link">Мастер-классы и обучение</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link">Коворкинг</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link">Доступ в интернет</a>
    </div>
  </Flicking>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, ref } from '@vue/composition-api';

import { Flicking } from '@egjs/vue-flicking';

export default defineComponent({
  name: 'SliderService',
  components: {
    Flicking,
  },
  setup() {
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
      flickingEl,
      options,
    };
  },
});
</script>
