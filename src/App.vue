<template>
  <div id="app">
    <!-- always show market prices in header with logo -->
    <!-- make build of vue app configurable and generic to support a wide variety of use cases -->

    <!-- if no keystore, that means a wallet doesn't exist and we need to setup -->
    <div v-if="!keyStoreExists()"></div>
    <!-- else if keystore exists in local storage but wallet is locked -->
    <div v-else-if="walletIsLocked()"></div>
    <!-- else wallet is ready -->
    <div v-else></div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
