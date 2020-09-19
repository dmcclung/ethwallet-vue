<template>
  <div>
    <p>gas price: {{ gasPrice }}</p>
    <div>
      <input v-model="receiverAddress" placeholder="Receiver Address" />
      <input v-model="value" placeholder="Value" />
      <input v-model="data" placeholder="Data" />
      <input v-model="gasLimit" placeholder="Gas Limit" />
      <button class="button-style" @click="sendEth">Send</button>
    </div>
  </div>
</template>

<script>
import { Transaction as EthTx } from "ethereumjs-tx";
import Web3 from "web3";

const web3 = new Web3(
  "wss://ropsten.infura.io/ws/v3/8ecfbe01aa934fbd91737cb5be95623a"
);

export default {
  name: "send-eth",
  data() {
    return {
      /**
       * Network chain
       */
      chain: "ropsten",

      /**
       * Address of receiver in current eth transaction
       */
      receiverAddress: null,

      /**
       * Wei value to be sent in current eth transaction
       */
      value: "0",

      /**
       * String data to send in current eth transaction
       */
      data: "",

      /**
       * Gas limit
       */
      gasLimit: "",

      /**
       * Gas price
       */
      gasPrice: ""
    };
  },
  mounted() {
    const updateGasPrice = async () => {
      this.gasPrice = await web3.eth.getGasPrice();
    };
    updateGasPrice();
  },
  methods: {
    async sendEth() {
      // you probably don't need a requirement for gas price
      // only specify gas price if user wants to pay more or less
      if (this.gasPrice === "") {
        throw new Error("Need gas price to send eth");
      }

      if (this.receiverAddress === null) {
        throw new Error("Receiver address required");
      }

      const hex = txParam => {
        return web3.utils.utf8ToHex(txParam);
      };

      // contract creation is not supported, so we require a 'to'
      // TODO: how to track nonce
      // You may not need the hex explicit formatting
      const txParams = {
        nonce: 0,
        gasPrice: hex(this.gasPrice),
        gasLimit: hex(this.gasLimit),
        to: this.receiverAddress,
        value: hex(this.value),
        data: hex(this.data)
      };

      const tx = new EthTx(txParams, { chain: this.chain });
      tx.sign(this.$store.getters.privateKey());
      const serializedTx = tx.serialize();
      web3.eth.sendTransaction(serializedTx);
    }
  }
};
</script>
