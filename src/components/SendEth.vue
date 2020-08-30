<template>
  <div>
    <p>gas price: {{gasPrice}}</p>
    <p>
    <div>
      <input v-model="receiverAddress" placeholder="Receiver Address" />
      <input v-model="value" placeholder="Value" />
      <input v-model="data" placeholder="Data" />
      <input v-model="gasLimit" placeholder="Gas Limit" />
      <button @click="sendEth">Send Eth</button>
    </div>
  </div>
</template>

<script>
import { Transaction as EthTx } from "ethereumjs-tx";

export default {
  props: ["web3", "wallet", "chain"],
  data() {
    return {
      /**
       * Address of receiver in current eth transaction
       */
      receiverAddress: null,

      /**
       * Value to be sent in current eth transaction
       */
      value: "0",

      /**
       * Hex encoded string data to send in current eth transaction
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
  created() {
      const updateGasPrice = async () => {
          this.gasPrice = await this.web3.eth.getGasPrice();
      };
      updateGasPrice();
  },
  methods: {
    async sendEth() {
      // TODO: how do we track nonce?      
      const txParams = {
        nonce: this.web3.utils.utf8ToHex(`${this.$store.state.nonce}`),
        gasPrice: this.web3.utils.utf8ToHex(this.gasPrice),
        gasLimit: this.web3.utils.utf8ToHex(this.gasLimit),
        to: this.receiverAddress,
        value: this.web3.utils.utf8ToHex(this.value),
        data: this.web3.utils.utf8ToHex(this.data)
      };

      const tx = new EthTx(txParams, { chain: this.chain });
      tx.sign(this.wallet.getPrivateKey());
      const serializedTx = tx.serialize();
      this.web3.eth.sendTransaction(serializedTx);

      this.$store.state.nonce = this.$store.state.nonce + 1;
    }
  }
};
</script>
