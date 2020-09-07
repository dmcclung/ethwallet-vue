<template>
  <div>
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
      // TODO: Determine optimum settings (entropy etc)
      this.mnemonic = await bip39.generateMnemonic();
    }
  }
};
</script>
