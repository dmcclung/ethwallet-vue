<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div>
      <input class="textinput-style" v-model="password" type="password" />
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
