<template>
  <div id="app">
    <header class="header-style">Ethereum Wallet</header>
    <div style="width:895px; margin: 0 auto">
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
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
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
  font-family: monospace;
  font-size: 20px;
}

.box-style {
  display: flex;
  background: rgb(255, 255, 255);
  color: rgb(15, 42, 67);
  border: 1px solid rgb(221, 221, 221);
  max-width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
}

.header-style {
  background-image: linear-gradient(
    to right,
    rgb(253, 204, 211),
    rgb(252, 160, 154),
    rgb(255, 204, 158),
    rgb(152, 221, 173),
    rgb(129, 215, 236),
    rgb(160, 170, 237)
  );
  display: flex;
  padding: 12px 12px 12px 24px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  line-height: 33px;
  font-size: 18px;
}

.chooser-style {
  display: flex;
  justify-content: space-evenly;
}

.container-style {
  border: 1px solid rgb(114, 117, 119);
  width: 388px;
  height: 278px;
  padding: 48px;
  border-radius: 6px;
  margin: 10px;
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
  width: 500px;
  margin-left: 20px;
  margin-top: 20px;
}

.textinput-style {
  line-height: 26px;
  width: 300px;
  color: rgb(68, 68, 68);
  background-color: rgb(253, 252, 254);
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
  font-family: monospace;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
}

.rainbow-button {
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
  width: 250px;
  font-size: 18px;
  margin: 10px;
}

.small-button {
  font-family: "Maison Neue",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  margin: 0px 30px 0px 0px;
  border-radius: 4px;
  display: block;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  background: transparent;
  color: rgb(68, 68, 68);
  padding: 12px 24px;
  line-height: 24px;
  font-size: 12px;
  border: 1px solid;
  font-weight: 500;
}

.chooser-button {
  width: 250px;
}

.chooser-description {
  font-size: 14px;
  height: 100px;
  margin-top: 5px;
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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
