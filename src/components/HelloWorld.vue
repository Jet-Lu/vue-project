<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    const proxy = new Proxy({}, {
      // set: (target, value) => {
      //   return value;
      // },
      get: (target, property) => {
        return property;
      }
    });
    console.log(proxy.time);
    console.log(proxy.name);
    console.log(proxy.title);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './style.less';
</style>
