<template>
  <div>
    <p class="text-style">Click the button below to create a mnemonic. Once created, record it on paper or another secure location.</p>
    <p class="text-style">{{mnemonic}}</p>
    <button class="button-style" @click="createMnemonic">Create Mnemonic</button>
    <button class="button-style" @click="save">Save</button>
  </div>
</template>

<script>
import * as bip39 from "bip39";
import { CreateWalletSteps } from "./CreateWalletSteps";

export default {
  data() {
    return {
      mnemonic: ""
    };
  },
  methods: {
    save() {
      this.$store.state.mnemonic = this.mnemonic;
      this.$emit("create-wallet-event", CreateWalletSteps.CHALLENGE_MNEMONIC);
    },

    async createMnemonic() {
      // TODO: Determine optimum settings (entropy etc)
      this.mnemonic = await bip39.generateMnemonic();
    }
  }
};
</script>