<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <p class="action-text">Enter the mnemonic from the previous step.</p>
      <textarea class="textarea-style" v-model="challengeMnemonic" />
    </div>
    <div>
      <button class="rainbow-button" @click="challenge">Challenge</button>
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
      challengeMnemonicWords: []
    };
  },
  methods: {
    challenge() {
      if (this.challengeMnemonic === this.$store.state.mnemonic) {
        // Clear any errors
        this.error = "";

        this.$emit(
          "create-wallet-event",
          CreateWalletSteps.SET_KEYSTORE_PASSWORD
        );
      } else {
        this.error = "Challenge failed";
      }
    }
  },
  computed: {
    challengeMnemonic: {
      get: function() {
        return this.challengeMnemonicWords.join(" ");
      },
      set: function(text) {
        this.challengeMnemonicWords = text.trim().split(" ");
      }
    }
  }
};
</script>
