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
      const privateKey = await passworder.decrypt(
        this.password,
        this.$store.getters.encryptedPrivateKey
      );
      this.$store.commit({ type: "setPrivateKey", privateKey: privateKey });
    }
  }
};
</script>
