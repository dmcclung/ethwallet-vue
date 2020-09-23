<template>
  <div>
    <!-- View / send / receive ERC20 tokens from list
            View / send / receive Eth
            Most importantly figure out custodial key and notification system for 
    guardians to whitelist what they can see and receive / send-->

    <!-- see account address, balance of eth and any supported tokens
    see button to send money-->
    <p>Account {{ address }}</p>
    <button class="small-button" @click="lockWallet">Lock wallet</button>
    <button class="small-button" @click="clearWallet">Clear wallet</button>
    <button class="small-button" @click="copyAddress">Copy Address</button>
    <button class="small-button" @click="showQRCode = true">Show QR Code</button>

    <p>{{ balance }} Ξ</p>
    <button class="small-button" @click="showSend = true">Send</button>
    <send-eth v-if="showSend" @close="showSend = false" />
  </div>
</template>

<script>
import SendEth from "@/components/SendEth";
import Web3 from "web3";

const web3 = new Web3(
  "wss://ropsten.infura.io/ws/v3/8ecfbe01aa934fbd91737cb5be95623a"
);

let intervalId;

export default {
  components: {
    SendEth
  },
  data() {
    return {
      balance: "0",
      showSend: false,
      showQRCode: false
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    }
  },
  mounted() {
    intervalId = setInterval(async () => {
      this.balance = await web3.eth.getBalance(this.address);
    }, 5000);
  },
  unmounted() {
    clearInterval(intervalId);
  },
  methods: {
    lockWallet() {
      this.$store.commit("unsetPrivateKey");
    },
    clearWallet() {
      this.$store.dispatch("destroyWallet");
    }
  }
};
</script>
