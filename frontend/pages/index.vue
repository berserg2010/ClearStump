<template>
  <main class="main">
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <Content />
  </main>
</template>

<script>
import Content from '../components/Content'

export default {
  name: 'Home',
  components: {
    Content,
  },
  data() {
    return {
      title: 'Главная страница',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
