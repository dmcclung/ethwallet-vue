<template>
  <div>
    <span class="descriptive-text">
      To start the fun, you need to create or import a wallet from what's called
      a mnemonic. A mnemonic is a series of words in a language of your choice
      that only you know. Once you create a mnemonic and generate a wallet from
      it, you can recreate your wallet with only the mnemonic. Keep it safe in a
      secure password manager or offline.
    </span>
    <div style="margin-top: 20px">
      <p class="action-text">
        Click the buttons below to create a new mnemonic and wallet or recreate
        a wallet from a mnemonic you recorded previously from this or another
        application.
      </p>
      <button class="button-style" @click="emitCreate">Create wallet</button>
      <button class="button-style" @click="emitImport">Import wallet</button>
    </div>
  </div>
</template>

<script>
import { CreateWalletSteps } from "./CreateWalletSteps.js";

export default {
  methods: {
    emitImport() {
      this.$emit("create-wallet-event", CreateWalletSteps.IMPORT_MNEMONIC);
    },

    emitCreate() {
      this.$emit("create-wallet-event", CreateWalletSteps.CREATE_MNEMONIC);
    }
  }
};
</script>
