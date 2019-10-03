<template>
  <div class="filters">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Filters msg="Class Search 2.0" />
    <p>Howdy</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from "@/components/Filters.vue";



export default {
  name: "filters",
  components: {
    Filters
  }
};
</script>
