<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
*{
  font-size: 13px;
  margin: 0;
  padding: 0;
}
html,body,#app{
  height: 100%;
}
</style>