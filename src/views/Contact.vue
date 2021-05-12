<template>
  <section>
    <form
      @submit.prevent="submitForm"
      autocomplete="off"
      class="col-12 col-md-6 row"
    >
      <h2 class="col-12">{{ $t("definitions.login") }}</h2>

      <div class="form-group col-12 col-md-6">
        <label for="nameSurname">{{ $t("definitions.nameSurname") }}</label>
        <input
          v-model="form.nameSurname"
          v-on:input="removeSpace"
          v-bind:class="{
            error: $v.form.nameSurname.$error,
            valid: $v.form.nameSurname.$dirty && !$v.form.nameSurname.$invalid,
          }"
          type="text"
          class="form-control"
        />
        <p class="form-warning" v-if="!$v.form.nameSurname.alpha">{{ $t("formWarnings.nameSurname") }}</p>
        <p class="form-warning" v-if="!$v.form.nameSurname.nameSurnameLength">{{ $t("formWarnings.minLength") }}</p>
        <p class="form-warning" v-if="!$v.form.nameSurname.minLength">{{ $t("formWarnings.minLength") }}</p>
        <p class="form-warning" v-if="!$v.form.nameSurname.required">{{ $t("formWarnings.required") }}</p>
      </div>

      <div class="form-group col-12 col-md-6">
        <label for="mail">{{ $t("definitions.emailAdress") }}</label>
        <input
          v-model="form.mail"
          v-on:keydown="key"
          v-bind:class="{
            error: $v.form.mail.$error,
            valid: $v.form.mail.$dirty && !$v.form.mail.$invalid,
          }"
          inputmode="email"
          type="email"
          class="form-control"
        />
        <p class="form-warning" v-if="!$v.form.mail.email">{{ $t("formWarnings.wrongMail") }}</p>
        <p class="form-warning" v-if="!$v.form.mail.required">{{ $t("formWarnings.required") }}</p>
      </div>

      <div class="form-group col-12 col-md-6">
        <label for="phonenumber">{{ $t("definitions.phonenumber") }}</label>
        <the-mask
          name="phone"
          id="frmPhoneNumA"
          autocomplete="tel"
          mask="0(###) ### ## ##"
          placeholder="0(---) --- -- --"
          v-model="form.phonenumber"
          v-bind:class="{
            error: $v.form.phonenumber.$error,
            valid: $v.form.phonenumber.$dirty && !$v.form.phonenumber.$invalid,
          }"
          type="tel"
          class="form-control"
        />
        <p class="form-warning" v-if="!$v.form.phonenumber.required">{{ $t("formWarnings.required") }}</p>
        <p class="form-warning" v-if="!$v.form.phonenumber.minLength">{{ $t("formWarnings.wrongPhone") }}</p>
      </div>

      <div class="form-group col-12 col-md-6">
        <label for="password">{{ $t("definitions.password") }}</label>
        <input
          v-model="form.password"
          v-on:keydown="key"
          v-bind:class="{
            error: $v.form.password.$error,
            valid: $v.form.password.$dirty && !$v.form.password.$invalid,
          }"
          type="password"
          class="form-control"
        />
        <p class="form-warning" v-if="!$v.form.password.required">{{ $t("formWarnings.required") }}</p>
      </div>


      <div class="form-group col-12">
        <label for="password">{{ $t("formWarnings.selectCountry") }}</label>
        <multiselect 
          v-model="form.country" 
          :options="options" 
          :placeholder="$t('formWarnings.selectCountry')"
          :show-labels="false"
          label="name" 
          track-by="name"
          >
        </multiselect>
      </div>
      
      <div class="form-group col-12">
        <label for="message">{{ $t("definitions.message") }}</label>
        <textarea
          v-model="form.message"
          type="text"
          class="form-control"
          rows="5"
        ></textarea>
      </div>


      <button
        type="button"
        class="btn col-12 col-md-3 ml-auto"
        @click="submitForm"
      >
        {{ $t("definitions.send") }}
      </button>
    </form>
  </section>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { required, email, minLength, helpers } from "vuelidate/lib/validators";

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
  name: "Contact",
  components: {
    Multiselect
  },
  data() {
    return {
      options: [
        { id: 'tr', name: this.$t("countries.tr") },
        { id: 'en', name: this.$t("countries.en") },
        { id: 'us', name: this.$t("countries.us") },
        { id: 'de', name: this.$t("countries.de") },
        { id: 'se', name: this.$t("countries.se") },
        { id: 'ke', name: this.$t("countries.ke") },
        { id: 'br', name: this.$t("countries.br") }
      ],
      form: {
        nameSurname: "",
        mail: "",
        phonenumber: "",
        password: "",
        message: "",
        country: ""
      },
    };
  },
  validations: {
    form: {
      nameSurname: {
        required,
        nameSurnameLength,
        minLength: minLength(2),
        alpha: helpers.regex(
          "alpha",
          /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i
        ),
      },
      mail: {
        required,
        email: email,
      },
      phonenumber: {
        required,
        minLength: minLength(10),
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
    submitForm() {
      this.$v.$touch();
      if (!this.$v.form.$invalid) {
        this.$store.commit("_isLoggedIn", true);
        this.$store.commit("_userInfo", this.$v.form.$model);
        console.log("Form value: ", this.$v.form.$model);
      } else {
        // console.log("not valid", this.$v.form);
      }
    },
    removeSpace: function(event) {
      this.form.nameSurname = this.form.nameSurname
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>