<template>
    <div>购物车</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        hit(){
            let obj = {a:"bbs"}
            let objData = Object.assign({},obj,{c:"ccccc","dd":"ddddds"})
            console.log(objData,'objdatas')
        }
    },
    created(){
        this.hit()

    }
}
</script>