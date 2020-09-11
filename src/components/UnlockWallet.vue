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
import passworder from "browser-passworder";

export default {
  data() {
    return {
      password: "",
      error: ""
    };
  },
  methods: {
    async unlockWallet() {
      const wallet = await passworder.decrypt(
        this.password,
        this.$store.state.encryptedWallet
      );
      this.$store.commit({ type: "setWallet", wallet: wallet });
    }
  }
};
</script>
