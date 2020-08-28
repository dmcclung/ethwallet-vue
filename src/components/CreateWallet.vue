<template>
  <div>
    <component @create-wallet-event="onCreateWalletEvent" :is="currentStepComponent"></component>
  </div>
</template>

<script>
import CreateMnemonic from "@/components/CreateMnemonic";
import ImportMnemonic from "@/components/ImportMnemonic";
import MnemonicChooser from "@/components/MnemonicChooser";
import ChallengeMnemonic from "@/components/ChallengeMnemonic";
import SetKeyStorePassword from "@/components/SetKeyStorePassword";

import { CreateWalletEvents } from "../events.js";

// MnemonicChooser -> CreateMnemonic -> ChallengeMnemonic -> SetKeyStorePassword
//                 -> ImportMnemonic -> SetKeyStorePassword

export default {
  data() {
    return {
      currentStep: MnemonicChooser
    };
  },
  methods: {
    onCreateWalletEvent(type) {
      if (type === CreateWalletEvents.CREATE_MNEMONIC) {
        this.currentStep = CreateMnemonic;
      } else if (type === CreateWalletEvents.IMPORT_MNEMONIC) {
        this.currentStep = ImportMnemonic;
      } else if (type === CreateWalletEvents.CHALLENGE_MNEMONIC) {
        this.currentStep = ChallengeMnemonic;
      } else if (type === CreateWalletEvents.SET_KEYSTORE_PASSWORD) {
        this.currentStep = SetKeyStorePassword;
      } else {
        throw new Error(`Unknown create-wallet-event type: ${type}`);
      }
    }
  },
  computed: {
    currentStepComponent() {
      return this.currentStep;
    }
  }
};
</script>
