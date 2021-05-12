<template>
  <select v-model="$i18n.locale" class="form-control">
    <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">
      <span :class="`svg-icon icons-flag-${ lang }`"></span> {{ $t("definitions." + lang) }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'languageSwitcher',
  data () {
    return { langs: ['en', 'tr'] }
  }
}
</script>