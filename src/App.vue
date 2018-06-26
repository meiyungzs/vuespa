<template>
  <div id="app">
    <!-- <h2 class="back"><a href="https://github.com/SirM2z/vue2.0-all-test">Go Back To Repository</a></h2> -->
    <h2 class="back"><a href="#">测试less是否登入{{isLogin}}</a></h2>
    <img src="~@/assets/images/logo.png">
    <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
    <load></load>
  </div>
</template>
<script>
import 'animate.css'
import '@/assets/style/common.css'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/notification.css'
import load from '@/components/popup/load.vue'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'app',
  components: {
    load
  },
  computed: {
    ...mapGetters({
      isLogin: 'login/isLogin'
    })
  },
  mounted: function() {},
  methods: {}
}

</script>
<style scoped lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.back {
  position: fixed;
  top: 10px;
  left: 20px;
}

h1,
h2 {
  font-weight: normal;
}

@color: #f938ab;
a {
  color: @color;
}

</style>
