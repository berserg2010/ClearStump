<template>
  <div class="content">
    <div class="content_item">
      <img src="~/assets/img/studio_session_022.jpg" width="600" height="400" alt="" />
      <div class="wrapper content__wrapper">
        <h2>Главная</h2>
        <p>Услуги по воплощению ваших идей и Коворкинг</p>
      </div>
    </div>

    <div class="content_item">
      <div class="wrapper content__wrapper">
        <h2>Услуги</h2>
        <dl>
          <dt>Производство:</dt>
          <dd>
            3D и CNC - моделирование и реверс инжиниринг, проектирование, визуализации, 3D печать, фрезеровка, гравировка, дизайн, литьё силикона полиуретана и пластиков, керамика и фарфор, создание малых архитектурных форм и арт-объектов для города и любой местности.
          </dd>
          <dt>Мастер-классы и обучение.</dt>
          <dt>Коворкинг:</dt>
          <dd>аренда помещений и оборудования: от 500р/час или от 5 т.р./месяц.</dd>
          <dt>Предоставляем юр.адрес и доступ в интернет.</dt>
        </dl>
      </div>
    </div>

    <div class="content_item">
      <div class="wrapper content__wrapper">
        <h2>О нас</h2>
        <p>Нам нравится наша работа и люди, которые к нам приходят ;) Получается, мы работаем над своими идеями и помогаем продумать-реализовать ваши!</p>
      </div>
    </div>
    <div slot="scrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script>
export default {
  name: 'Content',
};
</script>
