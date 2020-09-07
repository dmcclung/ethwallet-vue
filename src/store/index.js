import { createStore } from "vuex";

export default createStore({
  strict: true,
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
     * BIP39 Mnemonic word list, this is only needed during mnemonic creation
     */
    mnemonic: ""
  },
  mutations: {
    setKeystore(state, payload) {
      state.v3KeyStore = payload.keystore;
    },
    setWallet(state, payload) {
      console.log(`Called setwallet ${payload.wallet.getAddressString()}`);
      state.wallet = payload.wallet;
      console.log(`state.wallet ${state.wallet.getAddressString()}`);
    },
    setMnemonic(state, payload) {
      state.mnemonic = payload.mnemonic;
    },
    clearMnemonic(state) {
      state.mnemonic = "";
    },
    lockWallet(state) {
      state.wallet = null;
    }
  },
  actions: {},
  modules: {}
});
