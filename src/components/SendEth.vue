<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <p>gas price: {{ gasPrice }}</p>
            <div>
              <input v-model="receiverAddress" placeholder="Receiver Address" />
              <input v-model="value" placeholder="Value" />
              <input v-model="data" placeholder="Data" />
              <input v-model="gasLimit" placeholder="Gas Limit" />
              <button class="rainbow-button" @click="sendEth">Send</button>
              <!-- TODO: emit close event -->
              <button class="small-button" @click="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
