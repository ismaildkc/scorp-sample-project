<template>
<transition name="fade">
  <div class="modal" v-if="show">
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <!-- <swiper-slide><BagisSec /></swiper-slide> -->
    <swiper-slide><BirBagisYap ref="slideToNext"/></swiper-slide>
    <swiper-slide><Bilgiler /></swiper-slide>
    <swiper-slide><Odeme /></swiper-slide>
    <!-- <swiper-slide><KartSec /></swiper-slide>
    <swiper-slide><KampanyaBagis /></swiper-slide>
    <swiper-slide><KartBilgileri /></swiper-slide>
    <swiper-slide><KampanyaOlustur /></swiper-slide> -->
    
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <FrameFooter />
  </div>
</transition>
</template>

<script>
import FrameFooter from "@/components/FrameFooter";
import BagisSec from "@/components/BagisSec";
import BirBagisYap from "@/components/BirBagisYap";
import KartSec from "@/components/KartSec";
import KampanyaBagis from "@/components/KampanyaBagis";
import Odeme from "@/components/Odeme";
import KartBilgileri from "@/components/KartBilgileri";
import Bilgiler from "@/components/Bilgiler";
import KampanyaOlustur from "@/components/KampanyaOlustur";

export default {
  name: "Carousel",
  components: {
    BagisSec, BirBagisYap, KartSec, KampanyaBagis, Odeme, FrameFooter, KartBilgileri, Bilgiler, KampanyaOlustur
  },
  data() {
    return {
      show: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        loop: false,
        grabCursor: true,
        paginationClickable: false,
        mousewheelControl: 1,
        parallax: true,
        speed: 0,
        slidesPerView: 1,
        freeMode: false,
        effect: "fade",
        fadeEffect: { crossFade: true },
        // autoplay: { delay: 5000 },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
  },
  methods:{
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    slideToNext(){
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(2, 1000, false);
    }
  }
};
</script>

<style lang="scss">
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: block !important;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>