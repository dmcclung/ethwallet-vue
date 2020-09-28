<template>
  <div style="margin-top: 20px width:895px">
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <p class="action-text">Import wallet with mnemonic</p>
      <p>Enter your secret mnemonic phrase to import your wallet</p>
      <div class="div-style">
        <div style="margin: 5px">Mnemonic</div>
        <input class="textinput-style" v-model="mnemonic" type="text" />
      </div>
      <div class="div-style">
        <div style="margin: 5px">New password (min 8 chars)</div>
        <input class="textinput-style" v-model="password" type="password" />
      </div>
      <div class="div-style">
        <div style="margin: 5px">Confirm password</div>
        <input class="textinput-style" v-model="confirmation" type="password" />
      </div>
      <button class="rainbow-button" @click="importMnemonic">Import</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      mnemonic: "",
      password: "",
      confirmation: ""
    };
  },
  methods: {
    importMnemonic() {
      if (!this.password || this.password != this.confirmation) {
        this.error = "Passwords do not match";
        return;
      } else {
        this.error = "";
      }

      this.$store.dispatch("createWallet", {
        mnemonic: this.mnemonic.trim(),
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.div-style {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
