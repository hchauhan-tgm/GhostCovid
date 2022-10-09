<template>
    <div id="app">
      <!--<Header />-->
      <router-view />
      <!--<Footer />-->
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav a {
  font-weight: bold;
  color: #a35152;
}

#nav a.router-link-exact-active {
  color: #a35152;
}
</style>
