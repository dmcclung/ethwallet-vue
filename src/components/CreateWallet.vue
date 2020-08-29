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

import { CreateWalletSteps } from "./CreateWalletSteps.js";

const keyedComponents = new Map();
keyedComponents.set(CreateWalletSteps.MNEMONIC_CHOOSER, MnemonicChooser);
keyedComponents.set(CreateWalletSteps.CREATE_MNEMONIC, CreateMnemonic);
keyedComponents.set(CreateWalletSteps.IMPORT_MNEMONIC, ImportMnemonic);
keyedComponents.set(CreateWalletSteps.CHALLENGE_MNEMONIC, ChallengeMnemonic);
keyedComponents.set(CreateWalletSteps.SET_KEYSTORE_PASSWORD, SetKeyStorePassword);

// MnemonicChooser -> CreateMnemonic -> ChallengeMnemonic -> SetKeyStorePassword
//                 -> ImportMnemonic -> SetKeyStorePassword

export default {
  data() {
    return {
      currentStep: CreateWalletSteps.MNEMONIC_CHOOSER
    };
  },
  methods: {
    onCreateWalletEvent(type) {
      if (!keyedComponents.has(type)) {
        throw new Error(`Unknown type: ${type}`);
      }
      this.currentStep = type;
    }
  },
  computed: {
    currentStepComponent() {
      return keyedComponents.get(this.currentStep);
    }
  }
};
</script>
