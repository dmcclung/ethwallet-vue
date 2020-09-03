<template>
  <div>
    <!-- View / send / receive ERC20 tokens from list
            View / send / receive Eth
            Most importantly figure out custodial key and notification system for 
    guardians to whitelist what they can see and receive / send-->

    <!-- see account address, balance of eth and any supported tokens
    see button to send money-->
    <p>Address {{ address }}</p>
    <p>Balance {{ balance }}</p>
    <button class="button-style" @click="lockWallet">Lock wallet</button>
    <send-eth :web3="web3" chain="ropsten" :wallet="$store.state.wallet" />
  </div>
</template>

<script>
import SendEth from "@/components/SendEth";
import Web3 from "web3";

let intervalId;

export default {
  components: {
    SendEth
  },
  data() {
    return {
      balance: "0",
      address: this.$store.state.wallet.getAddressString(),
      web3: new Web3(
        "wss://ropsten.infura.io/ws/v3/8ecfbe01aa934fbd91737cb5be95623a"
      )
    };
  },
  mounted() {
    intervalId = setInterval(async () => {
      this.balance = await this.web3.eth.getBalance(this.address);
    }, 5000);
  },
  unmounted() {
    clearInterval(intervalId);
  },
  methods: {
    /**
     * Remove reference to wallet making it only unlockable from
     * the keystore
     */
    lockWallet() {
      this.$store.state.wallet = null;
    }
  }
};
</script>
