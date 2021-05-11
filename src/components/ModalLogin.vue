<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    mode="out-in">
    <div class="modal main-modal" v-if="show">
      <form @submit.prevent="submitForm" autocomplete="off" class="login-form d-flex flex-column justify-content-center">
        <h2>Giriş Yap</h2>

        <div class="form-group">
          <label for="userName">Kullanıcı Adı</label>
          <input
            v-model="form.userName"
            v-on:input="removeSpace"
            v-bind:class="{
              error: $v.form.userName.$error,
              valid: $v.form.userName.$dirty && !$v.form.userName.$invalid,
            }"
            type="text"
            class="form-control"
          />
          <p class="form-warning" v-if="!$v.form.userName.alpha">Ad Soyad şeklinde giriniz.</p>
          <p class="form-warning" v-if="!$v.form.userName.nameSurnameLength">En az 2 karakter girmelisiniz</p>
          <p class="form-warning" v-if="!$v.form.userName.minLength">En az 2 karakter girmelisiniz</p>
          <p class="form-warning" v-if="!$v.form.userName.required">Bu alan zorunludur.</p>
        </div>

        <div class="form-group">
          <label for="userPass">Şifre</label>
          <input
            v-model="form.userPass"
            v-on:input="removeSpace"
            v-bind:class="{
              error: $v.form.userPass.$error,
              valid: $v.form.userPass.$dirty && !$v.form.userPass.$invalid,
            }"
            type="text"
            class="form-control"
          />
          <p class="form-warning" v-if="!$v.form.userPass.required">Bu alan zorunludur.</p>
        </div>

        <button type="button" class="btn" @click="submitForm">Giriş Yap</button>

      </form>
    </div>
  </transition>
</template>
<script>
import {
  required,
  email,
  minLength,
  helpers,
} from "vuelidate/lib/validators";

const nameSurnameLength = (value) => {
  let isValid = true;
  value.split(" ").forEach((e) => {
    if (e.length < 2) {
      isValid = false;
    }
  });
  return isValid;
};

export default {
  name: "ModalLogin",
  data() {
    return {
      show: false,
      form: {
        userName: "",
        userPass: "",
      },
    };
  },
  validations: {
    form: {
      userName: {
        required,
        nameSurnameLength,
        minLength: minLength(2),
        alpha: helpers.regex(
          "alpha",
          /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i
        ),
      },
      userPass: {
        required,
      },
    },
  },
  methods: {
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    submitForm(){
      console.log("asdasdasd");
      this.$v.$touch();
      if(!this.$v.form.$invalid){
        this.getinfoCreate(this.$v.form);
        
      }else{
        // console.log("not valid");
        // console.log(this.$v.form);
      }
    },
    removeSpace: function(event) {
      this.form.userName = this.form.userName
        .replace(/\s\s+/g, " ")
        .trimStart();
    },
    key: function(event) {
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    },
  },
};
</script>


<style lang="scss">
.login-form{
  width: 600px;
  box-shadow: 0px 0px 10px 0px #d2d2d2;
  padding: 2rem;
  border-radius: 5px;
}
</style>