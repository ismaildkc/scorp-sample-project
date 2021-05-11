<template>
  <div>
    <section class="flex-row page-container position-relative">
      <img
        src="https://images.unsplash.com/photo-1507206130118-b5907f817163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        class="home-img"
        alt=""
      />
      <div class="home-content">
        <h2>
          We help <span class="highlight">you</span> to achieve <br />
          <span class="highlight">your goals</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
          nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
          aspernatur culpa maxime laboriosam, impedit quae officiis consectetur
        </p>
        <a href="#services" class="btn">Get Started</a>
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
  max-width: 600px;
}

</style>