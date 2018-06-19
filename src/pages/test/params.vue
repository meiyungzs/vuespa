<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test">前往test页面</router-link>
    <h2 @click="showParams">点击打印id</h2>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: "展示id",
    }
  },
  created: function() {
      console.log(this.$route.query)
      console.log(this.$route.params)
  },
  methods:{
    showParams(){
      console.log(this.$route.query)
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
