import { createStore } from "vuex";
import { hdkey as HDKey } from "ethereumjs-wallet";
import * as bip39 from "bip39";
import passworder from "browser-passworder";

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
      //localStorage.setItem("encryptedPrivateKey", state.encryptedPrivateKey);
    },
    unsetEncryptedPrivateKey(state) {
      state.encryptedPrivateKey = null;
      //localStorage.removeItem("encryptedPrivateKey");
    },
    setMnemonic(state, payload) {
      state.mnemonic = payload.mnemonic;
    },
    unsetMnemonic(state) {
      state.mnemonic = "";
    },
    setAddress(state, payload) {
      state.address = payload.address;
      //localStorage.setItem("address", state.address);
    },
    unsetAddress(state) {
      state.address = "";
      //localStorage.removeItem("address");
    }
  },
  actions: {
    async unlockWallet({ commit, getters }, payload) {
      const privateKey = await passworder.decrypt(
        payload.password,
        getters.encryptedPrivateKey
      );
      commit({ type: "setPrivateKey", privateKey: privateKey });
    },

    lockWallet({ commit }) {
      commit("unsetPrivateKey");
    },

    async createWallet({ commit }, payload) {
      // what moves out and what becomes part of the payload
      const seed = await bip39.mnemonicToSeed(
        payload.mnemonic,
        payload.password
      );

      const hdkey = HDKey.fromMasterSeed(seed);
      const hdWallet = hdkey.getWallet();
      const privateKey = hdWallet.getPrivateKey();
      const address = hdWallet.getAddressString();
      const encryptedPrivateKey = await passworder.encrypt(
        payload.password,
        privateKey
      );

      commit({
        type: "setEncryptedPrivateKey",
        encryptedPrivateKey: encryptedPrivateKey
      });
      commit({ type: "setAddress", address: address });
      commit({ type: "setPrivateKey", privateKey: privateKey });
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
