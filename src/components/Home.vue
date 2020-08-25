<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    walletCreated() {
      return this.$store.state.wallet != null;
    }
  }
};
</script>
