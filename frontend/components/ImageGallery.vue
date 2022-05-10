<template>
  <div v-show="!loading" class="gallery__image-wrapper" :class="{ 'fade-in': !loading }">
    <el-image
      class="gallery-item"
      style="max-width: 536px"
      fit="scale"
      :src="srcListGallery[0]"
      :preview-src-list="srcListGallery"
      :alt="titleGallery"
      @load="onLoadImage"
    />
    <div class="gallery__image-description">
      <span>{{ titleGallery }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from '@nuxtjs/composition-api';

export enum Gallery {
  GOODS = 'goods',
  COWORKING = 'coworking',
  MANUFACTURE = 'manufacture',
  TRAINING = 'training',
  PLACE = 'place',
}

const goodsSrcList = [
  require('~/assets/img/goods/01.jpg'),
  require('~/assets/img/goods/02.jpg'),
  require('~/assets/img/goods/03.jpg'),
  require('~/assets/img/goods/04.jpg'),
  require('~/assets/img/goods/05.jpg'),
  require('~/assets/img/goods/06.jpg'),
  require('~/assets/img/goods/07.jpg'),
];

const coworkingSrcList = [
  require('~/assets/img/coworking/01.jpeg'),
  require('~/assets/img/coworking/02.jpg'),
  require('~/assets/img/coworking/03.jpg'),
  require('~/assets/img/coworking/04.jpg'),
  require('~/assets/img/coworking/05.jpg'),
];

const manufactureSrcList = [
  require('~/assets/img/manufacture/01.jpg'),
  require('~/assets/img/manufacture/02.jpg'),
  require('~/assets/img/manufacture/03.jpg'),
  require('~/assets/img/manufacture/04.jpg'),
  require('~/assets/img/manufacture/05.jpeg'),
];

const trainingSrcList = [
  require('~/assets/img/training/01.jpeg'),
  require('~/assets/img/training/02.jpg'),
  require('~/assets/img/training/03.jpeg'),
  require('~/assets/img/training/04.jpeg'),
  require('~/assets/img/training/05.jpeg'),
];

const placeSrcList = [
  require('~/assets/img/place/01.jpg'),
  require('~/assets/img/place/02.jpg'),
  require('~/assets/img/place/03.jpeg'),
  require('~/assets/img/place/04.jpeg'),
];

export default defineComponent({
  name: 'ImageGallery',
  props: {
    gallery: {
      type: String as PropType<Gallery>,
      required: true,
    },
  },
  setup(props) {
    const { gallery } = toRefs(props);
    const loading = ref(true);

    const titleList = new Map<string, string>([
      [Gallery.GOODS, 'Наши изделия'],
      [Gallery.COWORKING, 'Коворкинг'],
      [Gallery.MANUFACTURE, 'Производство'],
      [Gallery.TRAINING, 'Мастер классы и обучение'],
      [Gallery.PLACE, 'Место расположения'],
    ]);

    const srcList = new Map<string, string[]>([
      [Gallery.GOODS, goodsSrcList],
      [Gallery.COWORKING, coworkingSrcList],
      [Gallery.MANUFACTURE, manufactureSrcList],
      [Gallery.TRAINING, trainingSrcList],
      [Gallery.PLACE, placeSrcList],
    ]);

    const titleGallery = computed(() => gallery?.value && titleList.get(gallery.value));
    const srcListGallery = computed(() => gallery?.value && srcList.get(gallery.value));

    const onLoadImage = () => (loading.value = false);

    return {
      titleGallery,
      srcListGallery,
      loading,
      onLoadImage,
    };
  },
});
</script>
