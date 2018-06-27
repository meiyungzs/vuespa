import {
    LOGIN_IN,
    LOGIN_OUT
} from '../types'

const state = {
    islogin: false
}

const actions = {
    ['loginIn']({ commit }) {
        commit(LOGIN_IN)
    },
    ['loginOut']({ commit }) {
        commit(LOGIN_OUT)
    }
}

const mutations = {
    [LOGIN_IN](state, action) {
        console.log("登入")
        state.islogin = true
        localStorage.setItem("islogin",true)
    },
    [LOGIN_OUT](state, action) {
        console.log("登出")
        state.islogin = false
    },
    setLogin(state, options) {
        console.log("设置状态"+options)
        state.islogin = options
        localStorage.setItem("islogin",options)
    }
}

const getters = {
    isLogin: (state, getters) => {
        return state.islogin
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
