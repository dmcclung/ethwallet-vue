<template>
  <div>
    <!-- ask user to re enter words to make sure they have the mnemonic correct -->
    <p>Enter the mnemonic from the previous step.</p>
    <textarea v-model="challengeMnemonic" />
    <button @click="challenge">Challenge</button>
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
      if (this.challengeMnemonic === this.$store.state.mnemonic) {
          this.$emit('create-wallet-event', CreateWalletSteps.SET_KEYSTORE_PASSWORD);
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