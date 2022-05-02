<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>

        <ul class="gallery-items">
          <li>
            <ImageGallery :gallery="Gallery.GOODS" />
          </li>
          <li>
            <ImageGallery :gallery="Gallery.COWORKING" />
          </li>
          <li>
            <ImageGallery :gallery="Gallery.MANUFACTURE" />
          </li>
          <li>
            <ImageGallery :gallery="Gallery.TRAINING" />
          </li>
          <li>
            <ImageGallery :gallery="Gallery.PLACE" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import ImageGallery, { Gallery } from '~/components/ImageGallery.vue';

export default defineComponent({
  name: 'GalleryPage',
  components: {
    ImageGallery,
  },
  setup() {
    const title = ref('Галерея');

    return {
      title,
      Gallery,
    };
  },
  head() {
    return {
      title: `${this.title} – Ясен Пень`,
    };
  },
});
</script>
