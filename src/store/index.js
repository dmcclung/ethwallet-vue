import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    /**
     * Key is created by wallet provided by ethereumjs-wallet, if created with this app,
     * a heirarchical deterministic wallet generated from a bip39 mnemonic
     */
    privateKey: null,

    /**
     * String hex formatted address
     */
    address: "",

    /**
     * Encrypted private key to be used to restore wallet if locked
     */
    encryptedPrivateKey: null,

    /**
     * BIP39 Mnemonic word list, this is only needed during mnemonic creation
     */
    mnemonic: ""
  },
  getters: {
    address(state) {
      return state.address;
    },
    mnemonic(state) {
      return state.mnemonic;
    },
    privateKey(state) {
      return state.privateKey;
    },
    encryptedPrivateKey(state) {
      return state.encryptedPrivateKey;
    }
  },
  mutations: {
    setPrivateKey(state, payload) {
      state.privateKey = payload.privateKey;
    },
    unsetPrivateKey(state) {
      state.privateKey = null;
    },
    setEncryptedPrivateKey(state, payload) {
      state.encryptedPrivateKey = payload.encryptedPrivateKey;
    },
    unsetEncryptedPrivateKey(state) {
      state.encryptedPrivateKey = null;
    },
    setMnemonic(state, payload) {
      state.mnemonic = payload.mnemonic;
    },
    unsetMnemonic(state) {
      state.mnemonic = "";
    },
    setAddress(state, payload) {
      state.address = payload.address;
    },
    unsetAddress(state) {
      state.address = "";
    }
  },
  actions: {
    createWallet({ commit }, payload) {
      commit({
        type: "setEncryptedPrivateKey",
        encryptedPrivateKey: payload.encryptedPrivateKey
      });
      commit({ type: "setAddress", address: payload.address });
      commit({ type: "setPrivateKey", privateKey: payload.privateKey });
      commit("unsetMnemonic");
    },
    destroyWallet({ commit }) {
      commit("unsetEncryptedPrivateKey");
      commit("unsetPrivateKey");
      commit("unsetAddress");
      commit("unsetMnemonic");
    }
  },
  modules: {}
});
