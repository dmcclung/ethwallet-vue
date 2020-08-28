<template>
  <div>
    <!-- View / send / receive ERC20 tokens from list
            View / send / receive Eth
            Most importantly figure out custodial key and notification system for 
    guardians to whitelist what they can see and receive / send -->

    <!-- see account address, balance of eth and any supported tokens
    see button to send money-->
    <p>Address {{ address }}</p>
    <p>Balance {{ balance }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: "0",
      address: null
    };
  },
  methods: {
    /**
     * Remove reference to wallet making it only unlockable from
     * the keystore
     */
    lockWallet() {
      // TODO: if keystore exists and wallet is null,
      // show lock screen
      this.wallet = null;
    },

    async refreshBalance() {
      this.balance = await this.web3.eth.getBalance(this.address);
    }
  }
};
</script>
