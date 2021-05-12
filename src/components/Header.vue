<template>
  <header class="page-container d-flex align-items-center">
    <div class="w-100 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <router-link to="/" class="logo d-flex align-items-center">
          <span class="svg-icon icons-lama"></span>
          LAMA AGENCY
        </router-link>
        <span>| {{  $t("navigation."+ this.$route.name) }}</span>
      </div>
      <nav class="d-none d-md-block">
        <router-link :to="`/${$i18n.locale}`">{{
          $t("navigation.home")
        }}</router-link>
        <router-link :to="`/${$i18n.locale}/works`">{{
          $t("navigation.works")
        }}</router-link>
        <router-link :to="`/${$i18n.locale}/contact`">{{
          $t("navigation.contact")
        }}</router-link>
      </nav>

      <div class="d-none d-md-flex align-items-center">
        <button
          class="mr-3 login-button"
          type="button"
          v-if="!this.$store.state.isLoggedIn"
          @click="$emit('showLoginModal')"
        >
          {{ $t("definitions.login") }}
        </button>
        <UserMenu v-if="this.$store.state.isLoggedIn" />
        <LanguageSwitcher />
      </div>

      <div class="d-block d-md-none">
        <ul class="toggle">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="navigation">
          <ul>
            <li>
              <router-link :to="`/${$i18n.locale}`">{{
                $t("navigation.home")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/${$i18n.locale}/works`">{{
                $t("navigation.works")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/${$i18n.locale}/contact`">{{
                $t("navigation.contact")
              }}</router-link>
            </li>
          </ul>

          <button
            class="mr-3 mb-3"
            type="button"
            v-if="!this.$store.state.isLoggedIn"
            @click="$emit('showLoginModal')"
          >
            {{ $t("definitions.login") }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";
import UserMenu from "@/components/UserMenu";

export default {
  name: "Header",
  components: {
    LanguageSwitcher,
    UserMenu,
  },
  mounted() {
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
      height: 3rem;
    }
    &:hover {
      .svg-icon {
        background: #000;
      }
    }
  }
  .login-button {
    min-width: 100px;
  }

  // Mobile Menu
  ul.toggle {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 30px;
    cursor: pointer;
    z-index: 16;

    &.active {
      li {
        &:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }

    li {
      list-style: none;
      position: absolute;
      left: 5%;
      width: 90%;
      height: 2px;
      transition: 0.5s;
      background: var(--red);
      transform: translateY(-50%) rotate(0);
      opacity: 1;

      &:nth-child(1) {
        top: 20%;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 80%;
      }
    }
  }

  // Mobile Menu

  /* NAVIGATION */
  .navigation {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 15;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &.active {
      left: 0;
    }

    ul li {
      text-align: center;
      padding-bottom: 5px;
      a {
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }
}
nav {
  a {
    padding: 1rem;
    border-bottom: 1px solid #fff;
    &.is-active {
      border-bottom: 1px solid var(--red);
    }
  }
}
</style>
