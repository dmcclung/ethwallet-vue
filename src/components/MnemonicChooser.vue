<template>
  <div>
    <p>
      To start the fun, you need to create or import a wallet from what's called
      a mnemonic.
    </p>
    <p>
      A mnemonic is a series of words in a language of your choice that only you
      know.
    </p>
    <div>
      <p>Click this button to create a new mnemonic and wallet</p>
      <button @click="emitCreate">Create wallet</button>
    </div>
    <div>
      <p>Or recreate your wallet from a mnemonic that you recorded previously.</p>
      <p>This wallet could have been created outside this application.</p>
      <button @click="emitImport">Import wallet</button>
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
