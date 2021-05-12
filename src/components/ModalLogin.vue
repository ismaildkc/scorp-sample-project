<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    mode="out-in">
    <div class="modal main-modal" v-if="show">
      <form @submit.prevent="submitForm" autocomplete="off" class="login-form d-flex flex-column justify-content-center">
        <h2>{{ $t("definitions.login") }}</h2>

        <div class="form-group">
          <label for="nameSurname">{{ $t("definitions.nameSurname") }}</label>
          <input 
            v-model="form.nameSurname" 
            v-on:input="removeSpace"
            v-bind:class="{error: $v.form.nameSurname.$error, valid: $v.form.nameSurname.$dirty && !$v.form.nameSurname.$invalid}"
            type="text" class="form-control">
          <p class="form-warning" v-if="!$v.form.nameSurname.alpha">{{ $t("formWarnings.nameSurname") }}</p>
          <p class="form-warning" v-if="!$v.form.nameSurname.nameSurnameLength">{{ $t("formWarnings.minLength") }}</p>
          <p class="form-warning" v-if="!$v.form.nameSurname.minLength">{{ $t("formWarnings.minLength") }}</p>
          <p class="form-warning" v-if="!$v.form.nameSurname.required">{{ $t("formWarnings.required") }}</p>
        </div>

        <div class="form-group">
          <label for="mail">{{ $t("definitions.emailAdress") }}</label>
          <input 
              v-model="form.mail" 
              v-on:keydown='key'
              v-bind:class="{error: $v.form.mail.$error, valid: $v.form.mail.$dirty && !$v.form.mail.$invalid}"
              inputmode="email" type="email" class="form-control">
            <p class="form-warning" v-if="!$v.form.mail.email">{{ $t("formWarnings.wrongMail") }}</p>
            <p class="form-warning" v-if="!$v.form.mail.required">{{ $t("formWarnings.required") }}</p>
        </div>

        <div class="form-group">
          <label for="password">{{ $t("definitions.password") }}</label>
          <input
            v-model="form.password"
            v-on:keydown='key'
            v-bind:class="{
              error: $v.form.password.$error,
              valid: $v.form.password.$dirty && !$v.form.password.$invalid,
            }"
            type="password"
            class="form-control"
          />
          <p class="form-warning" v-if="!$v.form.password.required">{{ $t("formWarnings.required") }}</p>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn" @click="submitForm">{{ $t("definitions.login") }}</button>
          <button type="button" @click="closeModal">{{ $t("definitions.close") }}</button>
        </div>

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
  value.split(" ").forEach(e => {
    if(e.length < 2){
      isValid = false;
    }
  });
  return isValid;
}

export default {
  name: "ModalLogin",
  data() {
    return {
      show: false,
      form: {
        nameSurname: "",
        mail: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      nameSurname: {
        required,
        nameSurnameLength,
        minLength: minLength(2),
        alpha: helpers.regex('alpha', /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i),
      },
      mail: {
        required,
        email: email
      },
      password: {
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
      this.$v.$touch();
      if(!this.$v.form.$invalid){
        this.$store.commit('_isLoggedIn', true);
        this.$store.commit('_userInfo', this.$v.form.$model);
        this.closeModal();
      }else{
        // console.log("not valid", this.$v.form);
      }
    },
    removeSpace: function(event){
      this.form.nameSurname = this.form.nameSurname.replace( /\s\s+/g, ' ' ).trimStart();
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

  @media (max-width: 768px) {
    height: 100%;
  }
}
</style>