<template>
  <main class="main">
    <section class="content">
      <div class="wrapper content__wrapper">
        <h1>{{ title }}</h1>

        <section>
          <h2 class="events__title">Открытие выставки "Ловцы солнца"</h2>

          <p class="events__subtitle">– 12 сентября в понедельник в 16 часов.</p>

          <div class="events__content">
            <div class="events__image-wrapper">
              <el-image
                class="gallery-item"
                style="max-width: 536px"
                fit="scale"
                :src="require('~/assets/img/goods/09.jpg')"
                alt="Наши изделия"
              />
            </div>

            <div>
              <p>
                Ловец солнца – это прекрасное украшение интерьера в солнечные дни. Их делают из фурнитуры, бусин и
                кристаллов, отражающих свет. Солнечные лучи, попадая на кристаллы, превращаются в множество радужных
                бликов, красиво украшающих комнату. Также, Ловец солнца считается оберегом и защищает дом от негатива.
                Украшение принято вешать на окно, там где много солнца, тогда радужные переливы будут ярче и наполнят
                пространство волшебством и уютом.
              </p>

              <p>
                Больше примеров наших изделий в
                <NuxtLink to="gallery">Галерее</NuxtLink>
              </p>

              <p>
                Эта выставка открывает целую программу познавательных оригинальных мастер-классов и выставок. От лица
                нашего коллектива организаторов благодарим Президентский фонд культурных инициатив за доверие и
                поддержку!
              </p>

              <p>
                Проект реализуется при поддержке Президентского фонда культурных инициатив (<a
                  href="https://фондкультурныхинициатив.рф/"
                  >фондкультурныхинициатив.рф</a
                >).
              </p>
            </div>
          </div>

          <p class="events__subtitle">06.09.2022</p>

          <el-divider />
        </section>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'EventsPage',
  setup() {
    const title = ref('События');

    return {
      title,
    };
  },
  head() {
    return {
      title: `${this.title} – Ясен Пень`,
    };
  },
});
</script>
