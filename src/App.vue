<template>
    <div id="app">
      <p>Hello Vue</p>
        <v-main-wrapper></v-main-wrapper>
    </div>
    
</template>

<script>
    
    import vMainWrapper from './components/v-main-wrapper'
    
export default {
    name: 'app',
    components:{
        vMainWrapper
    },
    data () {
    
    },
    methods:{
        setLocale(locale){
            this.$i18n.locale = locale
        }
    }
}
</script>

<style>
    
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

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
