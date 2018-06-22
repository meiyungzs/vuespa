<!-- **父组件代码** -->
<!-- <template>
    <header-box :title-txt="showTitleTxt"></header-box>
</template>
<script>
    import Header from './header'
    export default {
        name: 'index',
        components: {
            'header-box': Header
        },
        data () {
            return {
                showTitleTxt: '首页'
            }
        }
    }
</script> -->





<!-- <template>
    <header-box :title-txt="showTitleTxt"></header-box>
</template>
<script>
    import Header from './header'
    export default {
        name: 'index',
        components: {
            'header-box': Header
        },
        data () {
            return {
                showTitleTxt: {
                    name: '首页'
                }
            }
        }
    }
</script> -->









<template>
    <div id="counter-event-example">
      <p>{{ total }}</p>
      <button-counter @increment="incrementTotal"></button-counter>
</div>
</template>
<script>
    import ButtonCounter from './buttonCounter'
    export default {
        name: 'parent',
        components: {
            'button-counter': ButtonCounter
        },
        data () {
            return {
                total: 0
            }
        },
        methods: {
            incrementTotal () {
                this.total++
            }
        }
    }
</script>