<template>
  <div>
    <div>
      <p style="margin-top: 20px" class="action-text">Enter wallet password</p>
      <input style="margin: 10px" class="textinput-style" v-model="password" type="password" />
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
