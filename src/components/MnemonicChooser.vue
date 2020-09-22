<template>
  <div style="margin-top: 20px; width:895px">
    <p class="action-text">New to Ethereum?</p>
    <div class="chooser-style">
      <div class="container-style">
        <div>Yes, help me create a wallet</div>
        <div class="chooser-description">
          This will create a new mnemonic and wallet
        </div>
        <div>
          <button class="button-style chooser-button" @click="emitCreate">
            Create wallet
          </button>
        </div>
      </div>
      <div class="container-style">
        <div>No, I already have a mnemonic</div>
        <div class="chooser-description">
          Recreate a wallet from a mnemonic you recorded previously from this or
          another application
        </div>
        <button class="button-style chooser-button" @click="emitImport">
          Import wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateWalletSteps } from "./CreateWalletSteps.js";

export default {
  methods: {
    emitImport() {
      this.$emit("create-wallet-event", CreateWalletSteps.IMPORT_MNEMONIC);
    },

    emitCreate() {
      this.$emit("create-wallet-event", CreateWalletSteps.CREATE_MNEMONIC);
    }
  }
};
</script>
