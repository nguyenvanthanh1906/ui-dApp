<template>
  <div>{{balance}}</div>
</template>

<script>
import { ethers } from "ethers";
export default {
  name: 'IndexPage',
  data() {
    return { balance: 0};
  },
  async beforeMount() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    var address = await provider.getSigner().getAddress()
    var balance = ethers.utils.formatEther(await provider.getSigner().getBalance())
    this.balance = balance
  },
}
</script>
