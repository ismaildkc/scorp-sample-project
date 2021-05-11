<template>
  <div id="app">
    <ModalLogin ref="modalLogin"/>
    <Header @showLoginModal="showLoginModal"/>
    <transition 
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in">
      <router-view />
    </transition>

    <MainFooter />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MainFooter from "@/components/Footer";
import ModalLogin from "@/components/ModalLogin";

export default {
  name: "app",
  components: {
    Header,
    MainFooter,
    ModalLogin,
  },
  methods:{
    showLoginModal(){
      this.$refs.modalLogin.openModal();
    }
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style>