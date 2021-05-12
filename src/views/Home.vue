<template>
  <div>
    <section class="flex-row page-container position-relative">
      <img src="/img/banner.jpeg" class="home-img" />
      
      <div class="home-content">
        <h2 v-html="$t('homePage.title')"></h2>
        <p>{{ $t("homePage.desc") }}</p>
        <router-link :to="`/${$i18n.locale}/works`" class="btn">{{
          $t("definitions.ourWorks")
        }}</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss">
.home-content {
  width: 50%;
  max-width: 600px;
}

.home-img {
  width: 50%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
}

@media (max-width: 1024px){
  .home-content{
    width: 100%;
  }
  .home-img{
    width: 100%;
    z-index: -1;
    opacity: 0.5;
  }

}
</style>