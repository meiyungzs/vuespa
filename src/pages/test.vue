<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/hello">前往首页（返回hello页面）</router-link>
    <h2>--------测试嵌套路由，常用于导航--------</h2>
    <h2>是否登入{{isLogin}}---{{ this.$store.state.login.islogin }}</h2>
    <router-link to="/test/test1">前往test1页面</router-link>
    <router-link to="/test/test2">前往test2页面</router-link>
    <router-link :to="{path:'/test/params',query:{id:'123'}}">传递参数query</router-link>
    <router-link :to="{name:'params',params:{id:'11123'}}">传递参数params</router-link>
    <a @click="params" style="cursor: pointer;">点击传第参数</a>
    <router-link to="/test/params3">传递参数1</router-link>
    <h2>--------测试点击登入--------</h2>
    <a @click="loginIn" style="cursor: pointer;">Click this to test loginIn</a>
    <h2>--------测试点击退出--------</h2>
    <a @click="loginOut" style="cursor: pointer;">Click this to test loginOut</a>
    <h2>--------测试修改state--------</h2>
    <a @click="changeState" style="cursor: pointer;">Click this to test changeState</a>
    <h2>--------测试修改commit--------</h2>
    <a @click="setLogin" style="cursor: pointer;">Click this to test setLogin</a>    
    <h2>--------测试s删除本地信息clearLocalStorage--------</h2>
    <a @click="clearLocalStorage" style="cursor: pointer;">Click this to test clearLocalStorage</a>    
    <h2>--------测试Axios获取github数据，打开控制台看效果哦--------</h2>
    <a @click="searchGithub" style="cursor: pointer;">Click this to test Axios</a>
    <h2>--------测试 Modal组件（用到vuex控制状态）--------</h2>
    <a @click="showModal" style="cursor: pointer;">Click this to show Modal</a>
    <h2>--------测试 ElementUI-Message--------</h2>
    <a @click="testMessage" style="cursor: pointer;">Click this to test message</a>
    <h2>--------测试 ElementUI-Notify--------</h2>
    <a @click="testNotify" style="cursor: pointer;">Click this to test notify</a>
    <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
    <modal>
      <div class="test-modal">
        <h3>hello modal</h3>
      </div>
    </modal>
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
import modal from '@/components/popup/modal.vue'
export default {
  name: 'test',
  components: {
    modal
  },
  data() {
    return {
      msg: '这是test页面',
      id: 9863252,
      time: '2016-05-05 20:10:10'
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'login/isLogin'
    }),
    // ...mapState({
    //   isLogin: state => state.login.islogin
    // })
  },
  mounted() {},
  methods: {
    ...mapActions({
      loginIn: 'login/loginIn',
      loginOut: 'login/loginOut',
      showModal: 'popup/modal/showModal'
    }),
    searchGithub() {
      this.$http.get('/search/repositories', {
          q: 'vscode',
          sort: 'stars',
          order: 'desc'
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    testMessage() {
      let type = ['info', 'success', 'warning', 'error']
      let typeInt = parseInt(Math.random() * 4)
      this.$message({
        type: type[typeInt],
        message: '操作提示'
      })
    },
    testNotify() {
      let type = ['info', 'success', 'warning', 'error']
      let typeInt = parseInt(Math.random() * 4)
      this.$notify({
        title: '标题',
        message: '这是一条提示消息',
        type: type[typeInt]
      });
    },
    params() {
      //类似get传参，通过URL传递参数
      // this.$router.push({
      //     path: '/test/params',
      //     query: {
      //         id: 1
      //     }
      // });
      //类似post传参
      this.$router.push({
        name: 'params',
        params: {
          id: 1
        }
      });
    },
    changeState({ commit }) {
      this.$store.state.login.islogin = !this.$store.state.login.islogin;
    },
    setLogin() {
      // this.$store.commit('login/setLogin',false);
      this.$store.commit('login/setLogin',{id:123,params:2000});
    },
    clearLocalStorage() {
      localStorage.clear()
    },

  },
  watch: {
    "$store.state.login.islogin": function(argument) {
      console.log("监听$store.state.login.islogin==" + this.$store.state.login.islogin)
      // this.showModal();
    },
    isLogin: function(argument) {
      console.log(this.msg)
      console.log("监听islogin=="+ this.isLogin)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
  display: inline-block;
  color: #42b983;
  padding: 0 10px;
}

.test-modal {
  background-color: #fff;
  padding: 50px 200px
}

</style>
