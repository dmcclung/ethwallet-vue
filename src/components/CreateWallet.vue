<template>
  <div>
    <!-- prompt for recovery from mnemonic or create from new (import or create)
      if import, ask for mnemonic and password, create wallet
      if create, show a new mnemonic, challenge copy of mnemonic, 
      also ask for password to set keystore string in local storage -->
    <p>Create or import a wallet</p>
    <button v-on:click="createHdWallet">Create Wallet</button>
    <button v-on:click="importWallet">Import Wallet</button>
  </div>
</template>

<script>
import * as bip39 from "bip39";
import { hdkey as HDKey } from "ethereumjs-wallet";

export default {
  methods: {
    async createHdWallet(mnemonic, password) {
      const seed = await bip39.mnemonicToSeed(mnemonic);
      const hdkey = HDKey.fromMasterSeed(seed);
      this.wallet = hdkey.getWallet();
      this.address = this.wallet.getAddressString();
      this.v3KeyStore = this.wallet.toV3String(password);
    },

    /**
     * Generates a new mnemonic
     */
    generateMnemonic() {
      // This needs more work on entropy and settings
      // TODO: show mnemonic temporarily, do not store
      return bip39.generateMnemonic();
    }
  }
};
</script>
