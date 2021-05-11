<template>
  <div class="portfolio">
    <div class="item" v-for="(item, index) in workInfo" :key="index">
      <img src="https://via.placeholder.com/500" alt="" />
      <div class="action">
        <a href="#">Launch</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardWork",
  props: ["workInfo"],
}
</script>
