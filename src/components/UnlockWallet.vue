<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <p style="margin-top: 20px" class="action-text">Enter wallet password</p>
      <input style="margin: 10px" class="textinput-style" v-model="password" type="password" />
    </div>
    <div>
      <button class="rainbow-button" @click="unlockWallet">Unlock</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      error: ""
    };
  },
  methods: {
    unlockWallet() {
      this.$store.dispatch("unlockWallet", { password: this.password });
    }
  }
};
</script>
