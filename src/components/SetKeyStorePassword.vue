<template>
  <div>
    <!-- Prompt for password to secure keystore, if password is successful, create wallet -->
  </div>
</template>

<script>
import { hdkey as HDKey } from "ethereumjs-wallet";
import * as bip39 from "bip39";

export default {
  methods: {
    async createHdWallet(mnemonic, password) {
      const seed = await bip39.mnemonicToSeed(mnemonic);
      const hdkey = HDKey.fromMasterSeed(seed);
      this.wallet = hdkey.getWallet();
      this.address = this.wallet.getAddressString();
      this.v3KeyStore = this.wallet.toV3String(password);
    }
  }
};
</script>
