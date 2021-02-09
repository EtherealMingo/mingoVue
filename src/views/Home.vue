<template>
  <div class="home">
    <Search></Search>
    <Subnav></Subnav>
    <Comment></Comment>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";
import Subnav from "@/components/Subnav";
import Comment from "@/components/Comment";

export default {
  name: "Home",
  components: {
    Search,
    Subnav,
    Comment,
  },
};
</script>
<style scode>
</style>
