<template>
  <div>
    <!-- View / send / receive ERC20 tokens from list
            View / send / receive Eth
            Most importantly figure out custodial key and notification system for 
    guardians to whitelist what they can see and receive / send-->

    <!-- see account address, balance of eth and any supported tokens
    see button to send money-->
    <div style="margin-top: 20px">
      <div style="display: inline">Account {{ address }}</div>
      <button
        style="display: inline; margin-left: 10px; margin-right: 10px"
        class="small-button"
        @click="copy"
      >
        Copy
      </button>
      <button
        style="display: inline"
        class="small-button"
        @click="showQRCode = true"
      >
        QR
      </button>
      <button
        style="display: inline; margin-right: 10px"
        class="small-button"
        @click="lockWallet"
      >
        Lock
      </button>
      <button style="display: inline" class="small-button" @click="clearWallet">
        Clear
      </button>
    </div>

    <div style="font-size: 32px; margin-top: 50px">{{ balance }} Ξ</div>
    <div style="display: flex; flex-direction: column; align-items: center">
      <button
        style="width: 200px; margin-top: 30px"
        class="small-button"
        @click="showSend = true"
      >
        Send
      </button>
    </div>
    <SendEth v-if="showSend" @close="showSend = false" />
    <ShowQRCode
      v-if="showQRCode"
      :address="$store.getters.address"
      @close="showQRCode = false"
    />
  </div>
</template>

<script>
import SendEth from "@/components/SendEth";
import ShowQRCode from "@/components/ShowQRCode";
import Web3 from "web3";

const web3 = new Web3(
  "wss://ropsten.infura.io/ws/v3/8ecfbe01aa934fbd91737cb5be95623a"
);

let intervalId;

export default {
  components: {
    SendEth,
    ShowQRCode
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
      const addressAsString = this.$store.getters.address;
      const shortAddress = `${addressAsString.substr(
        0,
        6
      )}...${addressAsString.substr(-4, 4)}`;
      return shortAddress;
    }
  },
  mounted() {
    intervalId = setInterval(async () => {
      const balanceWei = await web3.eth.getBalance(this.$store.getters.address);
      this.balance = web3.utils.fromWei(balanceWei);
    }, 5000);
  },
  unmounted() {
    clearInterval(intervalId);
  },
  methods: {
    async copy() {
      const result = await navigator.permissions.query({
        name: "clipboard-write"
      });
      if (result.state == "granted" || result.state == "prompt") {
        try {
          navigator.clipboard.writeText(this.$store.getters.address);
        } catch (e) {
          console.error("Error writing to clipboard");
        }
      } else {
        console.error("Failed to get clipboard permission");
      }
    },
    lockWallet() {
      this.$store.dispatch("lockWallet");
    },
    clearWallet() {
      this.$store.dispatch("destroyWallet");
    }
  }
};
</script>
