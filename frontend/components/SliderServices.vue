<template>
  <Flicking
    ref="flicking"
    :options="{ circular: true, align: 'center', inputType: ['touch', 'mouse'] }"
  >
    <div class="services__list-item">
      <a class="services__list-item-link" href="">Производство ‒ 3D и CNC</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="">Мастер-классы и обучение</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="">Коворкинг</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="">Юридический адрес и доступ в интернет</a>
    </div>
  </Flicking>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';

import { Flicking } from '@egjs/vue-flicking';


export default {
  components: {
    Flicking,
  },
  setup() {
    const flicking = ref<HTMLElement | undefined>();

    onMounted(() => {
      // @ts-ignore
      if (typeof flicking.value !== 'undefined' && flicking.value.lenght > 0) {
        setInterval(() => {
          // @ts-ignore
          flicking.value.next();
        }, 5000);
      }
    });

    return {
      flicking,
    };
  },
});
</script>
