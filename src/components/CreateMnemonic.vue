<template>
  <div style="display: flex; flex-direction: row; margin-top: 20px">
    <div style="margin-top: 20px">
      <div class="action-text">
        Click the button below to create a mnemonic. Once created, store it safely.
      </div>
      <div class="box-style">
        <p style="width: 520px; height: 75px" class="code-text">{{ mnemonic }}</p>
      </div>
      <div style="display: flex">
        <button class="rainbow-button" @click="createMnemonic">
          Create Mnemonic
        </button>
        <button class="rainbow-button" @click="save">Save</button>
      </div>
    </div>
    <div class="descriptive-text">
      To start the fun, you need to create a wallet from what's called
      a mnemonic. A mnemonic is a series of words in a language of your choice
      that only you know. Once you create a mnemonic and generate a wallet from
      it, you can recreate your wallet with only the mnemonic. Keep it safe in a
      secure password manager or offline.
    </div>
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
      this.$emit("create-wallet-event", CreateWalletSteps.CONFIRM_MNEMONIC);
    },

    async createMnemonic() {
      // TODO: Determine optimum settings
      this.mnemonic = await bip39.generateMnemonic();
    }
  }
};
</script>
