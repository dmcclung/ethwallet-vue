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
  background-image: linear-gradient(
    to right bottom,
    rgb(254, 242, 244),
    rgb(253, 204, 211)
  );
}

.text-style {
  font-family: "Maison Neue", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
  letter-spacing: normal;
  font-size: 22px;
  line-height: 28px;
  color: rgb(15, 42, 67);
  display: block;
}

.textarea-style {
  font-size: 18px;
  line-height: 24px;
  width: 500px;
  height: 110px;
  color: rgb(68, 68, 68);
  padding-left: 10px;
  box-sizing: border-box;
  background-color: rgb(253, 252, 254);
  border-radius: 3px 0px 0px 3px;
  appearance: textfield;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  border-left: 1px solid rgb(221, 221, 221);
  border-image: initial;
  border-right: none;
  display: inline-flex;
}

.button-style {
  background-image: linear-gradient(
    to right,
    rgb(253, 204, 211),
    rgb(252, 160, 154),
    rgb(255, 204, 158),
    rgb(152, 221, 173),
    rgb(129, 215, 236),
    rgb(160, 170, 237)
  );
  padding: 15px;
  width: 300px;
  font-size: 18px;
  margin: 10px;
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
