<template>
  <div id="app">
    <div v-if="!keyStoreExists()">
      <CreateWallet />
    </div>
    <div v-else-if="walletIsLocked()">
      <UnlockWallet />
    </div>
    <div v-else>
      <ViewWallet />
    </div>
  </div>
</template>

<script>
import CreateWallet from "@/components/CreateWallet";
import ViewWallet from "@/components/ViewWallet";
import UnlockWallet from "@/components/UnlockWallet";

export default {
  methods: {
    keyStoreExists() {
      return this.$store.state.v3KeyStore != null;
    },

    walletIsLocked() {
      return this.$store.state.wallet == null;
    }
  },
  components: {
    CreateWallet,
    ViewWallet,
    UnlockWallet
  }
};
</script>

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
