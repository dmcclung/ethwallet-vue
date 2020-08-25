<template>
    <div>
        <div>
            <input v-model="receiverAddress" placeholder="Receiver Address" />
            <input v-model="value" placeholder="Value"/>
            <button v-on:click="sendEth">Send Eth</button>
        </div>
    </div>
</template>

<script>
import { web3 } from "../web3"

export default {
    data: {
        /**
         * Address of receiver in current eth transaction
         */
        receiverAddress: null,

        /**
         * Value to be sent in current eth transaction
         */
        value: '0'
    },
    methods: {
        async sendEth() {
            const txParams = {
                nonce: '0x00',
                gasPrice: '0x09184e72a000',
                gasLimit: '0x2710',
                to: this.receiverAddress,
                value: this.value,
                data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
            };

            const tx = new EthTx(txParams, { chain: 'ropsten' });
            tx.sign(this.wallet.getPrivateKey());
            const serializedTx = tx.serialize();
            web3.eth.sendTransaction(serializedTx);
        },

    }
}
</script>



        