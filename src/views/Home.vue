<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Class Search 2.0" />
    <p>Howdy</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Filter from "@/components/Filter.vue";

export default {
  name: "home",
  components: {
    Filter
  }
};
</script>


/*
how to use:
1) generate the URI
2) provide the data:
3) show the results */