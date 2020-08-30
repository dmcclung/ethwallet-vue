import { createStore } from "vuex";

export default createStore({
  state: {
    /**
     * Wallet provided by ethereumjs-wallet, if created with this app,
     * a heirarchical deterministic wallet generated from a bip39 mnemonic
     */
    wallet: null,

    /**
     * Encrypted keystore string
     */
    v3KeyStore: null,

    /**
     * BIP39 Mnemonic word list
     */
    mnemonic: "",

    /**
     * Nonce
     */
    nonce: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
