<template>
  <div>
    <!-- Create a new mnemonic with explanation of what it is and how to store it -->
  </div>
</template>

<script>
import * as bip39 from "bip39";

export default {
  methods: {
    /**
     * Generates a new mnemonic
     */
    generateMnemonic() {
      // This needs more work on entropy and settings
      // TODO: show mnemonic temporarily, do not store
      return bip39.generateMnemonic();
    }
  }
};
</script>