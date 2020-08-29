<template>
  <div>
    <div>
      <input v-model="receiverAddress" placeholder="Receiver Address" />
      <input v-model="value" placeholder="Value" />
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
      value: "0"
    };
  },
  methods: {
    async sendEth() {
      const txParams = {
        nonce: "0x00",
        gasPrice: "0x09184e72a000",
        gasLimit: "0x2710",
        to: this.receiverAddress,
        value: this.value,
        data:
          "0x7f7465737432000000000000000000000000000000000000000000000000000000600057"
      };

      const tx = new EthTx(txParams, { chain: this.chain });
      tx.sign(this.wallet.getPrivateKey());
      const serializedTx = tx.serialize();
      this.web3.eth.sendTransaction(serializedTx);
    }
  }
};
</script>
