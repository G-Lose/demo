<template>
    <div>购物车</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    method:{
        hit(){
            let obj = {a:"bbs"}
            let objData = Object.assign({},obj,{c:"ccccc"})
            console.log(objData,'objdatas')
        }
    },
    created(){
        this.hit()

    }
}
</script>