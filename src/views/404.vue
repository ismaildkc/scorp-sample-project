<template>
    <div class="bg-blue d-flex align-items-center">
       <div class="container ">
           <img src="/img/404.png">
            <h1 class="text-white">Sayfa Bulunamadı</h1>
            <div class="d-flex mt-3">
            <router-link class="text-white" to="/">Anasayfaya</router-link> <p class="text-white ml-1">dönmek için tıkla</p>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: '404',
    mounted: function() {
    }
}
</script>

<style lang="scss" scoped>

.bg-blue {
    width: 100vw;
    height: 100vh;
    background: var(--blueOcean);
}
a {
    font-size: 16px;
    text-decoration: underline;
}
p{
    font-size: 16px;
}
</style>