<template>
  <div id="wrapper">
    <Header></Header>
    <Nuxt />
    <a href="#" id="back-to-top"></a>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  name: 'Default',
  components: {
    Header,
    Footer
  },
}
</script>