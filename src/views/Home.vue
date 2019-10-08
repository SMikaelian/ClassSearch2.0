<template>
  <div class="home">

   
    
    <Result />
    

    
    <LandingPage msg="Class Search 2.0" />
   

  </div>
</template>

<script>
// @ is an alias to /src

import LandingPage from "@/components/LandingPage.vue";


import Result from "@/components/Result.vue";
export default {
  name: "home",
  components: {

     Result,

    LandingPage

  }
};
</script>
