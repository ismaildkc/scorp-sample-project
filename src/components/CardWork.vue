<template>
  <div class="portfolio">
    <div class="item" v-for="(item, index) in workInfo" :key="index">
      <img :src="item.img" alt="" />
      <router-link :to="`/${$i18n.locale}/works`" class="action">
        <span>{{ $t("definitions.launch") }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardWork",
  props: ["workInfo"],
};
</script>

<style lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin-top: 20px;

  .item {
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .action {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;

      &:hover {
        opacity: 1;
      }

      span {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        padding: 5px 15px;
      }
    }
  }

  @media (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
