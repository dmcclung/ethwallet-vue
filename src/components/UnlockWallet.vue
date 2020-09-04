<template>
  <div>
    <!-- prompt for password to unlock -->
    <input class="passwordinput-style" v-model="password" type="password" />
    <button class="button-style" @click="unlockWallet">Unlock</button>
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
