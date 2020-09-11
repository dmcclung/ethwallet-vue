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
     * Encrypted wallet
     */
    encryptedWallet: null,

    /**
     * BIP39 Mnemonic word list, this is only needed during mnemonic creation
     */
    mnemonic: ""
  },
  mutations: {
    setKeystore(state, payload) {
      state.v3Keystore = payload.keystore;
    },
    setWallet(state, payload) {
      state.wallet = payload.wallet;
    },
    setEncryptedWallet(state, payload) {
      state.encryptedWallet = payload.encryptedWallet;
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
