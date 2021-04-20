<template>
  <div class="navBar">
    <div class="text-left font-bold text-3xl pl-5">
      <router-link to="/Home">Dashboard</router-link>
      <span class="px-4 text-base font-normal">[Please click Dashboard]</span>
    </div>
    <div class="font-medium text-lg pb-2 text-right pr-5">
      <router-link to="/Add">Add User</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      employeeList: [],
      url: "http://localhost:5000/employeeList",
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
