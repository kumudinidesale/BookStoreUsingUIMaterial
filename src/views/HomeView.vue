<template>
<div>

<Header/>

  <HelloWorld />
</div>

</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Header from "../components/Header.vue"
export default {
  name: "HomeView",

  components: {
    HelloWorld,
    Header,

  },
};
</script>
