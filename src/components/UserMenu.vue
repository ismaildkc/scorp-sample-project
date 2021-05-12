<template>
  <div class="user-menu-wrap">
    <a class="mini-photo-wrapper" href="#"
      ><img class="mini-photo" src="/img/oval.png" width="50" height="50"
    /></a>

    <div class="menu-container">
      <ul class="user-menu">
        <li class="user-menu-link">{{ this.$store.state.userInfo.nameSurname }}</li>
        <li class="user-menu-link" @click="logOut">{{ $t("definitions.close") }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserMenu",
  mounted() {
    document
      .querySelector(".mini-photo-wrapper")
      .addEventListener("click", function() {
        document.querySelector(".menu-container").classList.toggle("active");
      });
  },
  methods:{
    logOut(){
      this.$store.commit('_isLoggedIn', false);
      this.$store.commit('_userInfo', '');
    }
  }
};
</script>

<style lang="scss">
// Profile
.user-menu-wrap {
  position: relative;
  margin-right: 1rem;
}

.menu-container {
  visibility: hidden;
  opacity: 0;

  &.active {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
}

.user-menu {
  position: absolute;
  right: -150%;
  background-color: #fff;
  width: 215px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #d2d2d2;

  &:before {
    position: absolute;
    top: -16px;
    left: 120px;
    display: inline-block;
    content: "";
    border: 8px solid transparent;
  }

  &:after {
    position: absolute;
    top: -14px;
    left: 107px;
    display: inline-block;
    content: "";
    border: 7px solid transparent;
    border-bottom-color: #fff;
  }

  
  .user-menu-link {
    padding: 0.7rem 1rem;
    border-bottom: 1px solid #e4e4e4;
    &:hover {
      background: var(--red);
      color: #fff;
    }
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-bottom: none;
      border-radius: 0 0 8px 8px;
    }
  }
}
</style>
