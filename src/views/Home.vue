<template>
  <div class="home">
    <img alt="CSUN Logo" src="../assets/logo.jpg" width="40%" />
    <LandingPage msg="Class Search 2.0" />
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
