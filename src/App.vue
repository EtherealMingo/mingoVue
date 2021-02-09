<template>
  <div id="app">
    <div>
      <Nav></Nav>
    </div>
    <Home></Home>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Home from "@/views/Home";
export default {
  components: {
    Nav,
    Home,
  },
};
</script>
<style>
</style>
