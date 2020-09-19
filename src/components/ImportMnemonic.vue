<template>
  <div>
    <div>
      <p class="action-text">Enter mnemonic</p>
      <textarea class="textarea-style" v-model="mnemonic" />
    </div>
    <button class="button-style" @click="importMnemonic">
      Import Mnemonic
    </button>
  </div>
</template>

<script>
import { CreateWalletSteps } from "./CreateWalletSteps";

export default {
  emits: ["create-wallet-event"],
  data() {
    return {
      mnemonic: ""
    };
  },
  methods: {
    importMnemonic() {
      this.$store.commit({
        type: "setMnemonic",
        mnemonic: this.mnemonic.trim()
      });
      this.$emit(
        "create-wallet-event",
        CreateWalletSteps.SET_KEYSTORE_PASSWORD
      );
    }
  }
};
</script>
