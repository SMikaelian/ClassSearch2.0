<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LandingPage msg="Class Search 2.0" />
    <p>Howdy</p>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "home",
  components: {
    LandingPage
  }
};
</script>


/*
how to use:
1) generate the URI
2) provide the data:
3) show the results */