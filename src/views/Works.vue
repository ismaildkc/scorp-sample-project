<template>
  <section class="page-container">
    <div>
      <h1>{{ $t("worksPage.title") }}</h1>
      <p>
        {{ $t("worksPage.desc") }}
      </p>
    </div>
    
    <CardWork :workInfo="workInfo"/>
  </section>
</template>
<script>
import CardWork from "@/components/CardWork";

export default {
  name: "Works",
  components: {
    CardWork
  },
  data(){
    return{
      workInfo: [
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
        {
          brand: "Lorem 1",
          title: "Lorem 2",
          img: "https://via.placeholder.com/500"
        },
      ]
    }
  }
}
</script>