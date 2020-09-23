<template>
  <div>
    <div>
      <p class="action-text">Enter wallet password</p>
      <input class="textinput-style" v-model="password" type="password" />
    </div>
    <div>
      <button class="rainbow-button" @click="createHdWallet">
        Create wallet
      </button>
    </div>
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
    async createHdWallet() {
      this.$store.dispatch("createWallet", {
        mnemonic: this.$store.getters.mnemonic,
        password: this.password
      });
    }
  }
};
</script>
