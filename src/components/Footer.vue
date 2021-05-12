<template>
  <footer class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div>
        © Copyright 2021. All rights reserved.
      </div>
      <div>
        <nav class="d-none d-md-block">
          <router-link :to="`/${$i18n.locale}`">{{ $t('navigation.home') }}</router-link>
          <router-link :to="`/${$i18n.locale}/works`">{{ $t('navigation.works') }}</router-link>
          <router-link :to="`/${$i18n.locale}/contact`">{{ $t('navigation.contact') }}</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
footer{
  // position: fixed;
  width: 100vw;
  height: 150px;
  bottom: 0;
  left: 0;
  background: #f3f3f3;
}
</style>