<template>
  <div>
    <!-- prompt for password to unlock -->
    <input v-model="password" />
    <button v-on:click="unlockWallet">Unlock</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    unlockWallet() {
      this.$state.store.wallet = this.$state.store.v3KeyStore(this.password);
    }
  }
};
</script>
