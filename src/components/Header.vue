<template>
  <header class="page-container d-flex align-items-center">
    <div class="w-100 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <router-link to="/" class="logo d-flex align-items-center">
          <span class="svg-icon icons-lama"></span>
          LAMA
        </router-link>
        <span> | ANA SAYFA</span>
      </div>
      <nav class="navigation">
        <router-link to="/">{{ $t('navigation.home') }}</router-link>
        <router-link to="/works">{{ $t('navigation.works') }}</router-link>
        <router-link to="/contact">{{ $t('navigation.contact') }}</router-link>
      </nav>

      <div class="d-flex">
        <select name="lang" id="lang">
          <option value="tr">TR</option>
          <option value="en">EN</option>
        </select>
        <button type="button" @click="$emit('showLoginModal')">LOGIN</button>

        <div class="user-menu-wrap">
          <a class="mini-photo-wrapper" href="#"
            ><img class="mini-photo" src="/img/oval.png" width="50" height="50"
          /></a>

          <div class="menu-container">
            <ul class="user-menu">
              <li class="user-menu__item">
                Profil Ayarları
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>
<script>
export default {
  name: "Header",
  mounted() {
    // this.slideSection();
    document.querySelector(".mini-photo-wrapper").addEventListener("click", function() {
      document.querySelector(".menu-container").classList.toggle("active");
    });
  },
  methods: {
    slideSection() {
      const toggleButton = document.querySelector(".toggle");
      const navigation = document.querySelector(".navigation");

      toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        navigation.classList.toggle("active");
      });

      navigation.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        navigation.classList.toggle("active");
      });
    },
  },
};
</script>

<style lang="scss">
header {
  position: relative;
  width: 100vw;
  height: 80px;
  box-shadow: 0px 0px 10px 0px #d2d2d2;
  z-index: 2;
  background: #fff;
  .logo {
    color: var(--red);
    font-weight: 600;
    margin-right: 0.5rem;
    .svg-icon {
      background: var(--red);
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  nav {
    a {
      padding: 0 0.5rem;
    }
  }
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
    right: -155%;
    margin-top: 15px;
    background-color: var(--blueOcean);
    color: #fff;
    width: 215px;
    border-radius: 8px;

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
      border-bottom-color: var(--blueOcean);
    }

    .user-menu__item {
      .user-menu-link {
        padding: 0.7rem 1rem;
        font-size: 0.9rem;
        font-weight: 300;
        display: block;
        border-bottom: 1px solid var(--purpleLight);
        &:hover {
          background: #3d30f8;
        }
      }
      &:first-child {
        .user-menu-link {
          border-radius: 8px 8px 0 0;
        }
      }
      &:last-child {
        .user-menu-link {
          border-bottom: none;
          border-radius: 0 0 8px 8px;
        }
      }
    }
  }
}
</style>
