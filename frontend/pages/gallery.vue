<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>

        <div class="gallery-items">
          <div class="gallery-col">
            <ImageGallery
              v-for="(i, key) in colsGallery(cols, 1)"
              :key="key"
              :gallery="i"
            />
          </div>
          <div v-if="cols === 2" class="gallery-col">
            <ImageGallery
              v-for="(i, key) in colsGallery(2, 2)"
              :key="key"
              :gallery="i"
            />
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onDeactivated, onMounted, onUpdated, ref } from '@nuxtjs/composition-api';
import ImageGallery, { Gallery } from '~/components/ImageGallery.vue';

export default defineComponent({
  name: 'GalleryPage',
  components: {
    ImageGallery,
  },
  setup() {
    const title = ref('Галерея');
    const windowSize = ref();
    const cols = ref(1);

    const colsGallery = (cols: number = 1, col: number = 1) =>
      Object.values(Gallery).filter((_, index) => index % cols === col - 1);

    const onResize = () => {
      windowSize.value = window.innerWidth;
      cols.value = windowSize.value > 696 ? 2 : 1;
    };

    onMounted(() => {
      onResize();
      window.addEventListener('resize', onResize);
    });
    
    onUpdated(() => {
      onResize();
      window.addEventListener('resize', onResize);
    });

    onDeactivated(() => {
      window.removeEventListener('resize', onResize);
    });

    return {
      title,
      Gallery,
      colsGallery,
      cols,
    };
  },
  head() {
    return {
      title: `${this.title} – Ясен Пень`,
    };
  },
});
</script>
