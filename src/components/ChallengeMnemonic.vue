<template>
  <div>
    <p>Enter the mnemonic from the previous step.</p>
    <textarea class="textarea-style" v-model="challengeMnemonic" />
  </div>
  <div>
    <button class="button-style" @click="challenge">Challenge</button>
  </div>
</template>

<script>
import { CreateWalletSteps } from "./CreateWalletSteps";

export default {
  data() {
    return {
      challengeMnemonic: ""
    };
  },
  methods: {
    challenge() {
      const modified = this.challengeMnemonic
        .trim()
        .split(" ")
        .join(" ");
      console.log(`modified: ${modified}`);
      console.log(`original: ${this.challengeMnemonic}`);
      if (modified === this.$store.state.mnemonic) {
        this.$emit(
          "create-wallet-event",
          CreateWalletSteps.SET_KEYSTORE_PASSWORD
        );
      } else {
        // TODO: use error notification
        // mnemonic needs to be stored as an array of words
        throw Error("Challenge failed");
      }
    }
  },
  computed() {
    return {
      mnemonic() {
        return this.$store.state.mnemonic;
      }
    };
  }
};
</script>
