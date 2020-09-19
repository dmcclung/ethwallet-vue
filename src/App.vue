<template>
  <div id="app">
    <div v-if="!encryptedWallet">
      <CreateWallet />
    </div>
    <div v-else-if="walletIsLocked">
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
  computed: {
    encryptedWallet() {
      return this.$store.getters.encryptedPrivateKey;
    },

    walletIsLocked() {
      return this.$store.getters.privateKey == null;
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

.error {
  color: #d8000c;
  background-color: #ffd2d2;
  margin: 10px 22px;
  font-size: 2em;
  vertical-align: middle;
}

.code-text {
  display: block;
  font-family: monospace;
  font-size: 20px;
}

.box-style {
  display: flex;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  color: rgb(15, 42, 67);
  border: 1px solid rgb(221, 221, 221);
  max-width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
}

.descriptive-text {
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
  line-height: 26px;
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
  font-family: monospace;
  font-size: 20px;
}

.passwordinput-style {
  line-height: 20px;
  width: 400px;
  height: 50px;
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
  font-size: 14px;
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

.action-text {
  font-family: "Maison Neue", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  letter-spacing: normal;
  color: rgb(15, 42, 67);
  margin: 0px;
  display: block;
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
