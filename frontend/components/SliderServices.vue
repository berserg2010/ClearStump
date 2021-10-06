<template>
  <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
    <div class="services__list-item">
      <a class="services__list-item-link" href="#">Производство ‒ 3D и CNC</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="#">Мастер-классы и обучение</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="#">Коворкинг</a>
    </div>
    <div class="services__list-item">
      <a class="services__list-item-link" href="#">Юридический адрес и доступ в интернет</a>
    </div>
  </Flicking>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { Flicking } from '@egjs/vue-flicking';


export default {
  components: {
    Flicking,
  },
});
</script>
