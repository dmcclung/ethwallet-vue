<template>
  <div>
    <span class="descriptive-text">
      To start the fun, you need to create or import a wallet from what's called
      a mnemonic. A mnemonic is a series of words in a language of your choice
      that only you know. Once you create a mnemonic and generate a wallet from
      it, you can recreate your wallet with only the mnemonic. Keep it safe in a
      secure password manager or offline.
    </span>
    <p class="action-text">
      Click the button below to create a mnemonic. Once created, store it
      safely.
    </p>
    <div class="box-style">
      <p class="code-text">{{ mnemonic }}</p>
    </div>
    <button class="button-style" @click="createMnemonic">
      Create Mnemonic
    </button>
    <button class="button-style" @click="save">Save</button>
  </div>
</template>

<script>
import * as bip39 from "bip39";
import { CreateWalletSteps } from "./CreateWalletSteps";

export default {
  emits: ["create-wallet-event"],
  data() {
    return {
      mnemonic: ""
    };
  },
  methods: {
    save() {
      this.$store.commit({ type: "setMnemonic", mnemonic: this.mnemonic });
      this.$emit("create-wallet-event", CreateWalletSteps.CHALLENGE_MNEMONIC);
    },

    async createMnemonic() {
      // TODO: Determine optimum settings
      this.mnemonic = await bip39.generateMnemonic();
    }
  }
};
</script>
