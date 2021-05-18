<template>
  <div>
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <Swipe />
  </div>
</template>

<script>
import Swipe from './Swipe.vue'

export default {
  name: 'Home',
  components: {
    Swipe,
  },
  data() {
    return {
      title: 'Главная страница'
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
