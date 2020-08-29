<template>
  <div>
    <!-- Prompt for password to secure keystore, if password is successful, create wallet -->
    <!-- password type needed for input -->
    <p>Enter keystore password</p>
    <input v-model="password" />
    <button @click="createHdWallet">Create HD wallet</button>
  </div>
</template>

<script>
import { hdkey as HDKey } from "ethereumjs-wallet";
import * as bip39 from "bip39";

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    async createHdWallet() {
      const seed = await bip39.mnemonicToSeed(this.$store.state.mnemonic);
      const hdkey = HDKey.fromMasterSeed(seed);
      this.$store.state.wallet = hdkey.getWallet();
      this.$store.state.v3KeyStore = this.$store.state.wallet.toV3String(
        this.password
      );
    }
  }
};
</script>
