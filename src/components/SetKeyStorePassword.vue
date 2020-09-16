<template>
  <div>
    <div>
      <p class="action-text">Enter wallet password</p>
      <input class="passwordinput-style" v-model="password" type="password" />
    </div>
    <div>
      <button class="button-style" @click="createHdWallet">
        Create HD wallet
      </button>
    </div>
  </div>
</template>

<script>
import { hdkey as HDKey } from "ethereumjs-wallet";
import * as bip39 from "bip39";
import passworder from "browser-passworder";

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    async createHdWallet() {
      const seed = await bip39.mnemonicToSeed(
        this.$store.state.mnemonic,
        this.password
      );

      const hdkey = HDKey.fromMasterSeed(seed);
      const hdWallet = hdkey.getWallet();
      const encryptedWallet = await passworder.encrypt(this.password, hdWallet);
      this.$store.commit({
        type: "setEncryptedWallet",
        encryptedWallet: encryptedWallet
      });
      this.$store.commit({ type: "setWallet", wallet: hdWallet });
      this.$store.commit("clearMnemonic");
    }
  }
};
</script>
