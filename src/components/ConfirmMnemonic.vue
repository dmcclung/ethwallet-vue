<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div v-if="error" class="error">{{ error }}</div>
    <div style="margin-top: 20px">
      <p class="action-text">Enter the mnemonic from the previous step.</p>
      <input style="margin-bottom: 20px; margin-top: 20px" class="textinput-style" v-model="confirmMnemonic" type="text" />
    </div>
    <div style="display: flex">
      <button style="height: 55px; margin-top: 10px" class="small-button" @click="back">Back</button>
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
    back() {
      this.error = "";
      this.$emit("create-wallet-event", CreateWalletSteps.CREATE_MNEMONIC);
    },
    confirm() {
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
