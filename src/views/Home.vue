<template>
  <div class="home">
    <img alt="" />
    <HelloWorld msg="Class Search 2.0" />
    <p>Nothing to see here.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Filters.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
