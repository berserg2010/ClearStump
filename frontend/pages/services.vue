<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>

        <section>
          <h2 class="events__title">Производство ‒ 3D и CNC</h2>

          <div class="events__content">
            <div>
              <p>
                3D печать на промышленных высокопроизводительных принтерах, литьевое производство, услуги по лазерной
                резке, фрезеровке и гравировке.
              </p>
            </div>
          </div>

          <el-divider />
        </section>

        <section>
          <h2 class="events__title">Коворкинг</h2>

          <div class="events__content">
            <div>
              <p>
                Воплощаем в жизнь смелые творческие идеи, вместе ищем заказы и участвуем в ярмарках и выставках,
                предоставляем пространство в мастерских.
              </p>

              <p>У нас интересное занятие сможет найти для себя человек любого возраста.</p>
            </div>
          </div>

          <el-divider />
        </section>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ServicesPage',
  setup() {
    const title = ref('Услуги');

    return {
      title,
    };
  },
  head() {
    return {
      // @ts-ignore
      title: `${this.title} – Ясен Пень`,
    };
  },
});
</script>
