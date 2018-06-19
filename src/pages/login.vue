<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <router-link to="/test">前往test页面（测试路由）</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '这个登入页面',
      testimgsrc: ''
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
