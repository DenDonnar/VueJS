<template>
    <div class="">
        <p><h1>{{title}}</h1></p>
    </div>
</template>

<script>
    export default{
    name: 'v-catalog',
    components:{
        
    },
    props:{
        
    },
    data () {
        return{
            title:'Catalog'
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
    .v-catalog{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>