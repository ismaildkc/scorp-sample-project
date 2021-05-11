<template>
  <section class="page-container">
    <div>
      <h1>Some of our finest work</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        iusto molestias accusamus rem nobis est, et laborum harum doloremque
        nemo non, minima quos totam labore maxime iste alias ut esse? Repellat
        eaque reiciendis laboriosam corporis fuga vero ratione veritatis
        numquam, libero magni voluptatum omnis molestiae officiis exercitationem
        qui quidem nam.
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

<style lang="scss">
.portfolio {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.portfolio .item {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 5px;
}

.portfolio .item img {
  width: 100%;
  height: 100%;
}

.portfolio .item .action {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.portfolio .item .action a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 15px;
}

.portfolio .item .action:hover {
  opacity: 1;
}

</style>