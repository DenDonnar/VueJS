<template>
    <div class="">
        <p>{{title}}</p>
        <v-catalog></v-catalog>
        <v-cart></v-cart>
    </div>
</template>

<script>
    
    import vCatalog from './v-catalog'
    import vCart from './v-cart'
    
    export default{
    name: 'v-main-wrapper',
    components:{
        vCatalog,
        vCart
    },
    props:{
        
    },
    data () {
        return{
            title:'Main wrapper'
        }
    },
    computed:{
        
    },
    methods:{
        
    },
    watch: {
        
    }
}
</script>

<style scoped>
    .v-main-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>