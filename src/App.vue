<template>
  <div class="navBar">
    <div class="text-left font-bold text-3xl pl-5">
      <router-link to="/Home">Dashboard</router-link>
    </div>
    <div class="font-medium text-lg pb-2 text-right pr-5">
      <router-link to="/Edit">Add</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      guitarList: [],
      url: "http://localhost:5000/guitarList",
      id: "",
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
