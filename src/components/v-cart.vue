<template>
    <div class="">
        <p>{{title}}</p>
        <v-catalog-item></v-catalog-item>
    </div>
</template>

<script>
    
    import vCatalogItem from './v-catalog-item'
    
    export default{
    name: 'v-cart',
    components:{
        vCatalogItem
    },
    props:{
        
    },
    data () {
        return{
            title:'cart'
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