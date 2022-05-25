<template>
  <div class="main-login">
    <div class="disable" v-if="!auth">
        <a-spin size="large"/>
    </div>
    <div class="main-container">
      <a-alert
        v-if="visible"
        :message="errorMessage"
        type="error"
        class="alert-error"
        closable
        :after-close="handleClose"
      />
      <p class="page-name">OpenMountain</p>
      <a-button
        @click="contractConnect"
        type="primary"
        shape="round"
        size="large"
        class="button-connect"
        >Connect Wallet</a-button
      >
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  name: "Login",
  data() {
    return { ethereumSupported: false, visible: false, errorMessage: "", auth : false };
  },
  async beforeMount() {
    if (await window.ethereum.selectedAddress) {
        this.auth = false
        window.location.replace("/");
    } else {
        this.auth = true
    }
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
    async contractConnect() {
      if (this.isEthereumSupported()) {
        // do something..
      }
    },
    async isEthereumSupported() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        try {
          await provider.getSigner();
          this.$router.push(`/`);
          return true;
        } catch (error) {
          this.visible = true;
          this.errorMessage = error.message;
          return false;
        }
      } else {
        this.visible = true;
        this.errorMessage =
          "Non-Ethereum browser detected. You should consider trying MetaMask!";
      }
    },
  },
};
</script>
<style scoped>
.main-login {
  height: 100vh;
  background-image: url("./static/images/mountain-background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  width: 100%;
}
.page-name {
  font-size: 8rem;
  font-family: system-ui;
  color: black;
  margin-bottom: 1rem;
}
.button-connect {
  font-size: 2rem;
  height: 4rem;
  font-family: system-ui;
}
.alert-error {
  position: fixed;
  top: 3rem;
}
.disable {
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.7;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
