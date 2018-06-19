<!-- **子组件代码** -->
<template>
    <button @click="incrementCounter">{{counter}}</button>
</template>
<script>
    export default {
        name: 'button-counter',
        data () {
            return {
                counter: 0
            }
        },
        methods: {
            incrementCounter () {
                this.$emit('increment')
                this.counter++
            }
        }
    }
</script>