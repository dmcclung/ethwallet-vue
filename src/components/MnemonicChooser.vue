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
      <button @click="createEvent">Create wallet</button>
    </div>
    <div>
      <p>Or recreate your wallet from a mnemonic that you recorded previously.</p>
      <p>This wallet could have been created outside this application.</p>
      <button @click="importEvent">Import wallet</button>
    </div>
  </div>
</template>

<script>
import { CreateWalletEvents } from "../events.js";

export default {
  methods: {
    importEvent() {
      this.$emit("create-wallet-event", CreateWalletEvents.IMPORT_MNEMONIC);
    },

    createEvent() {
      this.$emit("create-wallet-event", CreateWalletEvents.CREATE_MNEMONIC);
    }
  }
};
</script>