<template>
  <div class="flex flex-wrap w-full bg-black">
    <div class="mx-auto font-bold text-5xl py-1 text-white">
      <router-link to="/">Music Time</router-link>
    </div>
    <div class="navButton">
      <router-link to="/"> Add Items </router-link>
      <router-link></router-link>
      <router-link></router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
