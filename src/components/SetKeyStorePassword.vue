<template>
  <div>
    <div>
      <p class="action-text">Enter keystore password</p>
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
      const keystore = await hdWallet.toV3(this.password, { kdf: "pbkdf2" });
      this.$store.commit({ type: "setWallet", wallet: hdWallet });
      this.$store.commit({ type: "setKeystore", keystore: keystore });
    }
  }
};
</script>
