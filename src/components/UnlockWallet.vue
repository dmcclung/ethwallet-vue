<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <input class="passwordinput-style" v-model="password" type="password" />
    </div>
    <div>
      <button class="button-style" @click="unlockWallet">Unlock</button>
    </div>
  </div>
</template>

<script>
import Wallet from "ethereumjs-wallet";

export default {
  data() {
    return {
      password: "",
      error: ""
    };
  },
  methods: {
    async unlockWallet() {
      console.log(`${this.$store.state.v3KeyStore}`);
      const wallet = await Wallet.fromV3(
        this.$store.state.v3KeyStore,
        this.password
      );
      this.$store.commit({ type: "setWallet", wallet: wallet });
    }
  }
};
</script>
