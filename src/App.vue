<template>
  <div id="app" class="smooth-scroll">
    <transition 
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script>
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll();

export default {
  name: "app",
  mounted(){
    // this.locoScroll();
  },
  methods:{
    locoScroll(){
      const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    }
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style>
<!-- <style src="@/styles/main.scss" lang="scss"></style> -->