<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <p class="action-text">Enter the mnemonic from the previous step.</p>
      <input class="textinput-style" v-model="confirmMnemonic" type="text" />
    </div>
    <div>
      <button class="small-button" @click="back">Back</button>
      <button class="rainbow-button" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script>
import { CreateWalletSteps } from "./CreateWalletSteps";

export default {
  emits: ["create-wallet-event"],
  data() {
    return {
      error: "",
      confirmMnemonicWords: []
    };
  },
  methods: {
    challenge() {
      if (this.confirmMnemonic === this.$store.state.mnemonic) {
        // Clear any errors
        this.error = "";

        this.$emit(
          "create-wallet-event",
          CreateWalletSteps.SET_KEYSTORE_PASSWORD
        );
      } else {
        this.error = "Mnemonic words did not match";
      }
    }
  },
  computed: {
    confirmMnemonic: {
      get: function() {
        return this.confirmMnemonicWords.join(" ");
      },
      set: function(text) {
        this.confirmMnemonicWords = text.trim().split(" ");
      }
    }
  }
};
</script>
